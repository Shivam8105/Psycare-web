import React, { useState } from "react";
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

const navItems = [
    { name: "Home", Icon: Home },
    { name: "AI Chat", Icon: MessageCircle },
    { name: "Book", Icon: BookOpen },
    { name: "Resources", Icon: Archive },
    { name: "Community", Icon: Users },
    { name: "Appointments", Icon: Calendar },
];

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-[#F5FCF8] border-b border-gray-300 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="logo.jpeg" alt="psycare-logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl" />
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
                    {navItems.map(({ name, Icon }, idx) => (
                        <button
                            key={name}
                            onClick={() => setActiveIndex(idx)}
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
                <button className="hidden sm:flex items-center bg-green-900 text-green-100 px-4 lg:px-5 py-2 rounded-full font-semibold shadow hover:bg-green-800 transition duration-150 text-sm lg:text-base">
                    <User className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                    <span className="hidden md:inline">SignIn / Signup</span>
                    <span className="md:hidden">Sign In</span>
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-5 h-5 text-gray-600" />
                    ) : (
                        <Menu className="w-5 h-5 text-gray-600" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
                    <div className="px-4 py-3 space-y-1">
                        {navItems.map(({ name, Icon }, idx) => (
                            <button
                                key={name}
                                onClick={() => {
                                    setActiveIndex(idx);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition ${
                                    activeIndex === idx
                                        ? "bg-green-50 text-green-700 border border-green-200"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-green-700"
                                }`}
                            >
                                <Icon className="w-5 h-5 mr-3" />
                                {name}
                            </button>
                        ))}
                        
                        {/* Mobile SignIn Button */}
                        <button className="flex items-center justify-center w-full bg-green-900 text-green-100 px-4 py-3 rounded-lg font-semibold shadow hover:bg-green-800 transition duration-150 mt-4">
                            <User className="w-5 h-5 mr-2" />
                            SignIn / Signup
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;