import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import KeyMetrics from './components/sections/KeyMetrics'
import EngineeringPhilosophy from './components/sections/EngineeringPhilosophy'
import TechnicalArsenal from './components/sections/TechnicalArsenal'
import CoreCompetencies from './components/sections/CoreCompetencies'
import FeaturedProjects from './components/sections/FeaturedProjects'
import CTASection from './components/sections/CTASection'
import Chatbot from './pages/Chatbot'

function Home() {
  return (
    <>
      <Hero />
      <KeyMetrics />
      <EngineeringPhilosophy />
      <TechnicalArsenal />
      <CoreCompetencies />
      <FeaturedProjects />
      <CTASection />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  )
}
