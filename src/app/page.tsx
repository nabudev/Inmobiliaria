'use client'

import { NavbarComponent } from '@/components/navbar'
import { HeroComponent } from '@/components/hero'
import { ViviendasComponent } from '@/components/viviendas'
import { ContactoYMapaComponent } from '@/components/contacto-y-mapa'
import { FooterComponent } from '@/components/footer'

export default function Page() {
  return (
    <div>
      <NavbarComponent />
      <HeroComponent />
      <ViviendasComponent />
      <ContactoYMapaComponent />
      <FooterComponent />
    </div>
  )
}