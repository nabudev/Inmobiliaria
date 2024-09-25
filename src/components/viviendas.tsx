'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'

interface Vivienda {
  id: number;
  titulo: string;
  imagen: string;
  precio: string;
  caracteristicas: Caracteristicas;
}

interface Caracteristicas {
  habitaciones: number;
  banos: number;
  metros: number;
  extras: string[];
}

const viviendas = [
  {
    id: 1,
    titulo: "Casa Moderna",
    imagen: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80",
    precio: "$250,000",
    caracteristicas: {
      habitaciones: 3,
      banos: 2,
      metros: 150,
      extras: ["Piscina", "Jardín", "Garaje"]
    }
  },
  {
    id: 2,
    titulo: "Departamento Céntrico",
    imagen: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    precio: "$150,000",
    caracteristicas: {
      habitaciones: 2,
      banos: 1,
      metros: 80,
      extras: ["Balcón", "Ascensor"]
    }
  },
  {
    id: 3,
    titulo: "Cabaña",
    imagen: "https://media.staticontent.com/media/pictures/b5b843a2-5325-49b2-a7df-01327e002282",
    precio: "$75,000",
    caracteristicas: {
      habitaciones: 3,
      banos: 1,
      metros: 55,
      extras: ["Descanso", "Patio amplio"]
    }
  },
  // Añade más viviendas aquí
]

export function ViviendasComponent() {
  const [selectedVivienda, setSelectedVivienda] = useState<Vivienda | null>(null);

  return (
    <section id="viviendas" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestras Viviendas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {viviendas.map((vivienda) => (
            <div key={vivienda.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={vivienda.imagen} alt={vivienda.titulo} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{vivienda.titulo}</h3>
                <p className="text-gray-600 mb-4">{vivienda.precio}</p>
                <button
                  onClick={() => setSelectedVivienda(vivienda)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedVivienda !== null} onClose={() => setSelectedVivienda(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
            {selectedVivienda && (
              <>
                <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 mb-2">{selectedVivienda.titulo}</Dialog.Title>
                <img src={selectedVivienda.imagen} alt={selectedVivienda.titulo} className="w-full h-48 object-cover mb-4 rounded" />
                <p className="text-gray-600 mb-4">{selectedVivienda.precio}</p>
                <div className="mb-4">
                  <p>Habitaciones: {selectedVivienda.caracteristicas.habitaciones}</p>
                  <p>Baños: {selectedVivienda.caracteristicas.banos}</p>
                  <p>Metros cuadrados: {selectedVivienda.caracteristicas.metros}</p>
                  <p>Extras: {selectedVivienda.caracteristicas.extras.join(", ")}</p>
                </div>
                <form className="space-y-4">
                  <input type="text" placeholder="Nombre" className="w-full px-3 py-2 border rounded" />
                  <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />
                  <input type="tel" placeholder="Teléfono" className="w-full px-3 py-2 border rounded" />
                  <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    Solicitar información
                  </button>
                </form>
                <button onClick={() => setSelectedVivienda(null)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  )
}