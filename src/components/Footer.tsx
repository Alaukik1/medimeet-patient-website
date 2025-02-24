import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Serenity</h3>
            <p className="mb-4">Your trusted healthcare partner. Find the best doctors and medical services near you.</p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">For Patients</h4>
            <FooterLinks links={[
              'Search for Doctors',
              'Book Appointments',
              'Video Consultation',
              'Health Records',
              'Read Health Articles'
            ]} />
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">For Doctors</h4>
            <FooterLinks links={[
              'Join as a Doctor',
              'Serenity Profile',
              'Serenity Reach',
              'Serenity Pro'
            ]} />
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">Email: support@serenity.com</p>
            <p className="mb-2">Phone: 1800-123-4567</p>
            <p>Address: 123 Healthcare Street, Medical District, City - 12345</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Serenity. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }) {
  return (
    <a href="#" className="hover:text-white transition-colors">
      {icon}
    </a>
  );
}

function FooterLinks({ links }) {
  return (
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="hover:text-white transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Footer;