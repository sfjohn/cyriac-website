import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, BarChart } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/7580751/pexels-photo-7580751.jpeg?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6">
              We Serve You Better
            </h1>
            <p className="font-lato text-xl text-white/90 mb-8">
              Your trusted partner in financial excellence, providing comprehensive chartered accountancy services across India.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-[#FF8F00] text-white px-6 py-3 rounded-md font-medium hover:bg-[#FF8F00]/90 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="font-lato text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Assurance Services',
                description: 'Comprehensive audit and assurance services ensuring compliance and accuracy.',
                icon: Shield,
                link: '/services/assurance',
              },
              {
                title: 'Business Support',
                description: 'End-to-end business support services to streamline your operations.',
                icon: Users,
                link: '/services/business-support',
              },
              {
                title: 'Taxation Services',
                description: 'Expert tax planning and compliance services for businesses and individuals.',
                icon: BarChart,
                link: '/services/taxation',
              },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-gray-50 p-8 rounded-lg hover:bg-[#2979FF] transition-colors duration-300"
              >
                <service.icon className="h-12 w-12 text-[#2979FF] group-hover:text-white mb-6" />
                <h3 className="font-montserrat text-xl font-bold text-gray-900 group-hover:text-white mb-4">
                  {service.title}
                </h3>
                <p className="font-lato text-gray-600 group-hover:text-white/90 mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-[#2979FF] group-hover:text-white font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="font-lato text-gray-600 mb-6">
                We are committed to ensuring delivery of dependable, timely, high-quality work that brings measurable value to its clients.
              </p>
              <p className="font-lato text-gray-600">
                A professional firm providing cutting edge services in the field of Accounting & Finance, Management Reporting, Taxation Advisory Services, Financial Audits, Information Systems Audit & Management Consultancy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Highly qualified professionals with extensive industry experience.',
                icon: Users,
              },
              {
                title: 'Quality Service',
                description: 'Commitment to delivering exceptional service quality.',
                icon: Award,
              },
              {
                title: 'Proven Track Record',
                description: 'Successfully serving clients across various industries.',
                icon: BarChart,
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <feature.icon className="h-12 w-12 text-[#2979FF] mx-auto mb-6" />
                <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="font-lato text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2979FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-lato text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business thrive with our expert financial services
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-[#2979FF] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;