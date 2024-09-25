'use client'

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function FooterComponent() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">InmobiliariaXYZ</h3>
            <p className="mb-2">Tu hogar, nuestra pasión</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="mb-2">Calle Principal, 123</p>
            <p className="mb-2">28001 Madrid, España</p>
            <p className="mb-2">Teléfono: +34 91 123 45 67</p>
            <p>Email: info@inmobiliariaxyz.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} InmobiliariaXYZ. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}