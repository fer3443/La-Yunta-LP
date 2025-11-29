"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const images = [
  {
    src: "/veterinary-clinic-modern-interior--clean-and-welco.jpg",
    alt: "Recepción de la clínica",
  },
  {
    src: "/veterinarian-examining-cute-cat-on-examination-tab.jpg",
    alt: "Examen veterinario a gato",
  },
  {
    src: "/happy-dog-getting-vaccinated-by-friendly-veterinar.jpg",
    alt: "Vacunación de perro",
  },
  {
    src: "/modern-veterinary-surgery-room-with-equipment.jpg",
    alt: "Sala de cirugía",
  },
  {
    src: "/puppy-playing-in-veterinary-waiting-room.jpg",
    alt: "Cachorro en sala de espera",
  },
  {
    src: "/veterinary-team-group-photo-smiling.jpg",
    alt: "Equipo veterinario",
  },
]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="galeria" className="py-20 md:py-32 bg-card overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Nuestra Galería</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mt-3 mb-6 text-balance">
            Momentos especiales
            <br />
            en VetCare
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div ref={carouselRef} className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: -currentIndex * 320 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="min-w-[280px] md:min-w-[400px] aspect-3/2 relative rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} width={400} height={400} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full bg-transparent">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full bg-transparent">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
