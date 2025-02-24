import React from 'react';

const ConsultationSection = () => {
  const consultations = [
    {
      icon: "🫄", // Using emoji as placeholder, we can replace with proper SVG/image
      title: "Period doubts or Pregnancy",
      link: "#"
    },
    {
      icon: "🧑", // Placeholder
      title: "Acne, pimple or skin issues",
      link: "#"
    },
    {
      icon: "⚤", // Placeholder
      title: "Performance issues in bed",
      link: "#"
    },
    {
      icon: "🤒", // Placeholder
      title: "Cold, cough or fever",
      link: "#"
    },
    {
      icon: "👶", // Placeholder
      title: "Child not feeling well",
      link: "#"
    },
    {
      icon: "😔", // Placeholder
      title: "Depression or anxiety",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Consult top doctors online for any health concern
            </h2>
            <p className="text-gray-600">
              Private online consultations with verified doctors in all specialists
            </p>
          </div>
          <button className="text-blue-500 hover:text-blue-600 font-medium border border-blue-500 hover:border-blue-600 px-6 py-2.5 rounded-2xl transition-colors">
            View All Specialities
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {consultations.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-blue-50 rounded-full w-24 h-24 flex items-center justify-center mb-4">
                <span className="text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-center text-gray-800 font-medium mb-2">
                {item.title}
              </h3>
              <a
                href={item.link}
                className="text-blue-500 hover:text-blue-600 text-sm font-medium"
              >
                CONSULT NOW
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection; 