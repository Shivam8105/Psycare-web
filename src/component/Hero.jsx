export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] min-h-[100vh] sm:min-h-[650px] smooth-scroll-content">
      {/* Background with parallax effect */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=cover&w=1200&q=80"
        alt="Calm landscape representing wellness"
        className="absolute inset-0 w-full h-full object-cover opacity-70 parallax-slow"
        style={{ transform: 'translateZ(0)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#065f46]/90 via-[#047857]/70 to-[#10b981]/50"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 lg:py-16 xl:py-20 min-h-[100vh] sm:min-h-[650px] w-full max-w-7xl mx-auto gap-8 lg:gap-12">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-3xl xl:pr-12 text-center sm:text-left">
          {/* Wellness Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg fade-in-up stagger-1">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Your Mental Wellness Companion
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 fade-in-up stagger-2">
            AI-Powered
            <span className="block text-green-200">Mental Wellness</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 font-light italic mb-4 sm:mb-6 fade-in-up stagger-3">
            For <span className="text-green-300 font-semibold not-italic">Students & Young Minds</span>
          </p>

          <p className="text-sm sm:text-base md:text-lg text-white/80 font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl fade-in-up stagger-4">
            Navigate life's challenges with confidence through{" "}
            <span className="text-green-200">24/7 AI support</span>, professional guidance, and 
            tools designed to help you thrive. Your mental health journey starts with{" "}
            <span className="font-medium text-green-300">understanding, care, and hope</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10 w-full sm:w-auto">
            <button className="group bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300/50 relative overflow-hidden w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2 text-sm sm:text-base relative z-10">
                Start Your Wellness Journey
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>

            <button className="group flex items-center justify-center sm:justify-start gap-3 text-white hover:text-green-200 font-medium transition-colors duration-300 w-full sm:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base">Watch How It Works</span>
            </button>
          </div>

          {/* Wellness Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-white text-center sm:text-left w-full max-w-md sm:max-w-none">
            <div>
              <div className="text-xl sm:text-2xl font-bold">10,000+</div>
              <div className="text-xs text-white/70">Lives Touched</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold">85%</div>
              <div className="text-xs text-white/70">Feel Better</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs text-white/70">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Safe</div>
              <div className="text-xs text-white/70">& Anonymous</div>
            </div>
          </div>
        </div>

        {/* Right Section - Chatbot */}
        <div className="mt-12 lg:mt-0 w-full max-w-md animate-fadeInUp">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-4 border-b border-green-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-green-800 text-base">MindCare.AI</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-medium">Online</span>
                </div>
              </div>
              <p className="text-green-700 text-sm mt-2 font-medium">
                Talk to our AI mentor for instant guidance & coping strategies
              </p>
            </div>

            {/* Chat Content */}
            <div className="p-4 space-y-3 h-64 overflow-y-auto">
              {/* AI Welcome */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="bg-green-100 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                  <p className="text-green-800 text-sm">
                    Hi there! 👋 I'm here to support you. How are you feeling today?
                  </p>
                </div>
              </div>

              {/* User Message 1 */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-blue-500 rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                  <p className="text-white text-sm">
                    I've been feeling stressed about my exams lately...
                  </p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">You</span>
                </div>
              </div>

              {/* AI Response 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">💙</span>
                </div>
                <div className="bg-green-100 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                  <p className="text-green-800 text-sm">
                    Exam stress is completely normal. Let's work through this together. What's worrying you most? 🌟
                  </p>
                </div>
              </div>

              {/* User Message 2 */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-blue-500 rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                  <p className="text-white text-sm">
                    I can't seem to focus and keep procrastinating
                  </p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">You</span>
                </div>
              </div>

              {/* AI Response 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">🎯</span>
                </div>
                <div className="bg-green-100 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                  <p className="text-green-800 text-sm">
                    I understand that feeling. Try the Pomodoro technique: 25 minutes of focused study, then 5 minute break. Want me to guide you through it?
                  </p>
                </div>
              </div>

              {/* User Message 3 */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-blue-500 rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                  <p className="text-white text-sm">
                    Yes, that sounds helpful!
                  </p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">You</span>
                </div>
              </div>

              {/* Typing Indicator */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
                <div className="bg-green-100 rounded-2xl rounded-tl-md px-4 py-2">
                  <p className="text-green-600 text-xs italic">MindCare is typing...</p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-green-200 bg-green-50/50">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-white border border-green-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                />
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-green-600 text-center mt-2 font-medium">
                Your conversations are 100% private & secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
