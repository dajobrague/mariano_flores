'use client'

import { useState, useEffect } from 'react'

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      // Detectar móviles por ancho de pantalla (768px breakpoint)
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setIsLoading(false)
    }

    // Verificar al cargar
    checkMobile()

    // Escuchar cambios de tamaño
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return { isMobile, isLoading }
}