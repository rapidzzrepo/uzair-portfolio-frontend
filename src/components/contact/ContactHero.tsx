export default function ContactHero() {
  return (
    <section className="mb-12 lg:mb-20 fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-xs md:text-sm font-mono text-brand-dark font-bold uppercase tracking-[0.2em]">
              Currently accepting Q3 projects
            </span>
          </div>

          <h1
            className="font-bold text-brand-dark leading-[1.05] mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              letterSpacing: '-0.04em',
            }}
          >
            Architecting the <br />
            <span className="text-cta-gold">Digital Future</span>
          </h1>

          <p className="text-base md:text-lg text-brand-gray max-w-2xl leading-relaxed">
            High-performance full-stack solutions built with engineering
            precision and strategic depth. Let's discuss your next breakthrough.
          </p>
        </div>
      </div>
    </section>
  )
}
