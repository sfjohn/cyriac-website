import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, BarChart, FileText, Building, Database, Check } from 'lucide-react';

const services = {
  'assurance': {
    title: 'Assurance Services',
    description: "In today's world of increased stake holding and shareholder reporting, the audit function assumes an important cornerstone for organizations. Auditing is increasing becoming an important tool for businesses not just to comply with regulatory requirements but also to identify, control and manage risks.",
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1633414654537-af6fa0cb8d5c?q=80&w=2070&auto=format&fit=crop',
    details: [
      'Statutory audit',
      'Limited Scope reviews',
      'Internal audit',
      'Management audit',
      'Information systems audit',
      'Audit under the International Financial Reporting Standards (IFRS)',
      'Pre-audit compilations',
      'Tax audit',
      'Revenue audit',
      'Expenditure Audit'
    ],
    cta: 'Schedule an Audit Consultation'
  },
  'business-support': {
    title: 'Controllership & Business Support Services',
    description: 'Businesses today use reliable, relevant and timely accounting inputs as a basis for strategic decision-making. A good accounting and financial system greatly enhances the quality of the Corporate Governance in an organization. For newly set up businesses, outsourcing of the finance function unlocks management time to establish their business with greater speed.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1633414654328-1a8d06c89e9c?q=80&w=2070&auto=format&fit=crop',
    sections: [
      {
        title: 'Controllership & Business Support',
        details: [
          'Accounting, payment processing and bank reconciliation',
          'Management accounting and reporting',
          'Formulating accounting systems and procedures',
          'Drawing up accounting and finance-related manuals',
          "'Hand holding' services for businesses such as cash flow, budgeting, operations management and other related services",
          'Payroll advisory, processing and disbursement',
          'Monthly tax remittances and filings under various tax laws',
          'Remittance of taxes / contributions and filings under various labour laws',
          'Secretarial assistance for preparation of board meeting minutes, general meetings, statutory filings with the Registrar of Companies and other similar secretarial assistance',
          'Advisory services under the Companies Act, 1956 on various matters such as managerial remuneration, shareholding structures, shareholder\'s agreements, hive-offs, amalgamations, etc.'
        ]
      },
      {
        title: 'Management Accounting and Reporting',
        description: 'Reliable and timely management reporting, which comprises essential data for all levels of management, will help you to make the right decisions on time.',
        details: [
          'Design and implementation of Management Information Systems',
          'Business process re-engineering',
          'Profit centre wise and cost centre wise reporting which enables the management in understanding the performance of various operations of the entity',
          'Department wise profit and loss accounts',
          'Monthly reporting to the management on the variances, explaining the constraints and bottlenecks involved in the operations and suggesting various measures to overcome the same',
          'Helping the management in implementing the cost reduction measures and performance improvement activities',
          'Reporting on the effectiveness of the various measures implemented and suggesting on continuous improvement',
          'Customer segment reporting',
          'Reporting on the profit or loss and the % of profit or loss on revenue for each customer segment',
          'Identifying the various measures to reduce cost and maximise profits also measures for timely realisation of receivables',
          'Frame work for internal and external benchmarking',
          'Plan and perform an internal audit report based on assessed risks and or requirement of management to perform an in-depth review of one or more important aspects of the business or operations'
        ]
      }
    ],
    cta: 'Outsource Your Financial Operations'
  },
  'management-accounting': {
    title: 'Management Accounting & Reporting',
    description: 'Effective management reporting helps in decision-making.',
    icon: BarChart,
    image: 'https://images.unsplash.com/photo-1633414654458-43675a9d8df8?q=80&w=2070&auto=format&fit=crop',
    details: [
      'Design & Implementation of MIS',
      'Business Process Re-engineering',
      'Profit Center & Cost Center Analysis',
      'Department-Wise P&L Reports',
      'Monthly Reporting & Variance Explanations',
      'Cost Reduction & Performance Improvement Measures'
    ],
    cta: 'Get Custom Reports'
  },
  'taxation': {
    title: 'Taxation Services',
    description: 'Comprehensive tax services covering direct and indirect taxation.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1633414654403-48b1e7e2c5b6?q=80&w=2070&auto=format&fit=crop',
    sections: [
      {
        title: 'Corporate Income-Tax and Withholding Taxes',
        description: 'The complex and ever-changing tax laws require businesses to be pro-active with their tax planning and compliance systems. Businesses today realise that effective tax-planning strategies can minimize tax incidence and could be deal-clinchers in many business activities.',
        details: [
          'Tax minimization, advising on availability of various deductions and exemptions, structuring transactions',
          'Transaction-related advisory services in cases of takeovers, amalgamations, hive-offs',
          'Advance tax computations, preparation and filing of corporate tax returns',
          'Litigation services involving strategy, preparation and filing of appeals',
          'Representation before tax authorities for assessments and appeals',
          'Applicability of withholding tax provisions, compliance with issue of Form 16As, filing of annual returns'
        ]
      },
      {
        title: 'International Tax',
        description: 'Businesses that operate in multiple tax jurisdictions aim to minimize their overall tax liability and discharge statutory obligations in foreign jurisdictions. The cross-border movement of expatriates results in a need for understanding the remedies available under the Double Taxation Avoidance Agreements (DTAA) in order that the international relocation does not result in juridical double taxation.',
        details: [
          'Advisory services with reference to the DTAAs between India and various countries',
          'Issues connected with e-commerce taxation',
          'Assistance with withholding tax obligations of foreign companies in India',
          'Assistance to expatriates regarding tax implications under the DTAA on international relocation'
        ]
      },
      {
        title: 'Transfer Pricing',
        description: 'The transfer pricing provisions require businesses to maintain extensive documentation to support their inter-company pricing. This obligation, coupled with the quantum of taxes involved and the strategic nature of inter-company pricing makes it imperative for businesses to maintain robust and defendable transfer pricing documentation.',
        details: [
          'Transfer pricing related advisory services',
          'Transfer pricing studies and analysis',
          'Litigation support and representation before tax authorities',
          'Developing international financial products'
        ]
      },
      {
        title: 'Executive Taxation',
        description: 'The ever-changing nature of the deductions, rebates and exemptions available to individuals under the tax laws makes it important for executives to formulate a personal tax minimisation strategy by maximizing the availability of benefits under the tax laws and to formulate a tax-efficient investment model.',
        details: [
          'Advisory services for maximizing deductions / rebates / exemptions under the tax laws',
          'Personal investment strategy for optimum tax efficiency',
          'Salary structuring to maximise tax benefits',
          'Filing of tax returns',
          'Representation before tax authorities'
        ]
      },
      {
        title: 'Central Excise and Customs',
        description: 'Excise duty is levied on manufacture of goods while Customs duty is generally levied on import of goods. To businesses engaged in manufacturing and imports, these duties represent major costs and thus adequate planning and proper compliance is of crucial importance.',
        details: [
          'Obtaining initial registrations',
          'Filing of periodical returns and remittance of tax dues',
          'Minimisation of tax exposure, structuring business transactions',
          'Assist in compliance with procedures, availing of tax benefits, etc.',
          'Assistance during assessments',
          'Litigation services involving strategy, preparation and filing of appeals and representation before the authorities'
        ]
      },
      {
        title: 'Goods & Service Tax',
        description: 'In recent years, the share of contribution of Service tax to the national exchequer has increased manifold and the Government is continuously expanding the scope of this levy to include additional services each year. Service tax is increasingly representing a major tax cost for various service-oriented businesses.',
        details: [
          'Obtaining initial registration',
          'Advisory services on the applicability and impact of service tax on business operations including availability of credits',
          'Structuring of business transactions to maximise tax efficiency',
          'Filing of periodical returns and remittances of taxes',
          'Assistance during assessments',
          'Litigation services involving strategy, preparation and filing of appeals and representation before the authorities'
        ]
      }
    ],
    cta: 'Optimize Your Tax Planning'
  },
  'regulatory': {
    title: 'Regulatory & Business Setup',
    description: 'Comprehensive assistance in business registration and regulatory compliance.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1633414654607-b30108bb13c5?q=80&w=2070&auto=format&fit=crop',
    sections: [
      {
        title: 'Exchange Control Services',
        description: 'The exchange control legislation governs cross-border transactions and regulates import and export of foreign exchange. The exchange control laws have been liberalized progressively in the last decade. The Government now focuses on management of the foreign exchange rather than its regulation. India is convertible on current account on almost all fronts and the long term initiative is to become fully convertible on capital account.',
        details: [
          'Advisory services under the Foreign Exchange Management Act, 1999',
          'Compliance such as filing of statutory forms and obtaining approvals from the Reserve Bank of India (RBI), the Central bank in India'
        ]
      },
      {
        title: 'Company Registration',
        description: 'Businesses wanting to operate in India through a limited liability company would require to set up and register the company with the Registrar of Companies (RoC).',
        details: [
          'Advising on implications of operating through a limited liability company, the level of capitalization, etc.',
          'Assistance in obtaining name approval from the RoC',
          'Assistance in drawing up the Memorandum of Association and Articles of Association of the company',
          'Registration of the company with the RoC',
          'Assistance in statutory local registrations under other laws',
          'Assistance with registration with the STPI / EOU / SEZ unit and the consequent Customs Bonding'
        ]
      },
      {
        title: 'Business Valuation Services',
        description: 'We recognize that in any transaction, realizing the right price is the core business objective for the client, whether it is the buy-side or sell-side. Accordingly, it is essential that the transaction is optimally valued in its perspective.',
        details: [
          'Valuation of business',
          'Ascertaining the share-swap ratios in case of restructuring'
        ],
        additionalInfo: 'Our approach to valuation enables us to identify the specific and unique value-drivers of a business. Our valuation is based on objective in-depth analysis, which assists the parties to negotiate and conclude the transaction.'
      }
    ],
    cta: 'Register Your Business Today'
  },
  'it-audit': {
    title: 'Information Systems Audit & Consulting',
    description: 'Our Information systems audit & advisory is conceptualized with an intention to assist enterprises in managing their information system resources in a worry free manner. We help our customers to get an overall control and security over their information systems resources.',
    icon: Database,
    image: 'https://images.unsplash.com/photo-1633414654772-d226741a3daa?q=80&w=2070&auto=format&fit=crop',
    details: [
      'Informations Systems Auditing',
      'IT Management Consulting',
      'Information Security consulting',
      'ISMS Implementation Consulting',
      'Research & Training',
      'System design and Implementation'
    ],
    additionalInfo: 'The above services will be provided by our affiliate S3M Advisory formed by a group of qualified system auditors who gained world class expertise and experience by working for the world\'s largest consulting firms. (www.s3madvisory.com)',
    cta: 'Ensure Compliance & Security'
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link
            to="/services"
            className="inline-flex items-center text-[#2979FF] hover:underline"
          >
            Back to Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url("${service.image}")`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <ServiceIcon className="h-12 w-12 text-[#FF8F00]" />
              <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white">
                {service.title}
              </h1>
            </div>
            <p className="font-lato text-xl text-white/90">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {service.sections ? (
              // For regulatory services with multiple sections
              <div className="space-y-12">
                {service.sections.map((section, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-8">
                    <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <p className="font-lato text-gray-600 mb-6">
                      {section.description}
                    </p>
                    <ul className="space-y-4">
                      {section.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-[#2979FF] mt-1" />
                          <span className="font-lato text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    {section.additionalInfo && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="font-lato text-gray-600 italic">
                          {section.additionalInfo}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              // For other services
              <>
                <h2 className="font-montserrat text-2xl font-bold text-gray-900 mb-8">
                  Our Services Include
                </h2>
                <div className="bg-gray-50 rounded-lg p-8">
                  <ul className="space-y-4">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-[#2979FF] mt-1" />
                        <span className="font-lato text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {service.additionalInfo && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <p className="font-lato text-gray-600 italic">
                        {service.additionalInfo}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}

            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-[#2979FF] text-white px-8 py-4 rounded-md font-medium hover:bg-[#2979FF]/90 transition-colors"
              >
                {service.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2979FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-3xl font-bold text-white mb-6">
            Need Expert Guidance?
          </h2>
          <p className="font-lato text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our {service.title.toLowerCase()} and how we can help your business
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

export default ServiceDetail;