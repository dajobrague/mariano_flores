'use client'

import { useState, useEffect } from 'react'
import { createAppointment, AppointmentData, getDentistasDisponibles, DentistaData } from '../services/airtable'

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    fullName: '',
    cellphone: '',
    dentist: '',
    serviceType: '',
    date: '',
    time: ''
  })

  const [dentistas, setDentistas] = useState<DentistaData[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  // Get today's date in YYYY-MM-DD format for min attribute - only on client
  const [today, setToday] = useState('')
  
  useEffect(() => {
    setToday(new Date().toISOString().split('T')[0])
    
    // Cargar dentistas disponibles
    const fetchDentistas = async () => {
      try {
        const dentistasData = await getDentistasDisponibles()
        setDentistas(dentistasData)
      } catch (error) {
        console.error('Error al cargar dentistas:', error)
        // Usar datos de fallback si falla
        setDentistas([
          { id: 'rec1', nombre: 'Dr. Shereen Awuapara Flores' },
          { id: 'rec2', nombre: 'Dr. Esther Flores Mubarak' },
          { id: 'rec3', nombre: 'Dr. Nadia Awuapara Flores' },
          { id: 'rec4', nombre: 'Dr. Ariana Benavides' }
        ])
      }
    }
    
    fetchDentistas()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Validar que todos los campos requeridos estén llenos
      if (!formData.fullName || !formData.cellphone || !formData.serviceType || !formData.date || !formData.time || !formData.dentist) {
        setSubmitMessage('Por favor, completa todos los campos requeridos.')
        setIsSubmitting(false)
        return
      }

      // Mapear los datos del formulario al formato de Airtable
      const appointmentData: AppointmentData = {
        'Nombre Completo': formData.fullName,
        'Teléfono': formData.cellphone,
        'Tipo de Servicio': formData.serviceType,
        'Fecha': formData.date,
        'Hora': formData.time,
        'Dentista': [formData.dentist] // Array con el record ID del dentista
      }

      console.log('Datos del formulario antes del envío:', formData)
      console.log('Datos formateados para Airtable:', appointmentData)

      const result = await createAppointment(appointmentData)
      console.log('Cita creada exitosamente:', result)
      
      setSubmitMessage('¡Gracias por agendar tu cita! Te contactaremos pronto para confirmar.')
      
      // Limpiar el formulario
      setFormData({
        fullName: '',
        cellphone: '',
        dentist: '',
        serviceType: '',
        date: '',
        time: ''
      })
      
    } catch (error) {
      console.error('Error al agendar la cita:', error)
      setSubmitMessage('Hubo un error al agendar tu cita. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="appointment" className="py-16" style={{background: `linear-gradient(to right, #b7d778, #a5d058)`}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 h-96 lg:h-[500px] flex flex-col">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Agenda tu visita
              </h2>
              <p className="text-gray-600">
                Cuida tu salud bucal y visítanos
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              <div className="space-y-6 flex-1">
                <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Nombre Completo*"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600 text-gray-800"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    id="cellphone"
                    name="cellphone"
                    placeholder="Teléfono*"
                    required
                    value={formData.cellphone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600 text-gray-800"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <select
                    id="dentist"
                    name="dentist"
                    value={formData.dentist}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                  >
                    <option value="">Seleccionar Dentista*</option>
                    {dentistas.map((dentista) => (
                      <option key={dentista.id} value={dentista.id}>
                        {dentista.nombre}
                        {dentista.especialidad && ` - ${dentista.especialidad}`}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                  >
                    <option value="">Tipo de Servicio*</option>
                    <option value="cleaning">Limpieza Dental</option>
                    <option value="checkup">Revisión General</option>
                    <option value="filling">Empaste Dental</option>
                    <option value="whitening">Blanqueamiento</option>
                    <option value="implant">Implante Dental</option>
                    <option value="orthodontics">Ortodoncia</option>
                    <option value="emergency">Emergencia</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    {...(today && { min: today })}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                  />
                </div>
                
                <div>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                  >
                    <option value="">Seleccionar Hora*</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
              </div>
              </div>

              {/* Espacio fijo para mensaje y botón */}
              <div className="mt-6 space-y-4">
                {/* Contenedor de altura fija para el mensaje */}
                <div className="min-h-[60px] flex items-center">
                  {submitMessage && (
                    <div className={`w-full p-4 rounded-lg ${submitMessage.includes('error') || submitMessage.includes('Hubo un error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                      {submitMessage}
                    </div>
                  )}
                </div>

                {/* Botón siempre en la misma posición */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{backgroundColor: '#b7d778'}}
                >
                  {isSubmitting ? 'Agendando...' : 'Agendar Cita'}
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="h-96 lg:h-[500px] rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/form_image.png"
                alt="Familia feliz visitando al dentista"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}