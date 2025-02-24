import React, { useState, useRef, useEffect } from 'react';
import { Menu, User, Phone, ChevronDown } from 'lucide-react';
import { LoginModal } from './LoginModal';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentUser, userProfile, logout } = useAuth();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setIsDropdownOpen(false);
    } catch (error) {
      console.error('Failed to log out');
    }
  };

  const menuItems = [
    { label: 'My Appointments', href: '#' },
    { label: 'My Medical Records', href: '#' },
    { label: 'My Online Consultations', href: '#' },
    { label: 'My Feedback', href: '#' },
    { label: 'View / Update Profile', href: '#' },
    { label: 'Settings', href: '#' },
  ];

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              MediMeet
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link
                  to="/doctors"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-semibold"
                >
                  Find Doctors
                </Link>
                <Link
                  to="/instant-consult"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-semibold"
                >
                  Instant Consult
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center">
              <Phone size={20} className="text-gray-600 mr-2" />
              <span className="text-gray-600">1800-123-4567</span>
            </div>
            
            <div className="flex items-center gap-4">
              {currentUser ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <User className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-800">
                      {userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : 'Loading...'}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-600" />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-lg overflow-hidden z-50 border border-gray-200 transform translate-x-20">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="font-medium text-gray-800">
                          {userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : 'Loading...'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {currentUser.phoneNumber || userProfile?.phone}
                        </div>
                      </div>
                      
                      <div className="py-1">
                        {menuItems.map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            className="block mx-2 px-4 py-2.5 text-sm text-gray-700 rounded-xl 
                            transition-all duration-200 ease-in-out
                            hover:bg-gray-50 hover:shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1)]
                            active:shadow-none active:bg-gray-100"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                      
                      <div className="border-t border-gray-100">
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-6 py-2.5 text-sm text-red-600
                          transition-all duration-200 ease-in-out
                          hover:bg-red-50 hover:shadow-[0_2px_8px_-1px_rgba(239,68,68,0.1)]
                          active:shadow-none active:bg-red-100"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-gray-700 px-6 py-2 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Sign up
                  </button>
                </div>
              )}
            </div>
            
            <button className="md:hidden">
              <Menu size={24} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </nav>
  );
}

export default Navbar;