import React, { useState } from "react";

const AuthSection = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState("😊");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    funnyName: "",
  });

  const avatars = [
    "😊", "😇", "🐻", "😉", "🌸", "⭐", "🥸", "🌙", "🌻", "🦋", "🍃",
    "🚀", "❤️", "⚡", "🎉", "🐱", "🍀", "🌟",
  ];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    // Demo simulation of backend call
    setTimeout(() => {
      setSuccess(isSignUp ? "Signup successful!" : "Login successful!");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen pt-14 pb-8 overflow-hidden bg-gradient-to-tr from-green-50 via-emerald-50 to-teal-50">
      
      {/* === Creative animated background === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing nodes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-emerald-200/40 blur-3xl animate-[float_8s_ease-in-out_infinite]`}
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Connecting lines (SVG) */}
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="10%" x2="80%" y2="30%" stroke="#34D39933" strokeWidth="2" />
          <line x1="50%" y1="0%" x2="90%" y2="50%" stroke="#06B6D433" strokeWidth="2" />
          <line x1="20%" y1="70%" x2="70%" y2="90%" stroke="#10B98133" strokeWidth="2" />
          <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#34D39922" strokeWidth="1.5" />
          <line x1="30%" y1="20%" x2="60%" y2="80%" stroke="#06B6D422" strokeWidth="1.5" />
        </svg>

        {/* Floating wavy lines */}
        <svg className="absolute w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="url(#gradient1)" d="M0,160 C320,80 720,280 1440,120 L1440,320 L0,320 Z" />
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-2">
          Join the PsyCare Community
        </h1>
        <p className="text-lg md:text-xl text-emerald-700 font-medium">
          Create your account and start your mental wellness journey today
        </p>
      </div>

      {/* Auth Card */}
      <div className="relative z-10 flex justify-center">
        <div className="bg-white rounded-3xl shadow-lg max-w-xl w-full p-10">
          
          {/* Toggle Buttons */}
          <div className="flex mb-6 bg-gray-100 rounded-xl p-1">
            <button
              className={`flex-1 py-2 rounded-l-xl font-semibold transition-all ${
                isSignUp
                  ? "bg-green-100 text-emerald-900 shadow-inner"
                  : "bg-gray-200 text-gray-400"
              }`}
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
            <button
              className={`flex-1 py-2 rounded-r-xl font-semibold transition-all ${
                !isSignUp
                  ? "bg-green-100 text-emerald-900 shadow-inner"
                  : "bg-gray-200 text-gray-400"
              }`}
              onClick={() => setIsSignUp(false)}
            >
              Login
            </button>
          </div>

          {/* Avatar Selection */}
          {isSignUp && (
            <div className="mb-6">
              <h6 className="mb-3 font-semibold text-gray-700">Choose Your Avatar</h6>
              <div className="flex flex-wrap justify-center">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 flex items-center justify-center rounded-xl cursor-pointer text-xl m-1 transition-all ${
                      selectedAvatar === avatar
                        ? "border-2 border-emerald-500 bg-green-50 shadow-[0_0_0_4px_#d1fae5]"
                        : "border-2 border-gray-200 bg-white"
                    }`}
                    onClick={() => setSelectedAvatar(avatar)}
                  >
                    {avatar}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {error && <div className="mb-4 text-red-500 font-semibold text-center">{error}</div>}
            {success && <div className="mb-4 text-green-600 font-semibold text-center">{success}</div>}

            {isSignUp && (
              <>
                {/* Full Name */}
                <div className="mb-4 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-green-50 border border-green-100 text-gray-700 font-medium focus:ring-2 focus:ring-emerald-300 outline-none"
                  />
                </div>

                {/* Funny Name */}
                <div className="mb-4 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">😉</span>
                  <input
                    type="text"
                    name="funnyName"
                    placeholder="Your Funny Name (Optional)"
                    value={formData.funnyName}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-green-50 border border-green-100 text-gray-700 font-medium focus:ring-2 focus:ring-emerald-300 outline-none"
                  />
                </div>
              </>
            )}

            {/* Email */}
            <div className="mb-4 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-green-50 border border-green-100 text-gray-700 font-medium focus:ring-2 focus:ring-emerald-300 outline-none"
              />
            </div>

            {/* Password */}
            <div className="mb-6 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-12 py-3 rounded-lg bg-green-50 border border-green-100 text-gray-700 font-medium focus:ring-2 focus:ring-emerald-300 outline-none"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-lg"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Role Selection */}
            {isSignUp && (
              <div className="mb-6">
                <p className="font-semibold text-gray-700 mb-2">Register As❓</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: "student" })}
                    className={`py-2 rounded-lg font-semibold transition-all ${
                      formData.role === "student"
                        ? "bg-green-100 border-2 border-emerald-500 text-emerald-800 shadow-md"
                        : "bg-green-50 border-2 border-green-100 text-gray-500"
                    }`}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: "admin" })}
                    className={`py-2 rounded-lg font-semibold transition-all ${
                      formData.role === "admin"
                        ? "bg-green-100 border-2 border-emerald-500 text-emerald-800 shadow-md"
                        : "bg-green-50 border-2 border-green-100 text-gray-500"
                    }`}
                  >
                    Admin
                  </button>
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-emerald-400 to-teal-400 shadow-md hover:shadow-lg transition"
              disabled={loading}
            >
              {loading ? (isSignUp ? "Signing Up..." : "Logging In...") : (isSignUp ? "Create Account" : "Login")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthSection;