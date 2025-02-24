import React from 'react';
import { Search, Calendar, Video, Thermometer } from 'lucide-react';
import ConsultationSection from '../components/ConsultationSection';
import InClinicSection from '../components/InClinicSection';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
            alt="Medical background" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-5xl font-bold mb-6">Your Health, Our Priority</h1>
          <p className="text-xl mb-8 max-w-2xl">Find and book appointments with the best doctors near you. Get expert medical care when you need it most.</p>
          <div className="bg-white p-6 rounded-[30px] shadow-lg max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search doctors, specialties, clinics..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-[20px] border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <Thermometer className="absolute left-3 top-3 text-gray-400" size={20} />
                  <select 
                    className="w-full pl-10 pr-4 py-2.5 rounded-[20px] border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 appearance-none bg-white"
                  >
                    <option value="">Select your health concern</option>
                    <option value="fever">Fever & Temperature</option>
                    <option value="cough">Cough & Cold</option>
                    <option value="headache">Headache</option>
                    <option value="stomach">Stomach Pain</option>
                    <option value="skin">Skin Problems</option>
                    <option value="dental">Dental Issues</option>
                    <option value="eye">Eye Problems</option>
                    <option value="mental">Mental Health</option>
                    <option value="other">Other Issues</option>
                  </select>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <Video className="absolute left-3 top-3 text-gray-400" size={20} />
                  <select 
                    className="w-full pl-10 pr-4 py-2.5 rounded-[20px] border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 appearance-none bg-white"
                  >
                    <option value="">Select mode</option>
                    <option value="offline">In-Person Visit</option>
                    <option value="online">Video Consultation</option>
                  </select>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Select date"
                    className="w-full pl-10 pr-4 py-2.5 rounded-[20px] border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                  />
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-2.5 rounded-[20px] hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <ConsultationSection />
      <InClinicSection />

      {/* Health Articles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Read top articles from health experts
              </h2>
              <p className="text-gray-600 mb-6">
                Health articles that keep you informed about good health practices and achieve your goals.
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
                See all articles
              </button>
            </div>
            
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80" 
                    alt="Coronavirus article" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="text-blue-500 text-sm font-medium mb-2">CORONAVIRUS</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      12 Coronavirus Myths and Facts That You Should Be Aware Of
                    </h3>
                    <p className="text-gray-600 text-sm">Dr. Diana Borgio</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80" 
                    alt="Vitamins and supplements" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="text-blue-500 text-sm font-medium mb-2">VITAMINS AND SUPPLEMENTS</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Eating Right to Build Immunity Against Cold and Viral Infections
                    </h3>
                    <p className="text-gray-600 text-sm">Dr. Diana Borgio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home; 