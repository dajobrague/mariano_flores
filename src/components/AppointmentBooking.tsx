'use client'

import { useState } from 'react'

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    fullName: '',
    cellphone: '',
    dentist: '',
    serviceType: '',
    date: '',
    time: ''
  })

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic will be implemented later
    console.log('Appointment scheduled:', formData)
    alert('¡Gracias por agendar tu cita! Te contactaremos pronto para confirmar.')
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

            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Nombre Completo*"
                    required
                    defaultValue=""
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    id="cellphone"
                    name="cellphone"
                    placeholder="Teléfono*"
                    required
                    defaultValue=""
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <select
                    id="dentist"
                    name="dentist"
                    defaultValue=""
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-500"
                  >
                    <option value="">Seleccionar Dentista*</option>
                    <option value="dr-shereen">Dr. Shereen Awuapara Flores</option>
                    <option value="dr-esther">Dr. Esther Flores Mubarak</option>
                    <option value="dr-nadia">Dr. Nadia Awuapara Flores</option>
                    <option value="dr-ariana">Dr. Ariana Benavides</option>
                  </select>
                </div>
                
                <div>
                  <select
                    id="serviceType"
                    name="serviceType"
                    defaultValue=""
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-500"
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
                    min={today}
                    defaultValue=""
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <select
                    id="time"
                    name="time"
                    defaultValue=""
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-500"
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

              <button
                type="submit"
                className="w-full text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl hover:opacity-90"
                style={{backgroundColor: '#b7d778'}}
              >
                Agendar Cita
              </button>
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