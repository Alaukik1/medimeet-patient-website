import React from 'react';
import { Search, Calendar, Stethoscope, Pill as Pills, FileText, Phone, ChevronRight, Star, Thermometer, Video } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import ConsultationSection from './components/ConsultationSection';
import InClinicSection from './components/InClinicSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FindDoctors from './pages/FindDoctors';
import Home from './pages/Home';
import InstantConsult from './pages/InstantConsult';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-white">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<FindDoctors />} />
            <Route path="/instant-consult" element={<InstantConsult />} />
          </Routes>

          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

// Add interfaces for card props
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface DoctorCardProps {
  image: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  reviews: number;
}

function DoctorCard({ image, name, specialty, experience, rating, reviews }: DoctorCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-gray-600 text-sm mb-1">{specialty}</p>
      <p className="text-gray-500 text-sm mb-2">{experience}</p>
      <div className="flex items-center">
        <Star className="text-yellow-400 fill-current" size={16} />
        <span className="ml-1 text-sm font-medium">{rating}</span>
        <span className="mx-1 text-gray-400">•</span>
        <span className="text-sm text-gray-600">{reviews} reviews</span>
      </div>
      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
        Book Appointment
      </button>
    </div>
  );
}

export default App;