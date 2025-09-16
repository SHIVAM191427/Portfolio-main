import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Kumar Shivam Pati</h3>
            <p className="text-gray-400 leading-relaxed">
              Electrical & Electronics Engineering student passionate about technology, 
              innovation, and creating solutions that make a difference.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200">
                <Github size={18} />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200">
                <Linkedin size={18} />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200">
                <Mail size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 Chandigarh, India</p>
              <p>📧 kumarshivampati@gmail.com</p>
              <p>📞 +91 6203150018</p>
              <p className="text-sm mt-4">
                Available for full-time and internship opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} fill="currentColor" />
              <span>by Kumar Shivam Pati</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-4">
            <p>&copy; 2025 Kumar Shivam Pati. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;