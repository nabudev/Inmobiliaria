'use client'

export function HeroComponent() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Encuentra tu hogar ideal</h1>
          <p className="text-xl md:text-2xl mb-8">Descubre las mejores propiedades en las mejores ubicaciones</p>
          <a 
            href="#viviendas" 
            className="bg-white text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Ver Viviendas
          </a>
        </div>
      </div>
    </div>
  )
}