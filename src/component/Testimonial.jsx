import React from "react";
import Marquee from "react-fast-marquee";

const testimonialsRow1 = [
  {
    text: "Psycare gave me the support and resources I needed to manage my stress daily. The mindfulness exercises truly help me stay centered.",
    emoji: "🧘‍♂️",
    role: "College Student",
  },
  {
    text: "I feel less overwhelmed and more in control of my mental well-being since I began using Psycare regularly.",
    emoji: "🌱",
    role: "Working Professional",
  },
  {
    text: "The community feature is amazing! Knowing others who share my experiences makes me feel less alone.",
    emoji: "🤗",
    role: "Student Mentor",
  },
];

const testimonialsRow2 = [
  {
    text: "Booking sessions and tracking my progress has never been easier. Psycare helps me stay consistent with my care.",
    emoji: "📅",
    role: "Young Professional",
  },
  {
    text: "The resources section has a lot of useful articles and tips that help me understand my feelings better.",
    emoji: "📚",
    role: "College Student",
  },
  {
    text: "The AI chat feels like talking to a caring friend. It’s there whenever I need it, helping me through tough times.",
    emoji: "🤖",
    role: "Anonymous User",
  },
  {
    text: "Psycare’s reminders and daily support help me keep a positive mindset—even on tough days.",
    emoji: "😊",
    role: "Student",
  },
  {
    text: "An amazing tool for mental wellness! Anonymous and supportive community.",
    emoji: "🙌",
    role: "Community Member",
  },
];

const TestimonialCard = ({ text, emoji, role }) => (
  <div className="bg-white rounded-2xl px-6 py-6 shadow-lg min-w-[320px] max-w-xs mx-4 flex flex-col justify-between transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-100 duration-300">
    <div className="flex items-center mb-3">
      <span className="text-3xl mr-2">{emoji}</span>
      <span className="font-semibold text-gray-900">Anonymous</span>
    </div>
    <div className="text-gray-700 italic mb-3 leading-relaxed">"{text}"</div>
    <div className="text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full inline-block w-fit">
      {role}
    </div>
  </div>
);

const TestimonialsSection = () => (
  <section className="bg-[#F5FCF8] min-h-screen w-full flex flex-col items-center pt-20 px-8 md:px-20 relative overflow-hidden">
    {/* Subtle Background Pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(74,222,128,0.15),transparent_70%)]" />

    <div className="w-full flex flex-col items-center mx-auto relative z-10">
      {/* Badge */}
      <div className="mb-4 px-6 py-1 rounded-full border border-gray-200 bg-white text-gray-700/90 text-base font-medium shadow-sm">
        🌟 Success Stories
      </div>

      {/* Headline */}
      <div className="text-center text-[2rem] sm:text-4xl lg:text-5xl font-[600] text-gray-900 leading-tight mb-4">
        Real Voices, Real Impact
      </div>
      <p className="text-center text-lg text-gray-600 max-w-2xl mb-12">
        Here’s how students, professionals, and community members are building
        resilience with <span className="font-semibold text-green-700">Psycare</span>.
      </p>

      {/* Static Row */}
      <div className="flex flex-wrap justify-center gap-6 mb-12 w-full">
        {testimonialsRow1.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </div>

      {/* Marquee Row */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F5FCF8] pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F5FCF8] pointer-events-none z-10" />
        <Marquee speed={25} gradient={false} pauseOnHover>
          <div className="flex space-x-6">
            {testimonialsRow2.concat(testimonialsRow2).map((t, idx) => (
              <TestimonialCard key={idx} {...t} />
            ))}
          </div>
        </Marquee>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
        <button className="bg-green-700 text-white py-3 px-8 rounded-full font-semibold shadow hover:bg-green-800 transition text-lg">
          Join the Community
        </button>
        <button className="border border-green-700 text-green-700 py-3 px-8 rounded-full font-semibold hover:bg-green-50 transition text-lg">
          Share Your Story
        </button>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;