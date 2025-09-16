import React from 'react';
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: "Problem Solver",
      description: "Skilled in analyzing complex problems and developing innovative technology solutions"
    },
    {
      icon: <Lightbulb className="text-emerald-600" size={24} />,
      title: "Innovation Focused",
      description: "Passionate about applying cutting-edge technology to drive business growth"
    },
    {
      icon: <Users className="text-orange-600" size={24} />,
      title: "Team Player",
      description: "Experienced in project management and collaborative development"
    },
    {
      icon: <TrendingUp className="text-purple-600" size={24} />,
      title: "Growth Minded",
      description: "Continuously learning and adapting to emerging technologies"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A motivated Electrical & Electronics Engineering student with hands-on experience 
            in software development, data analytics, and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Professional Memberships
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">IEEE</h4>
              <p className="text-gray-600 text-sm">Institute of Electrical and Electronics Engineers</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">ACM</h4>
              <p className="text-gray-600 text-sm">Association for Computing Machinery</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">GDG</h4>
              <p className="text-gray-600 text-sm">Google Developer Group - Active Participant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;