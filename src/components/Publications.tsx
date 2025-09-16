import React from 'react';
import { BookOpen, Calendar, MapPin, Users } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'IEEE Seminar: "Emerging Trends in Electrical Engineering"',
      venue: "Panjab University",
      location: "Chandigarh, India",
      date: "Jan 2025",
      type: "Seminar",
      description: "Presented on cutting-edge developments in electrical engineering and their applications"
    },
    {
      title: "DevFest Chandigarh 2024: Web, Mobile, and Cloud Technologies",
      venue: "Panjab University",
      location: "Chandigarh, India", 
      date: "Dec 2024",
      type: "Conference",
      description: "Participated in Google's premier developer conference focusing on modern web technologies"
    },
    {
      title: "Machine Learning Workshop",
      venue: "UIET",
      location: "Chandigarh, India",
      date: "Mar 2024",
      type: "Workshop",
      description: "Hands-on workshop covering machine learning algorithms and practical implementations"
    },
    {
      title: "Power BI for Data Analytics",
      venue: "Microsoft Training",
      location: "Online",
      date: "Nov 2023",
      type: "Training",
      description: "Professional certification training in Microsoft Power BI for business intelligence"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      "Seminar": "bg-blue-100 text-blue-800",
      "Conference": "bg-emerald-100 text-emerald-800",
      "Workshop": "bg-purple-100 text-purple-800",
      "Training": "bg-orange-100 text-orange-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="publications" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Publications & Conferences
          </h2>
          <p className="text-lg text-gray-600">
            Professional development and knowledge sharing activities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <BookOpen className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {pub.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ml-2 ${getTypeColor(pub.type)}`}>
                      {pub.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} />
                      <span className="font-medium">{pub.venue}</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{pub.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{pub.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-blue-100 text-lg">
              Committed to staying current with emerging technologies and industry best practices through 
              active participation in conferences, workshops, and professional development activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;