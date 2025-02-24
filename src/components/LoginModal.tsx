import React, { useState } from 'react';
import { X, Flag } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { sendPasswordResetEmail, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { doc, setDoc } from 'firebase/firestore';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const IndianFlag = () => (
  <svg 
    className="w-4 h-4" 
    viewBox="0 0 6 4"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="6" height="4" fill="#FF9933"/>
    <rect width="6" height="1.33" y="1.33" fill="#FFFFFF"/>
    <rect width="6" height="1.33" y="2.67" fill="#138808"/>
    <circle cx="3" cy="2" r="0.4" fill="#000080"/>
  </svg>
);

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const { login, signup, sendVerificationEmail } = useAuth();

  // For login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // For signup
  const [signUpData, setSignUpData] = useState<SignUpData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [isVerificationSent, setIsVerificationSent] = useState(false);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setResetMessage('');

    try {
      if (isLogin) {
        await login(loginEmail, loginPassword);
        onClose();
      } else {
        // Validate all fields
        if (!signUpData.firstName || !signUpData.lastName || !signUpData.email || 
            !signUpData.phone || !signUpData.password || !signUpData.confirmPassword) {
          setError('Please fill in all fields');
          return;
        }

        // Validate password match
        if (signUpData.password !== signUpData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }

        // Validate phone number
        if (signUpData.phone.length !== 10) {
          setError('Please enter a valid 10-digit phone number');
          return;
        }

        // Create account and send verification email
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          signUpData.email,
          signUpData.password
        );
        
        // Save user profile to Firestore
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          firstName: signUpData.firstName,
          lastName: signUpData.lastName,
          email: signUpData.email,
          phone: signUpData.phone,
          createdAt: new Date().toISOString(),
          isEmailVerified: false
        });
        
        setResetMessage('Account created! Please check your email to verify your account before logging in.');
        // Switch to login view after successful signup
        setIsLogin(true);
      }
    } catch (err: any) {
      console.error("Auth error:", err);
      setError(err.message || 'Failed to ' + (isLogin ? 'log in' : 'sign up'));
    }
  }

  async function handleForgotPassword() {
    if (!loginEmail) {
      setError('Please enter your email address');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, loginEmail);
      setError('');
      setResetMessage('Password reset email sent! Please check your inbox.');
    } catch (err) {
      setError('Failed to send password reset email');
    }
  }

  function handleSignUpChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    
    // Special handling for phone number
    if (name === 'phone') {
      // Remove any non-digit characters and limit to 10 digits
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setSignUpData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setSignUpData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-xl mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        
        {error && (
          <p className="text-red-500 mb-4 bg-red-50 p-3 rounded-xl text-sm">
            {error}
          </p>
        )}

        {resetMessage && (
          <p className="text-green-500 mb-4 bg-green-50 p-3 rounded-xl text-sm">
            {resetMessage}
          </p>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {isLogin ? (
            // Login Form
            <>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-[18px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-[18px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-blue-600 hover:text-blue-700 mt-2 font-medium"
                >
                  Forgot Password?
                </button>
              </div>
            </>
          ) : (
            // Sign Up Form
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={signUpData.firstName}
                    onChange={handleSignUpChange}
                    className="w-full p-3 border border-gray-300 rounded-[18px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={signUpData.lastName}
                    onChange={handleSignUpChange}
                    className="w-full p-3 border border-gray-300 rounded-[18px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                  className="w-full p-3 border border-gray-300 rounded-[18px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <div className="flex">
                  <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-[18px] rounded-r-none bg-gray-50">
                    <IndianFlag />
                    <span className="text-gray-600 font-medium ml-2">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={signUpData.phone}
                    onChange={handleSignUpChange}
                    className="w-full p-3 border border-gray-300 rounded-[18px] rounded-l-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                    placeholder="Enter your phone number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    onKeyPress={(e) => {
                      // Allow only numeric input
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
                <p className="text-gray-500 text-xs mt-1">
                  Enter 10 digit mobile number
                </p>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={signUpData.password}
                  onChange={handleSignUpChange}
                  className="w-full p-3 border border-gray-300 rounded-[18px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                  placeholder="Create password"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={signUpData.confirmPassword}
                  onChange={handleSignUpChange}
                  className="w-full p-3 border border-gray-300 rounded-[18px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                  placeholder="Confirm password"
                />
              </div>
            </>
          )}
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-[18px] hover:bg-blue-700 transition-colors font-medium"
          >
            {isLogin ? 'Login' : (isVerificationSent ? 'Complete Sign Up' : 'Send Verification Email')}
          </button>
        </form>
        
        <p className="mt-6 text-center text-gray-600 text-sm">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
              setResetMessage('');
              // Reset all form fields
              setLoginEmail('');
              setLoginPassword('');
              setSignUpData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: ''
              });
            }}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
} 