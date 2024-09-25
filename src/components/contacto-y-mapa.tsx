'use client'

export function ContactoYMapaComponent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div id="contacto">
            <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block mb-2">Nombre</label>
                <input type="text" id="nombre" name="nombre" className="w-full px-3 py-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="telefono" className="block mb-2">Teléfono</label>
                <input type="tel" id="telefono" name="telefono" className="w-full px-3 py-2 border rounded" />
              </div>
              <div>
                <label htmlFor="mensaje" className="block mb-2">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows={4} className="w-full px-3 py-2 border rounded" required></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300">
                Enviar mensaje
              </button>
            </form>
          </div>
          <div id="ubicacion">
            <h2 className="text-3xl font-bold mb-8">Nuestra ubicación</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-3.70379!3d40.416775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzAwLjQiTiAzwrA0MicxMy42Ilc!5e0!3m2!1sen!2ses!4v1234567890123!5m2!1sen!2ses"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}