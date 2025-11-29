"use client"

import { motion } from "framer-motion"
// import { MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5551234567?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20para%20mi%20mascota"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />
    </motion.a>
  )
}
