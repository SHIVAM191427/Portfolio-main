import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Electrical & Electronics Engineering",
      institution: "University Institute of Engineering & Technology, Panjab University",
      location: "Chandigarh, India",
      period: "2022-2026",
      grade: "CGPA: 8.05/10 (Current)",
      coursework: [
        "Machine Learning", "Data Structures", "Computer Networking", "Power Systems",
        "MATLAB", "Simulink", "MySQL", "DBMS", "OOPs", "Java", "Python", "Power Electronics", "Power Electronics and Drives", "Digital Electronics", "Analog Electronics", "Microprocessors and Microcontrollers", "IoT"
      ]
    },
    {
      degree: "12th Grade (CBSE)",
      field: "PCM with Computer Science",
      institution: "DAV Public School",
      location: "Jamshedpur, India",
      period: "2019-2021",
      grade: "91.6%",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    },
    {
      degree: "10th Grade (CISCE)",
      field: "Secondary Education",
      institution: "St. Xavier's English School & Junior College",
      location: "Chaibasa, India",
      period: "2019",
      grade: "97.4%",
      coursework: []
    }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600">
            Academic background and qualifications
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-8 border border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <GraduationCap className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      {edu.field && (
                        <p className="text-lg text-blue-600 font-semibold mb-2">{edu.field}</p>
                      )}
                      <div className="flex items-center gap-2 text-gray-700 mb-1">
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-600 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {edu.coursework.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span key={idx} className="bg-white text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-200">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:ml-6 mt-4 lg:mt-0">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="text-emerald-600" size={18} />
                      <span className="font-semibold text-gray-900">Grade</span>
                    </div>
                    <span className="text-2xl font-bold text-emerald-600">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;