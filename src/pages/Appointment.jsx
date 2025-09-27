import React from "react";

export default function AppointmentsPage() {
  // Demo appointment data
  const appointments = [
    {
      _id: 1,
      name: "Dr. Meera Kapoor",
      expertise: "Cognitive Therapist",
      status: "Confirmed",
      color: "green",
      date: "2025-10-05",
      time: "10:30 AM",
      duration: "45 mins",
      emoji: "🧠",
    },
    {
      _id: 2,
      name: "Dr. Raj Sharma",
      expertise: "Clinical Psychologist",
      status: "Pending",
      color: "orange",
      date: "2025-10-10",
      time: "3:00 PM",
      duration: "60 mins",
      emoji: "💬",
    },
  ];

  const colorClasses = {
    green: "bg-emerald-100 text-emerald-700",
    orange: "bg-amber-100 text-amber-700",
    purple: "bg-purple-100 text-purple-700",
    default: "bg-gray-100 text-gray-700",
  };

  return (
    <div
      id="appointments"
      className="relative min-h-screen overflow-hidden 
                 bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50"
    >
      {/* === Multi-color, digital-health inspired background === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft floating circles */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-[-5rem] w-80 h-80 bg-teal-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-5rem] left-1/3 w-96 h-96 bg-lime-200/25 rounded-full blur-3xl animate-pulse" />

        {/* Soft wavy lines for “digital” feel */}
        <svg
          className="absolute w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="url(#gradient1)"
            d="M0,200 C320,100 720,300 1440,150 L1440,320 L0,320 Z"
          />
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating semi-transparent squares */}
        <div className="absolute top-20 left-1/2 w-20 h-20 bg-emerald-100/20 rotate-12 rounded-lg animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-teal-100/15 rotate-45 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-1/4 left-2/3 w-24 h-24 bg-lime-100/20 rotate-6 rounded-lg animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-4 py-10">
        {/* Page Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-emerald-900">
            Your Appointments
          </h1>
          <p className="text-emerald-700 text-base mt-2">
            Manage your counseling sessions and track your mental-health journey
          </p>
        </div>

        {/* Appointment Cards */}
        <div className="space-y-6">
          {appointments.map((s) => (
            <div
              key={s._id}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-emerald-200 transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-emerald-900">
                    <span>{s.emoji || "👤"}</span> {s.name}
                  </h3>
                  <p className="text-sm text-emerald-700">{s.expertise}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    colorClasses[s.color] || colorClasses.default
                  }`}
                >
                  {s.status}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-emerald-800">
                <span>📅 {s.date}</span>
                <span>🕑 {s.time}</span>
                <span>⏱ {s.duration}</span>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  className="px-4 py-2 rounded-md text-sm font-medium 
                             bg-emerald-600 text-white hover:bg-emerald-700 transition"
                  onClick={() => alert(`Starting session with ${s.name}`)}
                >
                  Start Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}