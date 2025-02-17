import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.jpg" 
                alt="Cyriac & Associates Logo" 
                className="h-8 w-auto"
              />
              <span className="font-montserrat font-bold text-xl">
                Cyriac & Associates
              </span>
            </div>
            <p className="font-lato text-gray-400">
              Professional Chartered Accountants serving with excellence since 2004 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#FF8F00] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#FF8F00] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#FF8F00] transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#FF8F00] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/assurance" className="text-gray-400 hover:text-[#FF8F00] transition-colors">
                  Assurance Services
                </Link>
              </li>
              <li>
                <Link to="/services/business-support" className="text-gray-400 hover:text-[#FF8F00] transition-colors">
                  Controllership & Business Support
                </Link>
              </li>
              <li>
                <Link to="/services/management-accounting" className="text-gray-400 hover:text-[#FF8F00] transition-colors">
                  Management Accounting
                </Link>
              </li>
              <li>
                <Link to="/services/taxation" className="text-gray-400 hover:text-[#FF8F00] transition-colors">
                  Taxation Services
                </Link>
              </li>
              <li>
                <Link to="/services/regulatory" className="text-gray-400 hover:text-[#FF8F00] transition-colors">
                  Regulatory & Business Setup
                </Link>
              </li>
              <li>
                <Link to="/services/it-audit" className="text-gray-400 hover:text-[#FF8F00] transition-colors">
                  Information Systems Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#FF8F00]" />
                <span className="text-gray-400">+91 994 744 5870</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#FF8F00]" />
                <span className="text-gray-400">info@cyriacassociates.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[#FF8F00]" />
                <span className="text-gray-400">Kerala & Bangalore</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Cyriac & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;