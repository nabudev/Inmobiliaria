'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className={`text-2xl font-bold ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>
            Inmobiliaria Zamora
          </Link>
          <div className="hidden md:flex space-x-4">
            {['Viviendas', 'Contacto', 'Ubicación'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`hover:text-gray-300 transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" aria-label="Menú">
                <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-4">
                {['Viviendas', 'Contacto', 'Ubicación'].map((item) => (
                  <Link 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}