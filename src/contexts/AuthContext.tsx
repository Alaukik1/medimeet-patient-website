import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  Auth,
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  applyActionCode,
  sendSignInLinkToEmail
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

interface AuthContextType {
  currentUser: User | null;
  userProfile: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, userData: {
    firstName: string;
    lastName: string;
    phone: string;
  }) => Promise<void>;
  sendVerificationEmail: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  async function sendVerificationEmail(email: string) {
    try {
      const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: window.location.href,
        // This must be true
        handleCodeInApp: true
      };

      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      
      // Save the email in localStorage so we can use it after email verification
      localStorage.setItem('emailForSignIn', email);
      
      return true;
    } catch (error: any) {
      console.error("Error sending verification email:", error);
      // Return more specific error message
      if (error.code === 'auth/invalid-email') {
        throw new Error("Invalid email address");
      } else if (error.code === 'auth/unauthorized-domain') {
        throw new Error("Domain not authorized. Please add it to Firebase Console.");
      } else {
        throw new Error(error.message || "Failed to send verification email");
      }
    }
  }

  async function signup(email: string, password: string, userData: {
    firstName: string;
    lastName: string;
    phone: string;
  }) {
    try {
      // Create the user first
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send verification email
      await sendEmailVerification(user);

      try {
        // Store additional user data in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          id: user.uid,
          email: email,
          phoneNumber: userData.phone,
          firstName: userData.firstName,
          lastName: userData.lastName,
          accountStatus: "pending", // Keep as pending until email is verified
          avatarId: 1,
          createdAt: Date.now(),
          isEmailVerified: false,
          isFirstLogin: true
        });

        return userCredential;
      } catch (firestoreError) {
        await user.delete();
        console.error("Firestore Error:", firestoreError);
        throw new Error("Failed to create user profile");
      }
    } catch (error: any) {
      console.error("Auth Error:", error);
      if (error.code === 'auth/email-already-in-use') {
        throw new Error("Email already in use");
      } else {
        throw new Error(error.message || "Failed to create account");
      }
    }
  }

  async function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    return signOut(auth);
  }

  const fetchUserProfile = async (uid: string) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        setUserProfile({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone
        });
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        fetchUserProfile(user.uid);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    login,
    signup,
    sendVerificationEmail,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 