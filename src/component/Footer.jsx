export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 backdrop-blur-sm py-16 border-t border-green-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="font-bold text-green-900 text-lg">PsyCare</h3>
                <p className="text-xs text-green-700">by NeuroNova</p>
              </div>
            </div>
            <p className="text-sm text-green-700">
              Empowering students worldwide with mental wellness support and resources.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-green-900 mb-4 relative inline-block">
              <span className="absolute -left-3 -top-1 w-1 h-6 bg-green-500 rounded-full"></span>
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-green-700">
              <li>
                <a href="#ai-chat" className="hover:text-green-900 transition-colors hover:underline">AI Chat Support</a>
              </li>
              <li>
                <a href="#book" className="hover:text-green-900 transition-colors hover:underline">Book a Counselor</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-green-900 transition-colors hover:underline">Wellness Resources</a>
              </li>
              <li>
                <a href="#community" className="hover:text-green-900 transition-colors hover:underline">Community Forum</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-green-900 mb-4 relative inline-block">
              <span className="absolute -left-3 -top-1 w-1 h-6 bg-green-500 rounded-full"></span>
              Support
            </h4>
            <ul className="space-y-3 text-sm text-green-700">
              <li><a href="#" className="hover:text-green-900 transition-colors hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:text-green-900 transition-colors hover:underline">Crisis Support</a></li>
              <li><a href="#" className="hover:text-green-900 transition-colors hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-900 transition-colors hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="font-semibold text-green-900 mb-4 relative inline-block">
              <span className="absolute -left-3 -top-1 w-1 h-6 bg-green-500 rounded-full"></span>
              Project Details
            </h4>
            <ul className="space-y-3 text-sm text-green-700">
              <li>Team: NeuroNova</li>
              <li>Project: SIH25092</li>
              <li>Category: Student Wellness</li>
              <li className="flex items-center space-x-2">
                <span>Status:</span>
                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium shadow-sm">Active</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-14 pt-6 border-t border-green-200/50 text-center">
          <p className="text-sm text-green-700">
            ©️ 2025 PsyCare by Team NeuroNova. Made with 💚 for student mental wellness.
          </p>
        </div>
      </div>
    </footer>
  );
}