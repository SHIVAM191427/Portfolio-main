import React from "react";
import { MapPin, Mail, Phone, Download, Github, Linkedin } from "lucide-react";

// Import assets
import profileImg from "../assets/portfolio.jpg";
import resumePdf from "../assets/shivam-resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-xl bg-white flex items-center justify-center">
              <img
                src={profileImg}
                alt="Kumar Shivam Pati"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Kumar Shivam Pati
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Electrical & Electronics Engineering Student
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Motivated engineering student with hands-on experience in software
              development, data analytics, and machine learning. Passionate
              about driving business growth through innovative technology
              solutions.
            </p>
          </div>

          {/* Contact and Location */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-600" />
              <span>Chandigarh, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-blue-600" />
              <span>kumarshivampati@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-blue-600" />
              <span>+91 6203150018</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={resumePdf}
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kumar-shivam-pati-a9b003222"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
