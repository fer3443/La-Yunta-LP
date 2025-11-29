"use client"

import { motion } from "framer-motion"
import { PawPrint, Facebook } from "lucide-react"
import { FaInstagram, FaFacebook } from "react-icons/fa";


import Link from "next/link"

const footerLinks = {
  servicios: [
    { label: "Consulta General", href: "#servicios" },
    { label: "Vacunación", href: "#servicios" },
    { label: "Cirugía", href: "#servicios" },
    { label: "Emergencias", href: "#servicios" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Horarios", href: "#horarios" },
    { label: "Galería", href: "#galeria" },
    { label: "Testimonios", href: "#testimonios" },
  ],
}

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-foreground text-background py-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <PawPrint className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-semibold">La Yunta</span>
            </Link>
            <p className="text-background/70 max-w-sm mb-6">
              Cuidamos de tu mascota como si fuera nuestra. Más de 15 años brindando atención veterinaria de excelencia.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5"/>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} La Yunta. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link href="#" className="hover:text-background transition-colors">
              Desarrollado por Fernando Arroyo
            </Link>
            {/* <Link href="#" className="hover:text-background transition-colors">
              Términos de Servicio
            </Link> */}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
