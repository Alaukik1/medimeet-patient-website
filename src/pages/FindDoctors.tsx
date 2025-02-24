import React from 'react';
import { Search, Stethoscope, BookOpen, FileText, TestTube, Building2 } from 'lucide-react';

const FindDoctors: React.FC = () => {
  const popularSearches = [
    { label: 'Dermatologist', href: '#' },
    { label: 'Pediatrician', href: '#' },
    { label: 'Gynecologist/Obstetrician', href: '#' },
    { label: 'Other', href: '#' },
  ];

  const serviceCards = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Consult with a doctor',
      href: '#',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Order Medicines',
      href: '#',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'View medical records',
      href: '#',
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: 'Book test',
      badge: 'New',
      href: '#',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Read articles',
      href: '#',
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'For healthcare providers',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FF8C69] via-[#FF7F50] to-[#FA8072] text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <h1 className="text-5xl font-bold text-center mb-6">
            Your home for health
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center text-orange-50">
              Find and Book
            </h2>
            
            {/* Search Section */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Search className="text-orange-100" size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Bangalore"
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl text-gray-800 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
                  />
                </div>
                <div className="flex-[2] relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Search className="text-orange-100" size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search doctors, clinics, hospitals, etc."
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl text-gray-800 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="mt-8 text-center">
              <span className="text-orange-50 text-sm">Popular searches:</span>
              <div className="flex flex-wrap justify-center gap-4 mt-3">
                {popularSearches.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-white bg-white/10 px-4 py-1.5 rounded-full hover:bg-white/20 transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Bar Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-orange-50 transition-colors text-center group"
              >
                <div className="mb-3 text-orange-500 group-hover:text-orange-600 transition-colors">
                  {card.icon}
                </div>
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                  {card.title}
                </span>
                {card.badge && (
                  <span className="inline-block bg-green-500 text-white text-xs px-2 py-0.5 rounded-full mt-1">
                    {card.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* After Hero Section - Instant Appointment Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Instant appointment with doctors.
              <span className="text-[#FF7F50]">Guaranteed.</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="text-[#FF7F50]">✓</div>
                <div className="text-gray-600">100,000 Verified doctors</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#FF7F50]">✓</div>
                <div className="text-gray-600">3M+ Patient recommendations</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#FF7F50]">✓</div>
                <div className="text-gray-600">25M Patients/year</div>
              </div>
            </div>

            <button className="bg-[#FF7F50] text-white px-8 py-3 rounded-md hover:bg-[#FF6B4A] transition-colors">
              Find me the right doctor
            </button>

            {/* Testimonial */}
            <div className="mt-12">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-green-500">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600">A</span>
                </div>
                <span className="text-gray-700">Amit Sharma</span>
              </div>
            </div>
          </div>

          {/* Right side image/video placeholder */}
          <div className="lg:w-1/2">
            <div className="aspect-[9/16] bg-gray-100 rounded-3xl overflow-hidden">
              {/* You can add an image or video here */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Video/Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skip the waiting room section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Mobile Image */}
          <div className="lg:w-1/2">
            <div className="max-w-sm mx-auto">
              <img 
                src="/doctor-chat.png" 
                alt="Doctor consultation on mobile" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Skip the waiting room.
              <br />
              Consult with a doctor
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="text-[#FF7F50]">✓</div>
                <div className="text-gray-600">Fees starting at ₹99</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#FF7F50]">✓</div>
                <div className="text-gray-600">Verified doctors respond in 5 minutes</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#FF7F50]">✓</div>
                <div className="text-gray-600">100% Private and confidential</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button className="bg-[#FF7F50] text-white px-8 py-3 rounded-md hover:bg-[#FF6B4A] transition-colors">
                Consult now
              </button>
              <div className="text-gray-600">
                <span className="text-gray-400">•</span> 83770 doctors online
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-12">
              <div className="flex gap-1 mb-2">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-green-500">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                Good initiative. The doctors are responsive and provide you a brief consultation
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600">A</span>
                </div>
                <span className="text-gray-700">Aaron Moitra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctors; 