import { Calendar, Clock, MessageSquare, ChevronDown, Loader, User } from "lucide-react";
import { useState } from "react";

const BookSessionPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-green-100 via-green-50 to-green-200 flex flex-col items-center pt-10 pb-20 font-poppins">
      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-500 to-teal-400 animate-pulse mb-3">
          Book Your Wellness Session{" "}
          <span className="block text-4xl text-green-500 mt-2 font-light">
            with a Professional Counselor 
          </span>
        </h1>
        <span className="block h-1 rounded-full bg-green-400 w-36 mx-auto mt-2 animate-fade-in"></span>
        <p className="mt-5 text-green-900 text-lg">
          Connect with licensed mental health professionals who understand student life.
        </p>
      </div>

      {/* Counselor Section */}
      <div className="w-full max-w-3xl flex flex-col items-start mb-8 px-5">
        <h2 className="text-2xl font-semibold text-green-700 mb-2 flex items-center gap-2">
          <User size={26} /> Choose Your Counselor
        </h2>
        <p className="text-green-900 text-base mt-2">No psychologists available.</p>
      </div>

      {/* Booking Card */}
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-green-100 p-10 flex flex-col gap-6 hover:scale-[1.02] transition-transform duration-200">
        <h3 className="text-2xl font-semibold text-green-800 mb-3">Schedule Your Session</h3>

        {/* Date Picker */}
        <div>
          <label className="block text-green-600 font-medium mb-2">Preferred Date</label>
          <div className="flex items-center gap-3 relative">
            <input
              type="date"
              className="w-full px-6 py-3 rounded-xl border border-green-200 bg-green-50 text-green-900 focus:ring-2 focus:ring-green-400 transition"
            />
            {/* <Calendar size={22} className="absolute right-4 text-green-400 pointer-events-none" /> */}
          </div>
        </div>

        {/* Time Picker */}
        <div>
          <label className="block text-green-600 font-medium mb-2">Preferred Time</label>
          <div className="flex items-center gap-3 relative">
            <input
              type="time"
              className="w-full px-6 py-3 rounded-xl border border-green-200 bg-green-50 text-green-900 focus:ring-2 focus:ring-green-400 transition"
            />
            <Clock size={22} className="absolute right-4 text-green-400 pointer-events-none" />
          </div>
        </div>

        {/* Duration Dropdown */}
        <div>
          <label className="block text-green-600 font-medium mb-2">Duration (minutes)</label>
          <div className="flex items-center gap-3 relative">
            <select className="w-full px-6 py-3 rounded-xl border border-green-200 bg-green-50 text-green-800 focus:ring-2 focus:ring-green-400 transition">
              <option>30 mins</option>
              <option>45 mins</option>
              <option>60 mins</option>
            </select>
            {/* <ChevronDown size={22} className="absolute right-4 text-green-400 pointer-events-none" /> */}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-green-600 font-medium mb-2">Message (optional)</label>
          <div className="flex items-center gap-3 relative">
            <textarea
              className="w-full px-6 py-3 rounded-xl border border-green-200 bg-green-50 text-green-900 focus:ring-2 focus:ring-green-400 transition resize-none"
              placeholder="Share what's on your mind..."
              rows={2}
            />
            {/* <MessageSquare
              size={22}
              className="absolute right-3 top-[16px] text-green-400 pointer-events-none"
            /> */}
          </div>
        </div>

        {/* Book Button */}
        <button
          className="mt-2 w-full py-4 text-xl bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400 hover:from-green-600 hover:to-teal-500 text-white font-bold rounded-2xl shadow-lg flex items-center justify-center gap-3 active:scale-95 transition-all"
          disabled={loading}
          onClick={() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 1800);
          }}
        >
          {loading ? <Loader className="animate-spin" size={22} /> : <Calendar size={22} />}
          Book Session
        </button>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease;
        }
        .animate-pulse {
          animation: pulse 2s infinite alternate;
        }
        @keyframes pulse {
          0% {
            opacity: 0.8;
            scale: 1;
          }
          100% {
            opacity: 1;
            scale: 1.01;
          }
        }
      `}</style>
    </div>
  );
};

export default BookSessionPage;