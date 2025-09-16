import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      title: "Founder",
      company: "Scholarscribe",
      location: "Chandigarh, India",
      period: "Dec 2021 – Dec 2024",
      description: [
        "Founded and led a content writing and web development company, serving clients like Adani and Transcurators",
        "Delivered SEO-optimized content, web development, and custom software solutions",
        "Managed projects from start to finish, ensuring high-quality and scalable results",
        "Enhanced client online presence through SEO and UX/UI design improvements"
      ]
    }
  ];

  const internshipExperience = [
    {
      title: "Software Engineer Intern",
      company: "Indian Oil Corporation Limited",
      location: "Bhubaneswar, India",
      period: "Jun 2025 – Jul 2025",
      description: [
        "Developed web applications using HTML, CSS, JavaScript, PHP",
        "Optimized user experience and website performance",
        "Assisted with network configuration and troubleshooting",
        "Conducted performance benchmarking and data analysis",
        "Prepared technical documentation and project reports"
      ]
    },
    {
      title: "Frontend Web Developer",
      company: "Vaishnav Technologies",
      location: "Hyderabad, India",
      period: "Jul 2024 – Aug 2024",
      description: [
        "Designed responsive UIs with React.js, Tailwind CSS",
        "Integrated third-party APIs for real-time data updates",
        "Used GitHub for version control and collaborative development"
      ]
    },
    {
      title: "Engineering Intern",
      company: "Central CoalFields Limited",
      location: "Ranchi, India",
      period: "May 2024 – Jun 2024",
      description: [
        "Performed power flow analysis and optimization using Simulink, PSpice, MATLAB",
        "Created real-time dashboards in Power BI",
        "Identified and mitigated transmission bottlenecks for improved efficiency"
      ]
    }
  ];

  const ExperienceCard = ({ experience, isWork = false }: { experience: any, isWork?: boolean }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Building size={16} />
            <span className="font-semibold">{experience.company}</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-gray-600 text-sm mt-2 md:mt-0">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>
      <ul className="space-y-2">
        {experience.description.map((item: string, index: number) => (
          <li key={index} className="flex items-start gap-3 text-gray-700">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600">
            My professional journey and internship experiences
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Work Experience
          </h3>
          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} isWork={true} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Internship Experience
          </h3>
          <div className="space-y-6">
            {internshipExperience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;