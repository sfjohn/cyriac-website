import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1633414654288-e01e1df635ee?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="font-lato text-xl text-white/90">
              Get in touch with our team of experts
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>
            <div className="space-y-8">
              {/* Office Locations */}
              <div>
                <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-4">
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {/* Trivandrum Office */}
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#2979FF] mt-1" />
                    <div>
                      <h4 className="font-montserrat font-bold text-gray-900">Trivandrum Office</h4>
                      <p className="font-lato text-gray-600">
                        195C Sree Chithra Nagar B Lane<br />
                        Kowdiar, Trivandrum 695003
                      </p>
                      <div className="mt-2 space-y-1">
                        <p className="font-lato text-gray-600">
                          <span className="font-semibold">Phone:</span> +91 9947445870
                        </p>
                        <p className="font-lato text-gray-600">
                          <span className="font-semibold">Email:</span> jim@cyriacassociates.com
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Kochi Office */}
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#2979FF] mt-1" />
                    <div>
                      <h4 className="font-montserrat font-bold text-gray-900">Kochi Office</h4>
                      <p className="font-lato text-gray-600">
                        Door No 50/875-A, Mukkottil Temple Road<br />
                        Poonithura, Petta Junction<br />
                        Maradu, Ernakulam, Kerala 682038
                      </p>
                      <div className="mt-2 space-y-1">
                        <p className="font-lato text-gray-600">
                          <span className="font-semibold">Phone:</span> +91 9400705728
                        </p>
                        <p className="font-lato text-gray-600">
                          <span className="font-semibold">Email:</span> manoj@cyriacassociates.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-[#2979FF]" />
                <div>
                  <h4 className="font-montserrat font-bold text-gray-900">Business Hours</h4>
                  <p className="font-lato text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3945.752041582681!2d76.9571703!3d8.5234377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbde9d34c953%3A0xeb3ad63ee4598065!2sCyriac%20%26%20Associates%20Chartered%20Accountants!5e0!3m2!1sen!2sin!4v1739799044118!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;