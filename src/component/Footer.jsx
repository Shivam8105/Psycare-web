import { Mail, Instagram, Youtube, Twitter, Facebook, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="relative pb-20 overflow-hidden bg-[#F5FCF8]">
    {/* Layered blurred green ellipses simulating rainbow rings */}
    <div className="absolute top-[-40vw] left-1/2 -translate-x-1/2 w-[140vw] h-[140vw] bg-gradient-radial from-green-200 to-transparent opacity-40 rounded-full filter blur-[185px] z-0"></div>
    <div className="absolute top-[-30vw] left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] bg-gradient-radial from-green-300 via-green-100 to-transparent opacity-50 rounded-full filter blur-[150px] z-1"></div>
    <div className="absolute top-[-20vw] left-1/2 -translate-x-1/2 w-[100vw] h-[100vw] bg-gradient-radial from-green-400 via-green-200 to-transparent opacity-70 rounded-full filter blur-[120px] z-10"></div>
    <div className="absolute top-[-12vw] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-gradient-radial from-green-500 via-green-300 to-transparent opacity-80 rounded-full filter blur-[90px] z-20"></div>

    {/* Main content container */}
    <div className="relative z-30 max-w-7xl mx-auto px-4 text-center flex flex-col items-center pt-16">
      <div className="mb-4">
        <Mail className="mx-auto rounded-full bg-white p-3 text-green-700 shadow h-14 w-14" />
      </div>
      <p className="font-semibold text-green-700 mb-3 text-sm uppercase tracking-widest">Contact Us</p>
      <h2 className="text-3xl md:text-5xl font-extrabold text-black max-w-3xl leading-tight">
        We also need to have <span className="text-green-700">contact form</span> on the <span className="text-green-700">website</span>
      </h2>
      <p className="mt-3 mb-8 max-w-xl text-gray-600">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      <button className="bg-green-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-shadow shadow-lg">
        Get Started &rarr;
      </button>

      {/* Social icons */}
      <div className="flex space-x-6 mt-14">
        {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
          <a 
            href="#" 
            className="bg-white rounded-full p-3 shadow-sm hover:shadow-lg hover:scale-110 transition-transform"
            key={i}
            aria-label="Social media link"
          >
            <Icon className="w-6 h-6 text-green-700" />
          </a>
        ))}
      </div>

      {/* Footer sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 w-full max-w-7xl text-green-900">
        {/* Navigation */}
        <div className="text-left">
          <h3 className="font-bold text-lg mb-3">Navigation</h3>
          <ul className="space-y-1 text-green-800">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">For Lenders</a></li>
            <li><a href="#" className="hover:underline">For Collection Agencies</a></li>
          </ul>
        </div>
        {/* Brand */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-green-900 p-3 rounded-lg shadow text-white font-bold text-xl">P</div>
            <h2 className="font-extrabold text-2xl">Psycare</h2>
          </div>
          <p className="max-w-xs text-center font-medium text-green-700">
            Psycare is your digital mental health companion, designed to provide support when you need it most.
          </p>
        </div>
        {/* Contact */}
        <div className="text-left">
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <div className="flex items-center mb-3 text-green-800">
            <Mail className="mr-2 w-5 h-5" /> support@psycare.com
          </div>
          <div className="flex items-center text-green-800">
            <MapPin className="mr-2 w-5 h-5" /> 123 Mental Health Ave, Wellness City, India
          </div>
        </div>
      </div>
      <p className="text-green-700 text-sm mt-14">
        &copy; {new Date().getFullYear()} Psycare. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;