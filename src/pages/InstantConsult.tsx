import React from 'react';
import { Stethoscope, FileText, MessageSquare } from 'lucide-react';

const InstantConsult: React.FC = () => {
  const specialties = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4323/4323096.png",
      name: "Gynaecology",
      href: "#"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4323/4323031.png",
      name: "Sexology",
      href: "#"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3022/3022552.png",
      name: "General physician",
      href: "#"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3004/3004458.png",
      name: "Dermatology",
      href: "#"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4323/4323094.png",
      name: "Psychiatry",
      href: "#"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4323/4323037.png",
      name: "Stomach and digestion",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="px-6 py-8">
        <div className="bg-[#FFF5F5] relative overflow-hidden rounded-3xl max-w-[98%] mx-auto">
          <div className="px-8 py-16">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Left Content */}
              <div className="lg:w-1/2 lg:pr-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Skip the travel!
                  <br />
                  Take Online Doctor Consultation
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Private consultation + Audio call • Starts at just ₹199
                </p>
                
                {/* Doctor Avatars */}
                <div className="flex items-center mb-6">
                  <div className="flex -space-x-2">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Doctor" 
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Doctor" 
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <img 
                      src="https://randomuser.me/api/portraits/men/86.jpg" 
                      alt="Doctor" 
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  </div>
                  <div className="flex items-center ml-3">
                    <span className="text-green-500 font-medium">+180</span>
                    <span className="text-gray-600 ml-1">Doctors are online</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></div>
                  </div>
                </div>

                <button className="bg-[#14BEF0] text-white px-8 py-3 rounded-xl hover:bg-[#0FA4D1] transition-colors mb-8">
                  Consult Now
                </button>

                {/* Features */}
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Verified Doctors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Digital Prescription</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Free Followup</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <div className="rounded-3xl overflow-hidden max-w-[500px] mx-auto">
                  <img 
                    src="/images/doctor-consultation.jpeg"
                    alt="Online Doctor Consultation" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              25+ Specialities
            </h2>
            <p className="text-gray-600">
              Consult with top doctors across specialities
            </p>
          </div>
          <button className="text-[#14BEF0] hover:text-[#0FA4D1] font-semibold">
            See all Specialities
          </button>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {specialties.map((specialty, index) => (
            <a
              key={index}
              href={specialty.href}
              className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-24 h-24 mb-3 p-4 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <img 
                  src={specialty.icon} 
                  alt={specialty.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-gray-700 text-center group-hover:text-[#14BEF0] transition-colors mb-3">
                {specialty.name}
              </span>
              <button className="bg-[#14BEF0] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#0FA4D1] transition-colors">
                Consult Now
              </button>
            </a>
          ))}
        </div>
      </div>

      {/* Common Health Concerns Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Common Health Concerns
            </h2>
            <p className="text-gray-600">
              Consult a doctor online for any health issue
            </p>
          </div>
          <button className="text-[#14BEF0] hover:text-[#0FA4D1] font-semibold">
            See All Symptoms
          </button>
        </div>

        {/* Health Concerns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
              alt="Cough & Cold" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Cough & Cold?</h3>
              <a href="#" className="text-[#14BEF0] hover:text-[#0FA4D1] font-semibold flex items-center">
                Consult Now <span className="ml-1">›</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80"
              alt="Period problems" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Period problems?</h3>
              <a href="#" className="text-[#14BEF0] hover:text-[#0FA4D1] font-semibold flex items-center">
                Consult Now <span className="ml-1">›</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80"
              alt="Performance issues" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance issues in bed?</h3>
              <a href="#" className="text-[#14BEF0] hover:text-[#0FA4D1] font-semibold flex items-center">
                Consult Now <span className="ml-1">›</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?auto=format&fit=crop&q=80"
              alt="Skin problems" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Skin problems?</h3>
              <a href="#" className="text-[#14BEF0] hover:text-[#0FA4D1] font-semibold flex items-center">
                Consult Now <span className="ml-1">›</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* How it works Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-16">
          How it works
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#14BEF0]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-gray-800 font-medium">Select a speciality or symptom</span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#14BEF0]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <span className="text-gray-800 font-medium">Audio/ video call with a verified doctor</span>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#14BEF0]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-gray-800 font-medium">Get a digital prescription & a free follow-up</span>
          </div>

          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default InstantConsult; 