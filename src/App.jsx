import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Navbar from './components/Navbar'
import Payment from './components/Payment'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      {/* <Testimonials /> */}
      {/* <Payment /> */}
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
