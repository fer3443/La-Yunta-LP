import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Schedule } from "@/components/schedule"
import { Testimonials } from "@/components/testimonials"
import { ContactCta } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Gallery />
      <Schedule />
      <Testimonials />
      <ContactCta />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
