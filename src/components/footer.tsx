'use client'

import { Facebook, Instagram } from 'lucide-react'

export function FooterComponent() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Inmobiliaria Zamora</h3>
            <p className="mb-2">Tu hogar, nuestra pasión</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="mb-2">Dirección: Salta, 123</p>
            <p className="mb-2">Monteros - Tucumán, Argentina</p>
            <p className="mb-2">Teléfono: +54 9 3863 489756</p>
            <p>Email: info@inmobiliariazamora.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos en nuestras redes sociales</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Cefiro Technologies. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}