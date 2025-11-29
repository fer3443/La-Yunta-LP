"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export function ContactCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contacto" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-primary rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/abstract-soft-paw-prints-pattern-subtle.jpg')] opacity-10" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-primary-foreground text-balance">
              ¿Listo para agendar
              <br />
              una cita?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 text-pretty">
              Contáctanos ahora y dale a tu mascota la atención que merece. Estamos aquí para ayudarte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="gap-2">
                <Link
                  href="https://wa.me/5551234567?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20para%20mi%20mascota"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="tel:+5551234567">
                  <Phone className="h-5 w-5" />
                  Llamar Ahora
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
