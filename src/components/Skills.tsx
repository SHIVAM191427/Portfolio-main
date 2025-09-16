import React from 'react';
import { Code, Database, BarChart3, Cpu, Globe, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C", level: 80 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="text-emerald-600" size={24} />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "React.js", level: 85 },
        { name: "PHP", level: 75 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <BarChart3 className="text-purple-600" size={24} />,
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "SPSS", level: 75 },
        { name: "Microsoft Excel", level: 90 }
      ]
    },
    {
      title: "Database Management",
      icon: <Database className="text-orange-600" size={24} />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "DBMS", level: 80 }
      ]
    },
    {
      title: "Engineering Tools",
      icon: <Cpu className="text-red-600" size={24} />,
      skills: [
        { name: "MATLAB", level: 85 },
        { name: "Simulink", level: 80 },
        { name: "PSpice", level: 75 }
      ]
    },
    {
      title: "Software & Cloud",
      icon: <Users className="text-indigo-600" size={24} />,
      skills: [
        { name: "AWS", level: 70 },
        { name: "JIRA", level: 75 },
        { name: "Salesforce", level: 70 },
        { name: "Git/GitHub", level: 85 }
      ]
    }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Odia", level: "Intermediate" }
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600">
            Technical proficiencies and core competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div>
                {category.skills.map((skill, idx) => (
                  <SkillBar key={idx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Languages
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{lang.name}</h4>
                <span className="text-blue-600 font-medium">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">Ready to Contribute</h3>
            <p className="text-blue-100">
              Immediately available for full-time or internship positions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;