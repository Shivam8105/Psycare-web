import React from "react";
import {
  Leaf,
  Bed,
  Wind,
  Brain,
  PhoneOutgoing,
  Gamepad,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const categories = [
  "All",
  "Popular",
  "Trending",
  "Essential",
  "Featured",
  "Emergency",
  "Fun",
];

const resources = [
  {
    title: "Stress Management",
    tag: "Popular",
    rating: 4.8,
    description:
      "Learn effective techniques to manage academic and personal stress",
    details: "12 exercises",
    icon: <Leaf className="text-green-600" size={22} />,
    route: "/stress-management"
  },
  {
    title: "Sleep Audio Library",
    tag: "Trending",
    rating: 4.9,
    description:
      "Guided meditations and calming sounds for better sleep",
    details: "25 audios",
    icon: <Bed className="text-teal-600" size={22} />,
    route: "/sleep-library"
  },
  {
    title: "Breathing Exercises",
    tag: "Essential",
    rating: 4.7,
    description: "Simple breathing techniques for anxiety and relaxation",
    details: "8 techniques",
    icon: <Wind className="text-cyan-600" size={22} />,
    route: "/breath"
  },
  {
    title: "Mindfulness Practice",
    tag: "Featured",
    rating: 4.8,
    description: "Daily mindfulness exercises to improve mental clarity",
    details: "15 practices",
    icon: <Brain className="text-green-700" size={22} />,
    route: "/mindfulness"
  },
  {
    title: "Crisis Support",
    tag: "Emergency",
    rating: 5.0,
    description: "Immediate help resources and emergency contact information",
    details: "24/7 support",
    icon: <PhoneOutgoing className="text-red-600" size={22} />,
    route: "/crisis-support"
  },
  {
    title: "Interactive Games",
    tag: "Fun",
    rating: 4.6,
    description: "Fun games designed to boost mood and reduce anxiety",
    details: "6 games",
    icon: <Gamepad className="text-pink-500" size={22} />,
    route: "/interactive-games"
  },
];

export default function Resources() {
  const navigate = useNavigate();

  return (
    <div
      id="resources"
      className="relative min-h-screen overflow-x-hidden bg-green-50 flex flex-col items-center py-16 px-10"
    >
      {/* Large colored circles as background decoration */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] rounded-full bg-green-300 opacity-40 blur-[100px] filter animate-floatSlow"></div>
      <div className="absolute top-28 right-24 w-[450px] h-[450px] rounded-full bg-emerald-300 opacity-30 blur-[150px] filter animate-float"></div>
      <div className="absolute bottom-32 left-24 w-[300px] h-[300px] rounded-full bg-teal-400 opacity-25 blur-[120px] filter animate-floatSlow"></div>
      <div className="absolute bottom-10 right-36 w-[380px] h-[380px] rounded-full bg-lime-200 opacity-35 blur-[130px] filter animate-float"></div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900 mb-2">Wellness Resources Hub</h2>
          <p className="text-base text-green-800 max-w-2xl mx-auto">
            Explore our comprehensive collection of mental health tools and resources
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="px-6 py-2 rounded-full bg-green-100 border border-green-200 text-green-800 hover:bg-green-200 transition text-sm shadow-md"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center gap-5 mb-5">
                <div>{res.icon}</div>
                <h5 className="text-lg font-semibold text-green-900">{res.title}</h5>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-md text-xs font-semibold">
                  {res.tag}
                </span>
                <span className="text-yellow-400 text-sm font-semibold">⭐ {res.rating}</span>
              </div>

              <p className="text-green-800 text-sm leading-relaxed mb-4">{res.description}</p>
              <small className="text-green-600 text-xs">{res.details}</small>

              <div className="mt-5 flex gap-4">
                <button
                  className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 text-sm font-semibold transition"
                  onClick={() => navigate(res.route)}
                >
                  Start
                </button>
                <button className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-semibold transition">
                  Preview
                </button>
              </div>
            </div>
          ))}

          {/* Slim Card for Testing */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white rounded-xl p-6 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 flex items-center justify-between">
            <div>
              <h5 className="text-lg font-semibold text-green-900">Test Your Condition</h5>
              <p className="text-green-800 text-sm mt-1">
                Take a quick self-assessment to understand your mental wellness better
              </p>
            </div>
            <Link
              to="/tests"
              className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 text-sm font-semibold transition"
            >
              Start
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-floatSlow { animation: floatSlow 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
}