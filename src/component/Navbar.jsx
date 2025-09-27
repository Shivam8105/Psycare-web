import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Home,
  MessageCircle,
  BookOpen,
  Archive,
  Users,
  Calendar,
  User,
  Menu,
  X,
  LogOut,
  ChevronDown,
  Settings,
} from "lucide-react";

// Nav items with routes
const navItems = [
  { name: "Dashboard", Icon: Home, route: "/" },
  { name: "AI Chat", Icon: MessageCircle, route: "/chat" },
  { name: "Book", Icon: BookOpen, route: "/book" },
  { name: "Resources", Icon: Archive, route: "/resources" },
  { name: "Community", Icon: Users, route: "/community" },
  { name: "Appointments", Icon: Calendar, route: "/appointments" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user, logout, loading } = useAuth();
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      setIsMobileMenuOpen(false);
      setIsUserDropdownOpen(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleProfile = () => {
    navigate('/profile');
    setIsUserDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-[#F5FCF8] border-b border-gray-300 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="logo.jpeg"
            alt="psycare-logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl"
          />
          <div className="flex flex-col justify-center ml-2 sm:ml-3">
            <span className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug">
              PsyCare
            </span>
            <span className="text-xs sm:text-sm text-[#A3A3C2] -mt-1">
              by NeuroNova
            </span>
          </div>
        </div>

        {/* Desktop Navigation - Only show if authenticated */}
        {isAuthenticated && (
          <div className="hidden lg:flex items-center bg-[#E4F0EA] rounded-full px-3 py-3">
            {navItems.map(({ name, Icon, route }, idx) => (
              <button
                key={name}
                onClick={() => {
                  setActiveIndex(idx);
                  navigate(route);
                }}
                className={`flex items-center px-3 xl:px-4 py-1 text-sm xl:text-md font-medium rounded-full transition ${
                  activeIndex === idx
                    ? "bg-white text-gray-800 shadow-sm"
                    : "text-gray-600 hover:text-green-700"
                }`}
              >
                <Icon className="w-4 h-4 mr-1" />
                <span className="hidden xl:inline">{name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Desktop Auth Button */}
        <div className="hidden lg:flex items-center space-x-3">
          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
              {/* User Dropdown Button */}
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center space-x-2 bg-green-50 hover:bg-green-100 px-3 py-2 rounded-full transition-colors duration-200 border border-green-200"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {user?.avatar ? user.avatar : (user?.name?.charAt(0).toUpperCase() || 'U')}
                  </span>
                </div>
                <span className="text-gray-700 font-medium">
                  {user?.funnyName || user?.name || 'User'}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <button
                    onClick={handleProfile}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    Profile
                  </button>
                  <hr className="my-1 border-gray-200" />
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    disabled={loading}
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    {loading ? 'Logging out...' : 'Logout'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="flex items-center bg-green-900 text-green-100 px-4 lg:px-5 py-2 rounded-full font-semibold shadow hover:bg-green-800 transition duration-150 text-sm lg:text-base"
            >
              <User className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
              SignIn / Signup
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 hover:bg-green-200 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-green-700" />
          ) : (
            <Menu className="w-5 h-5 text-green-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-green-200 bg-gradient-to-b from-green-50 to-white shadow-xl">
          <div className="px-4 py-4 space-y-2">
            {/* Show navigation items only if authenticated */}
            {isAuthenticated && navItems.map(({ name, Icon, route }, idx) => (
              <button
                key={name}
                onClick={() => {
                  setActiveIndex(idx);
                  setIsMobileMenuOpen(false);
                  navigate(route);
                }}
                className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeIndex === idx
                    ? "bg-green-100 text-green-800 border border-green-300 shadow-sm"
                    : "text-gray-600 hover:bg-white hover:text-green-700 hover:shadow-sm"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {name}
              </button>
            ))}

            {/* Mobile Auth Button */}
            <div className={`pt-3 border-t border-green-200 ${isAuthenticated ? 'mt-4' : 'mt-0'}`}>
              {isAuthenticated ? (
                <>
                  {/* User Info */}
                  <div className="flex items-center space-x-3 px-4 py-2 mb-3 bg-green-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {user?.avatar ? user.avatar : (user?.name?.charAt(0).toUpperCase() || 'U')}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">{user?.funnyName || user?.name || 'User'}</p>
                      <p className="text-gray-500 text-sm">{user?.email}</p>
                    </div>
                  </div>
                  
                  {/* Profile Button */}
                  <button
                    onClick={handleProfile}
                    className="flex items-center justify-center w-full bg-green-600 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition-all duration-200 mb-2"
                  >
                    <Settings className="w-5 h-5 mr-2" />
                    Profile
                  </button>
                  
                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center w-full bg-red-600 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:bg-red-700 transition-all duration-200"
                    disabled={loading}
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    {loading ? 'Logging out...' : 'Logout'}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/auth");
                  }}
                  className="flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  <User className="w-5 h-5 mr-2" />
                  SignIn / Signup
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;