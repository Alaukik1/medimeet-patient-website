import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InClinicSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const specialists = [
    // First set of specialists
    {
      title: "Dentist",
      description: "Teething troubles? Schedule a dental checkup",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Gynecologist/Obstetrician",
      description: "Explore for women's health, pregnancy and infertility treatments",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Dietitian/Nutrition",
      description: "Get guidance on eating right, weight management and sports nutrition",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Physiotherapist",
      description: "Pulled a muscle? Get it treated by a trained physiotherapist",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    // Second set of specialists
    {
      title: "General surgeon",
      description: "Need to get operated? Find the right surgeon",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Orthopedist",
      description: "For Bone and Joints issues, spinal injuries and more",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "General physician",
      description: "Find the right family doctor in your neighborhood",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Pediatrician",
      description: "Child Specialists and Doctors for Infant",
      image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    // Adding Gastroenterologist
    {
      title: "Gastroenterologist",
      description: "Explore for issues related to digestive system, liver and pancreas",
      image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(specialists.length / itemsPerPage);
  
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsAnimating(false), 500); // Match this with transition duration
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsAnimating(false), 500); // Match this with transition duration
  };

  const currentSpecialists = specialists.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Book an appointment for an in-clinic consultation
          </h2>
          <p className="text-gray-600">
            Find experienced doctors across all specialties
          </p>
        </div>

        <div className="relative px-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div 
                  key={pageIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {specialists
                    .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                    .map((specialist, index) => (
                      <div 
                        key={index} 
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
                      >
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={specialist.image} 
                            alt={specialist.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-1 justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                              {specialist.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                              {specialist.description}
                            </p>
                          </div>
                          <div className="border-t border-gray-100 mt-4 pt-4">
                            <button className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors inline-flex items-center">
                              Book Now 
                              <span className="ml-2">→</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Previous specialists"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Next specialists"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Page Indicators */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  currentPage === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InClinicSection; 