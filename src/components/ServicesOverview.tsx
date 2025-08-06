import Link from 'next/link'

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
    icon: "🦷",
    features: ["Cleanings & Exams", "Fillings", "Root Canals", "Extractions"]
  },
  {
    title: "Cosmetic Dentistry", 
    description: "Transform your smile with advanced cosmetic procedures and whitening treatments.",
    icon: "✨",
    features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"]
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions using the latest implant technology.",
    icon: "🔧",
    features: ["Single Implants", "Multiple Implants", "Full Mouth Restoration", "Implant Crowns"]
  },
  {
    title: "Orthodontics",
    description: "Straighten your teeth with traditional braces or modern clear aligner systems.",
    icon: "📐",
    features: ["Traditional Braces", "Clear Aligners", "Invisalign", "Retainers"]
  }
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine cleanings to complex procedures, we offer a full range of dental services 
            using the latest technology and techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center group hover:-translate-y-1 transition-transform"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="text-sm text-gray-500 space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center gap-2">
                    <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}