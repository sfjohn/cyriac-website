import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Scale, Target } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1633414654544-75d0d6045a98?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="font-lato text-xl text-white/90">
              Excellence in financial consulting since establishment
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-6">
              Our Approach
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="font-lato">
                To provide services proactively with a client-focused philosophy while maintaining the highest standards of integrity.
              </p>
              <p className="font-lato">
                Our solutions are practical and tailor-made to the specific requirements of our clients, taking into account commercial and business factors.
              </p>
              <p className="font-lato">
                We implement best practices in service delivery, ensuring maximum efficiency and timely results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Firm Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Firm
            </h2>
            <div className="space-y-6 text-gray-600">
              <p className="font-lato">
                Cyriac & Associates, Chartered Accountants, is a Professional Accounting Firm with offices in Kerala and Bangalore.
              </p>
              <p className="font-lato">
                The firm was established by young and dynamic Chartered Accountants who gained world-class expertise from working with the Big 4 consulting and accounting firms and multinational corporates.
              </p>
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/partners"
                className="inline-flex items-center bg-[#2979FF] text-white px-8 py-4 rounded-md font-medium hover:bg-[#2979FF]/90 transition-colors"
              >
                Meet Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="font-lato text-gray-600 max-w-2xl mx-auto">
              These principles guide our work and relationships with clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'Commitment to delivering the highest quality service.',
                icon: Award,
              },
              {
                title: 'Integrity',
                description: 'Unwavering ethical standards in all our dealings.',
                icon: Scale,
              },
              {
                title: 'Client Focus',
                description: 'Dedicated to understanding and meeting client needs.',
                icon: Target,
              },
              {
                title: 'Teamwork',
                description: 'Collaborative approach to achieve the best results.',
                icon: Users,
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <value.icon className="h-12 w-12 text-[#2979FF] mx-auto mb-6" />
                <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="font-lato text-gray-600">
                  {value.description}
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
            Let's Work Together
          </h2>
          <p className="font-lato text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us to achieve your financial goals and business objectives
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

export default About;