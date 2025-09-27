import { Send, XCircle, Smile, Bot, User } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import apiService from "../services/api";

const LANGUAGES = [
  { name: "English", flag: "🇮🇳", code: "en" },
  { name: "हिन्दी", flag: "🇮🇳", code: "hi" },
  { name: "தமிழ்", flag: "🇮🇳", code: "ta" },
  { name: "తెలుగు", flag: "🇮🇳", code: "te" },
  { name: "मराठी", flag: "🇮🇳", code: "mr" },
];

const ChatbotPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi 👋, I'm CalmMind AI. How are you feeling today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;
    
    if (!isAuthenticated) {
      alert("Please login to use the chat feature");
      return;
    }

    const userMessage = message.trim();
    const newUserMessage = {
      id: Date.now(),
      text: userMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newUserMessage]);
    setMessage("");
    setIsLoading(true);
    setIsTyping(true);

    try {
      // Get user location (optional)
      let location = null;
      if (navigator.geolocation) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
          });
          location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
        } catch (err) {
          console.log("Location access denied or unavailable");
        }
      }

      const response = await apiService.sendChatMessage({
        message: userMessage,
        lang: selectedLanguage,
        location,
      });

      const botMessage = {
        id: Date.now() + 1,
        text: response.reply || response.message || "I'm here to help you!",
        sender: "bot",
        timestamp: new Date(),
        escalate: response.escalate,
        hotlines: response.hotlines,
        therapists: response.therapists,
      };

      setMessages(prev => [...prev, botMessage]);

      // Handle emergency escalation
      if (response.escalate) {
        const emergencyMessage = {
          id: Date.now() + 2,
          text: "🚨 Emergency resources are available. Please consider reaching out to professional help immediately.",
          sender: "system",
          timestamp: new Date(),
          isEmergency: true,
        };
        setMessages(prev => [...prev, emergencyMessage]);
      }

    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm having trouble connecting right now. Please try again in a moment.",
        sender: "bot",
        timestamp: new Date(),
        isError: true,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
      inputRef.current?.focus();
    }
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
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="border-2 border-green-300 text-green-800 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                aria-label="Language selector"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-grow overflow-y-auto py-6 max-h-[520px] space-y-4 scroll-smooth">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-slide-in`}
              >
                <div
                  className={`flex items-start gap-3 max-w-[80%] ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.sender === "user"
                        ? "bg-purple-500 text-white"
                        : msg.sender === "system"
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <User size={16} />
                    ) : (
                      <Bot size={16} />
                    )}
                  </div>

                  {/* Message bubble */}
                  <div
                    className={`px-6 py-4 rounded-2xl shadow-lg ${
                      msg.sender === "user"
                        ? "bg-purple-600 text-white"
                        : msg.isEmergency || msg.sender === "system"
                        ? "bg-red-100 text-red-900 border-2 border-red-300"
                        : msg.isError
                        ? "bg-yellow-100 text-yellow-900 border-2 border-yellow-300"
                        : "bg-gradient-to-r from-green-200 to-green-300 text-green-900"
                    }`}
                  >
                    <p className="font-medium whitespace-pre-wrap">{msg.text}</p>
                    
                    {/* Emergency hotlines */}
                    {msg.hotlines && (
                      <div className="mt-4 space-y-2">
                        <p className="font-bold text-red-800">Emergency Contacts:</p>
                        {msg.hotlines.map((hotline, idx) => (
                          <div key={idx} className="text-sm">
                            <strong>{hotline.name}:</strong>{" "}
                            {hotline.phone && (
                              <a
                                href={`tel:${hotline.phone}`}
                                className="text-blue-600 underline"
                              >
                                {hotline.phone}
                              </a>
                            )}
                            {hotline.website && (
                              <a
                                href={hotline.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline ml-2"
                              >
                                Website
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Timestamp */}
                    <p className="text-xs mt-2 opacity-70">
                      {msg.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start animate-slide-in">
                <div className="flex items-start gap-3 max-w-[80%]">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <Bot size={16} />
                  </div>
                  <div className="bg-gray-200 text-gray-600 px-6 py-4 rounded-2xl shadow-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
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
              disabled={!message.trim() || isLoading}
              onClick={handleSend}
              className="ml-4 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-3xl px-7 py-4 flex items-center gap-3 text-white shadow-lg transition-transform transform active:scale-95 focus:outline-none"
              aria-label="Send message"
            >
              <Send size={22} />
              <span className="font-semibold">
                {isLoading ? "Sending..." : "Send"}
              </span>
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