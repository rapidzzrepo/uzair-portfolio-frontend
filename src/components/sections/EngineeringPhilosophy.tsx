import ScrollReveal from '../ui/ScrollReveal'

const pillars = [
  {
    icon: 'smart_toy',
    title: 'Automation First',
    description:
      'Turning manual processes into intelligent, autonomous systems — from opportunity discovery to proposal generation and follow-up emails.',
  },
  {
    icon: 'speed',
    title: 'Peak Performance',
    description:
      'Latency is the enemy. Every millisecond saved in the backend is a win for user retention and system reliability.',
  },
  {
    icon: 'architecture',
    title: 'Scalable Systems',
    description:
      'Building architectures that don\'t just work today, but grow effortlessly with your user base tomorrow.',
  },
  {
    icon: 'security',
    title: 'Security & Compliance',
    description:
      'Deep domain knowledge in building secure fintech and healthcare systems that protect sensitive data and meet regulatory standards.',
  },
]

export default function EngineeringPhilosophy() {
  return (
    <ScrollReveal>
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16" id="about">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left: Philosophy text */}
            <div className="md:col-span-5">
              <p className="text-xs sm:text-sm font-mono text-cta-gold uppercase tracking-widest mb-4">
                Engineering Philosophy
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight tracking-tight mb-4 sm:mb-6 font-bold">
                Automation over repetition.
              </h2>
              <p className="text-on-surface-var text-base sm:text-lg leading-relaxed mb-8 sm:mb-12">
                I work best at the intersection of engineering and automation — turning
                manual processes into intelligent, reliable systems. With 6+ years of
                production experience and 3+ years deep in AI automation, I design
                multi-agent systems and autonomous pipelines that replace manual work entirely.
              </p>
            </div>

            {/* Right: Feature cards */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-6 sm:p-8 bg-surface border border-outline-var/30 rounded-xl space-y-3 sm:space-y-4 hover:border-cta-gold/30 transition-colors"
                >
                  <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl">
                    {pillar.icon}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold">{pillar.title}</h3>
                  <p className="text-sm sm:text-base text-text-muted">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
