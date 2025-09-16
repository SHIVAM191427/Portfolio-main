import React from 'react';
import { Calendar, ExternalLink, Github, TrendingUp, Shield, BarChart3, Database, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cryptora",
      period: "Jun 2025 – Jul 2025",
      description: "Live cryptocurrency tracker with real-time price updates and interactive charts",
      technologies: ["JavaScript", "CoinGecko API", "Chart.js", "Tailwind CSS"],
      highlights: [
        "Developed live crypto tracker with CoinGecko API and Chart.js",
        "UI designed with Tailwind CSS, deployed via GitHub and Vercel",
        "Real-time price tracking and portfolio management features"
      ],
      icon: <TrendingUp className="text-emerald-600" size={24} />
    },
    {
      title: "Face Mask Detection System",
      period: "Apr 2025 – May 2025",
      description: "AI-powered face mask detection system optimized for edge computing",
      technologies: ["Python", "OpenCV", "Machine Learning", "Raspberry Pi"],
      highlights: [
        "Achieved 95% accuracy using Python and OpenCV",
        "Optimized for Raspberry Pi deployment",
        "Real-time video processing and detection"
      ],
      icon: <Shield className="text-blue-600" size={24} />
    },
    {
      title: "Stock Market Prediction",
      period: "Apr 2025",
      description: "Machine learning model for stock price prediction using ensemble methods",
      technologies: ["Python", "AdaBoost", "Decision Trees", "Technical Analysis"],
      highlights: [
        "Predicted stock prices using AdaBoost, Decision Trees, and technical indicators",
        "Implemented feature engineering for technical analysis",
        "Backtesting framework for model validation"
      ],
      icon: <BarChart3 className="text-purple-600" size={24} />
    },
    {
      title: "Adventure Works Sales Dashboard",
      period: "Apr 2025",
      description: "Interactive business intelligence dashboard for sales performance analysis",
      technologies: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      highlights: [
        "Built Power BI dashboard with DAX and Power Query for sales performance",
        "Created KPI visualizations and interactive filters",
        "Automated data refresh and reporting workflows"
      ],
      icon: <BarChart3 className="text-orange-600" size={24} />
    },
    {
      title: "Student Management System",
      period: "Mar 2025",
      description: "Comprehensive database system for educational institution management",
      technologies: ["MySQL", "Database Design", "DBMS", "SQL"],
      highlights: [
        "Designed MySQL database for student, course, and grading management",
        "Implemented normalized database schema",
        "Created stored procedures and triggers for data integrity"
      ],
      icon: <Database className="text-green-600" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600">
            A showcase of my technical projects and innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {project.icon}
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={14} />
                  <span>{project.period}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-gray-100">
                <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                  <Github size={16} />
                  Code
                </button>
                <button className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                  <ExternalLink size={16} />
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;