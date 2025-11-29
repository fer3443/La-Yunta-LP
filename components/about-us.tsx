"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Clock, Heart } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Award, value: "15+", label: "Años de experiencia" },
  { icon: Users, value: "10,000+", label: "Mascotas atendidas" },
  { icon: Clock, value: "24/7", label: "Emergencias" },
  { icon: Heart, value: "100%", label: "Dedicación" },
]

export function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="nosotros" className="py-20 md:py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-4/5 max-w-md mx-auto lg:mx-0">
              <Image
                src="/veterinary-team-in-clinic--diverse-group-of-veteri.jpg"
                alt="Nuestro equipo veterinario"
                width={550}
                height={550}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
                <p className="font-serif text-3xl font-bold">15+</p>
                <p className="text-sm opacity-90">Años cuidando</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Quiénes Somos</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mt-3 mb-6 text-balance">
              Más que una clínica,
              <br />
              somos familia
            </h2>
            <p className="text-muted-foreground text-lg mb-6 text-pretty">
              Fundada en 2010, La Yunta nació de la pasión por los animales y el compromiso de ofrecer atención
              veterinaria de excelencia. Nuestro equipo de profesionales está dedicado a brindar el mejor cuidado
              posible a cada mascota que cruza nuestras puertas.
            </p>
            <p className="text-muted-foreground text-lg mb-8 text-pretty">
              Creemos que cada animal merece ser tratado con respeto, amor y la más alta calidad médica. Por eso,
              invertimos constantemente en tecnología de vanguardia y formación continua de nuestro equipo.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-serif text-xl font-semibold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
