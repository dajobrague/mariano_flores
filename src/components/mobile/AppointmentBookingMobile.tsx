'use client'

import { useState, useEffect } from 'react'
import { createAppointment, AppointmentData, getDentistasDisponibles, DentistaData } from '../../services/airtable'

export default function AppointmentBookingMobile() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

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

      console.log('Datos del formulario antes del envío (móvil):', formData)
      console.log('Datos formateados para Airtable (móvil):', appointmentData)

      const result = await createAppointment(appointmentData)
      console.log('Cita creada exitosamente (móvil):', result)
      
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
      console.error('Error al agendar la cita (móvil):', error)
      setSubmitMessage('Hubo un error al agendar tu cita. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="appointment" className="py-16" style={{background: 'linear-gradient(to bottom, #b7d778, #a5d058)'}}>
      <div className="px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Agenda tu visita
          </h2>
          <p className="text-white/90 text-lg">
            Cuida tu salud bucal y visítanos
          </p>
        </div>



        {/* Formulario */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col min-h-[500px]">
            <div className="space-y-6 flex-1">
            {/* Nombre Completo */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                placeholder="Ingresa tu nombre completo"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="cellphone" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                id="cellphone"
                name="cellphone"
                value={formData.cellphone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                placeholder="Ingresa tu número de teléfono"
              />
            </div>

            {/* Seleccionar Dentista */}
            <div>
              <label htmlFor="dentist" className="block text-sm font-medium text-gray-700 mb-2">
                Seleccionar Dentista *
              </label>
              <select
                id="dentist"
                name="dentist"
                value={formData.dentist}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
              >
                <option value="">Selecciona un dentista</option>
                {dentistas.map((dentista) => (
                  <option key={dentista.id} value={dentista.id}>
                    {dentista.nombre}
                    {dentista.especialidad && ` - ${dentista.especialidad}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Tipo de Servicio */}
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Servicio *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
              >
                <option value="">Selecciona un servicio</option>
                <option value="cleaning">Limpieza Dental</option>
                <option value="checkup">Revisión General</option>
                <option value="filling">Empaste Dental</option>
                <option value="whitening">Blanqueamiento</option>
                <option value="implant">Implante Dental</option>
                <option value="orthodontics">Ortodoncia</option>
                <option value="emergency">Emergencia</option>
              </select>
            </div>

            {/* Fecha y Hora en Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Fecha */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha Preferida *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  {...(today && { min: today })}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                />
              </div>

              {/* Hora */}
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  Hora Preferida *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                >
                  <option value="">Selecciona una hora</option>
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
                className="w-full text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{backgroundColor: '#b7d778'}}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{isSubmitting ? 'Agendando...' : 'Agendar Cita'}</span>
                </div>
              </button>
            </div>
          </form>

          {/* Información adicional */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-3">
                O contáctanos directamente:
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                <a 
                  href="tel:+51913080814" 
                  className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>(+51) 913 080 814</span>
                </a>
                <span className="hidden sm:block text-gray-300">|</span>
                <span className="text-gray-500">Lun-Vie: 9am-8pm, Sáb: 9am-1pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}