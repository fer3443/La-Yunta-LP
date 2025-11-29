"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "María García",
    pet: "Dueña de Max (Golden Retriever)",
    avatar: "/latina-woman-smiling-portrait.png",
    rating: 5,
    text: "Increíble atención. El Dr. Rodríguez salvó la vida de mi Max cuando tuvo una emergencia. El equipo es muy profesional y se nota que aman lo que hacen.",
  },
  {
    name: "Carlos Mendoza",
    pet: "Dueño de Luna (Gata Persa)",
    avatar: "/latino-man-smiling-portrait.png",
    rating: 5,
    text: "Llevo a Luna a La Yunta desde hace 5 años. Siempre me han dado un trato excepcional y las instalaciones son impecables. 100% recomendado.",
  },
  {
    name: "Ana Rodríguez",
    pet: "Dueña de Bruno (Bulldog Francés)",
    avatar: "/young-woman-smiling-portrait.png",
    rating: 5,
    text: "Lo que más me gusta es que se toman el tiempo para explicarte todo. Bruno ya no tiene miedo de ir al veterinario gracias al cariño con que lo tratan.",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonios" className="py-20 md:py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonios</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mt-3 mb-6 text-balance">
            Lo que dicen nuestros
            <br />
            clientes felices
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            La satisfacción de nuestros clientes y sus mascotas es nuestra mayor recompensa. Aquí algunos de sus
            testimonios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full border-border/50 bg-background">
                <CardContent className="p-6 md:p-8">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-foreground mb-6 text-pretty">"{testimonial.text}"</p>

                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
