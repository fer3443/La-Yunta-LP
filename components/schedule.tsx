"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Phone, MapPin, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const schedule = [
  { day: "Lunes - Viernes", hours: "8:00 AM - 8:00 PM" },
  { day: "Sábados", hours: "9:00 AM - 6:00 PM" },
  { day: "Domingos", hours: "10:00 AM - 2:00 PM" },
]

export function Schedule() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="horarios" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Horarios de Atención</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mt-3 mb-6 text-balance">
              Siempre disponibles
              <br />
              para tu mascota
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-pretty">
              Nuestro equipo está listo para atender a tu mascota en horarios amplios y flexibles. Para emergencias,
              contamos con servicio las 24 horas.
            </p>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-secondary rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-medium">{item.day}</span>
                  </div>
                  <span className="text-muted-foreground">{item.hours}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 p-4 bg-primary/10 rounded-xl flex items-start gap-3"
            >
              <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-primary">Emergencias 24/7</p>
                <p className="text-sm text-muted-foreground">
                  Servicio de urgencias disponible las 24 horas, los 7 días de la semana.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-muted-foreground">(555) 987-6543</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">
                      Frías Silva 620
                      <br />
                      Yerba Buena, Tucumán, CP 4107
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="aspect-video rounded-xl overflow-hidden">
              <Image
                src="/modern-veterinary-clinic-exterior-building-facade.jpg"
                alt="Exterior de la clínica La Yunta"
                width={550}
                height={550}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
