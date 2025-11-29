"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Stethoscope, Syringe, Scissors, Heart, Bone, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Stethoscope,
    title: "Consulta General",
    description: "Evaluación completa del estado de salud de tu mascota con diagnóstico y tratamiento personalizado.",
  },
  {
    icon: Syringe,
    title: "Vacunación",
    description: "Planes de vacunación actualizados para proteger a tu mascota de enfermedades prevenibles.",
  },
  {
    icon: Scissors,
    title: "Cirugía",
    description: "Procedimientos quirúrgicos con equipos modernos y atención post-operatoria integral.",
  },
  {
    icon: Heart,
    title: "Cardiología",
    description: "Diagnóstico y tratamiento especializado de enfermedades cardiovasculares.",
  },
  {
    icon: Bone,
    title: "Traumatología",
    description: "Atención de fracturas, luxaciones y problemas del sistema músculo-esquelético.",
  },
  {
    icon: ShieldCheck,
    title: "Medicina Preventiva",
    description: "Programas de prevención y chequeos regulares para mantener la salud óptima.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mt-3 mb-6 text-balance">
            Cuidado integral para
            <br />
            tu compañero
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Ofrecemos una amplia gama de servicios veterinarios para garantizar la salud y bienestar de tu mascota en
            todas las etapas de su vida.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card">
                <CardContent className="p-6 md:p-8">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-5">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-pretty">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
