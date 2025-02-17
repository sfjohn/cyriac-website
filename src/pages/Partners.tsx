import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Briefcase, Building } from 'lucide-react';

const partners = [
  {
    name: 'Jim Cyriac',
    qualifications: 'BCom, FCA',
    image: '/jim.jpg',
    experience: [
      'Total X years of Consulting experience',
      '5+ years experience at Big4 Consultancy',
      '3 years as Manager at Middle East\'s biggest fund administration company',
      'Extensive experience in accounting, auditing, and consulting',
    ],
  },
  {
    name: 'Manoj T G',
    qualifications: 'BCom, FCA',
    image: '/manoj.jpg',
    experience: [
      'Total X years of Consulting experience',
      '5+ years experience at Big4 Consultancy',
      'Former finance professional at Apollo Tyres, GMR, Airtel, Tata Indicom',
      'Extensive Experience in various industries covering all facets of finance',
    ],
  },
];

const Partners = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1633414654345-78e3fd25b575?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="font-lato text-xl text-white/90">
              Meet the experts leading our firm
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="w-full h-auto max-w-md mx-auto p-4">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-auto object-contain rounded-lg"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
                <div className="p-8">
                  <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-2">
                    {partner.name}
                  </h2>
                  <p className="font-lato text-[#2979FF] font-medium mb-6">
                    {partner.qualifications}
                  </p>
                  <ul className="space-y-4">
                    {partner.experience.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Award className="h-6 w-6 text-[#2979FF] flex-shrink-0 mt-1" />
                        <span className="font-lato text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2979FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-3xl font-bold text-white mb-6">
            Work with Industry Experts
          </h2>
          <p className="font-lato text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experienced partners guide your business to success
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-[#2979FF] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Partners;