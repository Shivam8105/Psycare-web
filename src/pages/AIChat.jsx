import { Send, XCircle, Smile } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const LANGUAGES = [
  { name: "English", flag: "🇮🇳" },
  { name: "हिन्दी", flag: "🇮🇳" },
  { name: "தமிழ்", flag: "🇮🇳" },
  { name: "తెలుగు", flag: "🇮🇳" },
  { name: "मराठी", flag: "🇮🇳" },
];

const ChatbotPage = () => {
  const [message, setMessage] = useState("");
//   const [isTyping, setIsTyping] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsTyping(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    alert(`Message sent: ${message}`);
    setMessage("");
    inputRef.current.focus();
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-6 py-6 bg-gradient-to-br from-green-100 via-green-50 to-green-100 font-poppins text-green-900 relative overflow-hidden">
      {/* Floating emoji reaction */}
      <button
        className="fixed bottom-16 right-16 bg-green-400 hover:bg-green-500 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none"
        aria-label="React with emoji"
        title="React with emoji"
      >
        <Smile size={28} />
      </button>

      {/* Heading */}
      <div className="mb-6 text-center max-w-4xl animate-fade-in">
        <h1 className="text-5xl font-bold mb-4">AI Chat Support</h1>
        <p className="text-lg text-green-700">
          Talk to our AI for instant guidance and coping strategies
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-6xl h-[660px] bg-white rounded-3xl shadow-2xl border border-green-200 flex flex-col items-center p-8 relative">
        <div className="max-w-5xl w-full flex flex-col h-full">
          {/* Header row */}
          <div className="flex items-center justify-between mb-6 flex-shrink-0">
            <div className="font-semibold text-purple-700 flex items-center gap-3 text-xl">
              <Send size={24} />
              CalmMind.ai
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-green-700 text-2xl" aria-label="language globe" role="img">🌐</span>
              <select
                className="border-2 border-green-300 text-green-800 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                aria-label="Language selector"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.name}>{lang.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-grow overflow-y-auto py-6 max-h-[520px] space-y-6 scroll-smooth">
            <div className="bg-gradient-to-r from-green-200 to-green-300 rounded-3xl px-7 py-5 text-green-900 font-semibold shadow-lg max-w-[72%] animate-slide-in">
              Hi 👋, I'm CalmMind AI. How are you feeling today?
            </div>
          </div>

          {/* Input Row */}
          <div className="flex items-center mt-8 flex-shrink-0 relative">
            <input
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your message..."
              className="flex-1 border border-green-300 rounded-2xl px-6 py-4 text-green-900 bg-green-50 placeholder-green-400 shadow-inner focus:outline-none focus:ring-4 focus:ring-purple-300 placeholder-opacity-75 transition"
              aria-label="Message input"
            />
            {message && (
              <button
                onClick={() => setMessage("")}
                className="absolute right-24 top-1/2 -translate-y-1/2 text-green-500 hover:text-green-800 transition"
                aria-label="Clear input"
                title="Clear input"
              >
                <XCircle size={24} />
              </button>
            )}
            <button
              disabled={!message.trim()}
              onClick={handleSend}
              className="ml-4 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-3xl px-7 py-4 flex items-center gap-3 text-white shadow-lg transition-transform transform active:scale-95 focus:outline-none"
              aria-label="Send message"
            >
              <Send size={22} />
              <span className="font-semibold">Send</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-4 text-xs text-green-600 text-center select-none">
            Your conversations are completely anonymous and secure
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 1.2s infinite ease-in-out;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-in {
          animation: slideIn 0.5s ease forwards;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ChatbotPage;