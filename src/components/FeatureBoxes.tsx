import { FaMicroscope, FaHeart, FaUserMd, FaTrophy } from 'react-icons/fa'

export default function FeatureBoxes() {
  const features = [
    {
      icon: <FaMicroscope className="w-8 h-8" />,
      title: "Atención de calidad basada en la experiencia y en el conocimiento."
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Promovemos la salud dental de una manera ética."
    },
    {
      icon: <FaUserMd className="w-8 h-8" />,
      title: "Amor por nuestra profesión."
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: "Experiencia en odontología desde hace 4 generaciones."
    }
  ]

  return (
    <section className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-x divide-solid" style={{borderColor: '#345114'}}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center py-8 px-6"
            >
              {/* Icon */}
              <div className="mb-4 p-3 rounded-full bg-gray-50" style={{color: '#345114'}}>
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-sm font-medium leading-tight max-w-[200px]" style={{color: '#345114'}}>
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}