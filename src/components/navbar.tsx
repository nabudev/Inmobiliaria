'use client'

import Link from 'next/link'

export function NavbarComponent() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            InmobiliariaXYZ
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="#viviendas" className="text-white hover:text-gray-300">
              Viviendas
            </Link>
            <Link href="#contacto" className="text-white hover:text-gray-300">
              Contacto
            </Link>
            <Link href="#ubicacion" className="text-white hover:text-gray-300">
              Ubicación
            </Link>
          </div>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}