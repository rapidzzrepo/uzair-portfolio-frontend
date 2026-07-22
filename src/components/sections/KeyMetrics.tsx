import ScrollReveal from '../ui/ScrollReveal'

const metrics = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '99%', label: 'Success Rate' },
]

export default function KeyMetrics() {
  return (
    <ScrollReveal>
      <section className="bg-primary text-on-primary py-10 sm:py-12 md:py-16 overflow-hidden border-y border-outline-var/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 md:divide-x divide-outline-var/20 text-center">
            {metrics.map((metric) => (
              <div key={metric.label} className="space-y-2">
                <p className="text-3xl sm:text-4xl lg:text-[56px] text-cta-gold font-semibold tracking-tight">
                  {metric.value}
                </p>
                <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest opacity-60">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
