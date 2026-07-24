import { Link } from 'react-router-dom'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import EngineeringPrinciples from '../components/contact/EngineeringPrinciples'

export default function Contact() {
  return (
    <main className="pt-28 sm:pt-32 pb-16 sm:pb-24 md:pb-32 max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 relative">
      {/* Home Button */}
      <Link
        to="/"
        className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-md border border-outline-variant/30 rounded-lg text-xs font-semibold text-brand-dark hover:bg-cta-gold hover:text-white hover:border-cta-gold transition-all duration-300 shadow-sm"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Home
      </Link>

      <ContactHero />

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-start mb-16 sm:mb-24 md:mb-32">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <div className="lg:col-span-5">
          <ContactInfo />
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center gap-6 sm:gap-8 my-16 sm:my-24 md:my-32">
        <div className="h-px flex-1 bg-outline-variant/30" />
        <span className="text-[9px] sm:text-[10px] text-outline-variant uppercase tracking-[0.5em] font-mono">
          Engineering Principles
        </span>
        <div className="h-px flex-1 bg-outline-variant/30" />
      </div>

      <EngineeringPrinciples />
    </main>
  )
}
