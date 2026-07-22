import ScrollReveal from '../ui/ScrollReveal'

export default function CTASection() {
  return (
    <ScrollReveal>
      <section className="py-16 sm:py-20 md:py-40 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-primary text-on-primary rounded-2xl sm:rounded-[32px] p-6 sm:p-10 md:p-16 lg:p-24 text-center space-y-6 sm:space-y-8 relative overflow-hidden shadow-2xl">
            {/* Decorative background SVG */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                width="100%"
              >
                <path
                  d="M0 0 L50 40 L100 0"
                  fill="none"
                  opacity="0.8"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <line
                  opacity="0.4"
                  stroke="white"
                  strokeWidth="0.5"
                  x1="0"
                  x2="100"
                  y1="0"
                  y2="0"
                />
                <path
                  d="M100 100 L50 60 L0 100"
                  fill="none"
                  opacity="0.8"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
            </div>

            <div className="z-10 relative">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] text-cta-gold font-bold mb-4 sm:mb-6">
                Ready to scale?
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[72px] mx-auto max-w-4xl font-bold leading-tight tracking-tight">
                Got a Vision? Let's Bring It to Life!
              </h2>
              <p className="text-sm sm:text-base md:text-lg opacity-80 max-w-2xl mx-auto mt-4 sm:mt-6">
                Whether it's a complex backend overhaul, a new AI core, or a
                high-performance web ecosystem, I'm ready to engineer your
                success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12">
                <button className="bg-white text-primary px-8 sm:px-12 py-4 sm:py-5 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-cta-gold hover:text-white transition-all w-full sm:w-auto shadow-xl active:scale-95">
                  Book a Consultation
                </button>
                <button className="border border-white/20 text-white px-8 sm:px-12 py-4 sm:py-5 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all w-full sm:w-auto active:scale-95">
                  Contact Directly
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
