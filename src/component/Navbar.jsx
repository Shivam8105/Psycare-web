import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "lucide-react";

// Nav items with routes
const navItems = [
  { name: "Dashboard", Icon: Home, route: "/dashboard" },
  { name: "AI Chat", Icon: MessageCircle, route: "/chat" },
  { name: "Book", Icon: BookOpen, route: "/book" },
  { name: "Resources", Icon: Archive, route: "/resources" },
  { name: "Community", Icon: Users, route: "/community" },
  { name: "Appointments", Icon: Calendar, route: "/appointments" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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

        {/* Desktop Navigation */}
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

        {/* Desktop SignIn Button */}
        <button
          onClick={() => navigate("/auth")}
          className="hidden lg:flex items-center bg-green-900 text-green-100 px-4 lg:px-5 py-2 rounded-full font-semibold shadow hover:bg-green-800 transition duration-150 text-sm lg:text-base"
        >
          <User className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
          SignIn / Signup
        </button>

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
            {navItems.map(({ name, Icon, route }, idx) => (
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

            {/* Mobile SignIn Button */}
            <div className="pt-3 border-t border-green-200 mt-4">
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
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;