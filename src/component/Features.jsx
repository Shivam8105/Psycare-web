import { Bot, UserCheck, BookOpen, Users, ActivitySquare, Heart, Sparkles } from "lucide-react";
import { useState } from "react";

const features = [
  {
    title: "AI-Powered Support",
    desc: "Get instant, personalized mental health guidance with our advanced AI companion available 24/7.",
    icon: Bot,
    color: "blue",
  },
  {
    title: "Expert Counselors",
    desc: "Connect with licensed therapists and counselors who specialize in student mental health.",
    icon: UserCheck,
    color: "purple",
  },
  {
    title: "Wellness Library",
    desc: "Access curated resources, self-help guides, and evidence-based techniques for better mental health.",
    icon: BookOpen,
    color: "orange",
  },
  {
    title: "Safe Community",
    desc: "Join supportive peer groups in a secure, anonymous environment designed for healing.",
    icon: Users,
    color: "pink",
  },
  {
    title: "Mental Health Assessment",
    desc: "Take scientifically-backed assessments to understand your mental wellness journey.",
    icon: ActivitySquare,
    color: "teal",
  },
];

const colorMap = {
  blue: {
    bg: "bg-blue-50 hover:bg-blue-100",
    icon: "bg-blue-500",
    border: "border-blue-200",
  },
  purple: {
    bg: "bg-purple-50 hover:bg-purple-100",
    icon: "bg-purple-500",
    border: "border-purple-200",
  },
  orange: {
    bg: "bg-orange-50 hover:bg-orange-100",
    icon: "bg-orange-500",
    border: "border-orange-200",
  },
  pink: {
    bg: "bg-pink-50 hover:bg-pink-100",
    icon: "bg-pink-500",
    border: "border-pink-200",
  },
  teal: {
    bg: "bg-teal-50 hover:bg-teal-100",
    icon: "bg-teal-500",
    border: "border-teal-200",
  },
};

const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm fade-in-up">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Our Key Features
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight fade-in-up stagger-1">
            Everything you need for better 
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              mental wellness
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed fade-in-up stagger-2 px-4 sm:px-0">
            Comprehensive support designed specifically for students, with tools and resources that actually help you thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.slice(0, 2).map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              isHovered={hoveredCard === index}
              onHover={() => setHoveredCard(index)}
              onLeave={() => setHoveredCard(null)}
              stagger={index + 1}
            />
          ))}
          
          {/* Safe Community in position 3 */}
          <FeatureCard
            key={3}
            feature={features[3]}
            isHovered={hoveredCard === 3}
            onHover={() => setHoveredCard(3)}
            onLeave={() => setHoveredCard(null)}
            stagger={3}
          />
          
          {/* Wellness Library in position 4 */}
          <FeatureCard
            key={2}
            feature={features[2]}
            isHovered={hoveredCard === 2}
            onHover={() => setHoveredCard(2)}
            onLeave={() => setHoveredCard(null)}
            stagger={4}
          />
          
          {/* Green CTA Card in center position 5 */}
          <CallToActionCard stagger={5} />
          
          {/* Mental Health Assessment in position 6 */}
          <FeatureCard
            key={4}
            feature={features[4]}
            isHovered={hoveredCard === 4}
            onHover={() => setHoveredCard(4)}
            onLeave={() => setHoveredCard(null)}
            stagger={6}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, isHovered, onHover, onLeave, stagger = 1 }) => {
  const colors = colorMap[feature.color];
  const Icon = feature.icon;

  return (
    <div
      className={`features-card group p-6 md:p-8 rounded-2xl border transition-all duration-300 cursor-pointer bg-white hover:bg-gradient-to-br ${colors.bg} ${colors.border} ${isHovered ? 'transform -translate-y-2 shadow-xl scale-105' : 'shadow-md hover:shadow-lg'} fade-in-up stagger-${stagger}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors.icon} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </div>
      
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors">
        {feature.title}
      </h3>
      
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
        {feature.desc}
      </p>
    </div>
  );
};

const CallToActionCard = ({ stagger = 5 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`features-card group p-6 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-2xl text-white transition-all duration-300 cursor-pointer relative overflow-hidden h-fit self-center fade-in-up stagger-${stagger} ${isHovered ? 'transform -translate-y-2 shadow-2xl scale-105' : 'shadow-xl'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-3 right-3 w-12 h-12 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-3 left-3 w-8 h-8 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="relative z-10 text-center">
        <div className="bg-white/20 backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
          Start Your 
          <span className="italic font-serif bg-white/20 px-1 sm:px-2 py-1 rounded-lg text-sm sm:text-base">
            Healing
          </span>
          <br className="sm:hidden" />
          Journey
        </h3>
        
        <p className="text-green-100 mb-4 sm:mb-5 leading-relaxed text-xs sm:text-sm">
          Book a free consultation with our mental health experts.
        </p>
        
        <button className="bg-white text-green-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold hover:bg-green-50 hover:scale-105 transition-all duration-300 w-full shadow-lg group-hover:shadow-xl text-xs sm:text-sm">
          Get Started Free →
        </button>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default FeaturesSection;