import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, BarChart, FileText, Building, Database } from 'lucide-react';

const services = [
  {
    id: 'assurance',
    title: 'Assurance Services',
    description: 'Auditing is no longer just for regulatory compliance but also to identify, control, and manage risks.',
    icon: Shield,
    details: ['Statutory Audit', 'Internal Audit', 'Management Audit', 'Information Systems Audit'],
    cta: 'Schedule an Audit Consultation'
  },
  {
    id: 'business-support',
    title: 'Controllership & Business Support',
    description: 'Businesses today require reliable, relevant, and timely accounting inputs for strategic decision-making.',
    icon: Users,
    details: ['Accounting Services', 'Management Reporting', 'Payroll Advisory', 'Compliance Support'],
    cta: 'Outsource Your Financial Processes'
    
  },
  {
    id: 'management-accounting',
    title: 'Management Accounting & Reporting',
    description: 'Effective management reporting helps in decision-making.',
    icon: BarChart,
    details: ['MIS Implementation', 'Cost Center Analysis', 'Monthly Reporting', 'Performance Analysis'],
    cta: 'Get Custom Reports'
  },
  {
    id: 'taxation',
    title: 'Taxation Services',
    description: 'Comprehensive tax services covering domestic and international taxation.',
    icon: FileText,
    details: ['Corporate Tax', 'International Tax', 'Transfer Pricing', 'Tax Advisory'],
    cta: 'Optimize Your Tax Planning'
  },
  {
    id: 'regulatory',
    title: 'Regulatory & Business Setup',
    description: 'Comprehensive assistance in business registration and regulatory compliance.',
    icon: Building,
    details: ['Company Registration', 'RoC Compliance', 'FEMA Advisory', 'Business Setup'],
    cta: 'Register Your Business Today'
  },
  {
    id: 'it-audit',
    title: 'Information Systems Audit',
    description: 'Our Information Systems Audit & Advisory is designed to help enterprises manage their IT resources securely.',
    icon: Database,
    details: ['IT Audits', 'Security Consulting', 'System Design', 'Control Evaluation'],
    cta: 'Ensure Compliance & Security'
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1633414654784-7f1f16c22a05?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="font-lato text-xl text-white/90">
              Comprehensive financial solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="font-lato text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of financial services to help your business thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-gray-50 p-8 rounded-lg hover:bg-[#2979FF] transition-all duration-300"
              >
                <service.icon className="h-12 w-12 text-[#2979FF] group-hover:text-white mb-6" />
                <h3 className="font-montserrat text-xl font-bold text-gray-900 group-hover:text-white mb-4">
                  {service.title}
                </h3>
                <p className="font-lato text-gray-600 group-hover:text-white/90 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail) => (
                    <li key={detail} className="font-lato text-gray-600 group-hover:text-white/90">
                      • {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-[#2979FF] group-hover:text-white font-medium">
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2979FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-3xl font-bold text-white mb-6">
            Need Expert Financial Guidance?
          </h2>
          <p className="font-lato text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help your business achieve its financial goals
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

export default Services;