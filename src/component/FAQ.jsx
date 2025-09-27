import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is Psycare and who is it for?",
    a: "Psycare is a mental wellness platform built specifically for students and young professionals. We provide AI-powered support, access to licensed therapists, and a safe community space to help you manage stress, anxiety, and personal growth challenges.",
  },
  {
    q: "Is my data safe and private on Psycare?",
    a: "Absolutely. Your privacy is our top priority. All conversations are encrypted end-to-end, and we never share your personal information with third parties. You have full control over what you share and with whom.",
  },
  {
    q: "Is Psycare free to use?",
    a: "Yes, many core features are completely free including our AI companion, wellness library, and community support. Premium features like one-on-one therapy sessions are available through affordable subscription plans.",
  },
  {
    q: "How can I access the community support?",
    a: "Once you create your account, you'll find the Community tab in your dashboard. Join topic-based groups, participate in discussions, or simply read others' experiences. All interactions are moderated to ensure a safe, supportive environment.",
  },
  {
    q: "What makes Psycare different from other mental health apps?",
    a: "We focus specifically on student and young professional challenges. Our AI is trained on academic stress, career anxiety, and life transitions. Plus, we combine technology with human expertise - you can always escalate to real therapists when needed.",
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0); // Start with first FAQ open

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions we receive from students.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                className={`w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors ${
                  openIdx === idx ? 'bg-green-50' : ''
                }`}
                onClick={() => toggleFAQ(idx)}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                    openIdx === idx ? 'rotate-180 text-green-600' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-6 pb-5 pt-2 border-t border-gray-100 bg-green-50">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-green-600 mr-2" />
              <span className="text-lg font-semibold text-gray-900">
                Still have questions?
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Our support team is here to help you get started.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;