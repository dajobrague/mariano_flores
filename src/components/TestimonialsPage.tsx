'use client'

// Component to render stars without hydration issues
function StarRating({ rating }: { rating: number }) {
  const stars = []
  for (let i = 0; i < rating; i++) {
    stars.push(
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  }
  return <div className="flex justify-center space-x-1">{stars}</div>
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Juan D.",
      text: "Excelente atención. Todo puntual y ordenado, recomendado este centro mi vecina.",
      rating: 5
    },
    {
      name: "Juan D.",
      text: "Excelente atención. Todo puntual y ordenado, recomendado este centro mi vecina.",
      rating: 5
    },
    {
      name: "Juan D.",
      text: "Excelente atención. Todo puntual y ordenado, recomendado este centro mi vecina.",
      rating: 5
    }
  ]

  return (
    <>
      {/* Main Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{color: '#b7d778'}}>
              ¿Qué dicen de nosotros?
            </h1>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
                {/* User Icon */}
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                
                {/* Name */}
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{testimonial.name}</h3>
                
                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  &quot;{testimonial.text}&quot;
                </p>
                
                {/* Star Rating */}
                <StarRating rating={testimonial.rating} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 text-white" style={{backgroundColor: '#1b2839'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-lg font-medium">
                Sonríe como siempre habías soñado
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <button 
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => window.location.href = '/#contact'}
              >
                Agenda ahora
              </button>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}