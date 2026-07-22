import ScrollReveal from '../ui/ScrollReveal'

const projects = [
  {
    title: 'Helix Trading Engine',
    description:
      'A low-latency execution engine capable of handling 50k+ transactions per second. Built with Python, Cython, and Redis.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEAj9aJQj2Jnvgf3taJCRSGgR8XGAsQsfRXIFbH0l5qooUiTtejeoyZUWMUHvt4csflvuXveRz72tr-5PJh1loZ40pqUf1PkRgZW532cMOjAvr5tW1LLcPfxne2vzJ4ouf2g48CUX11c1UNx4GG44XzruSWg5jncmqLOgtqdyffPrIBWV7ShZ3cnYHkL8_12jGIH_0hirdyu9u9Jb-pQJBnwMSUAU2Ir5I8C-E6nSpw2Sz3Nxmngp5',
    alt: 'Helix Trading Engine Interface',
    tags: ['Fintech', 'Backend', 'Architecture'],
  },
  {
    title: 'Sentinel AI Core',
    description:
      'Enterprise-grade security core using machine learning for real-time threat detection and automated response protocols.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVRXqsZnn2HXQXKTmoDQpVJblVaJGuu7wDWWckENPOfrnzrTr2gthWjb_03EjR6ysa2CBf9vWk8teqvDGp7OB48awXHtH_pxAYPgxJdNQMnmr8ad3ikY8N94XdJn67YRl6XzDJs0wEUqtuVgi4o6btjQkrKB3eE9lXuL0QEIfqKtFIM80a0ZLz6npIw1kCG8uHVM_JSR13-6egIrV0QAnzriF07Nbe4LA5mYoQJ8_vmmJ7XW9pkFLY',
    alt: 'Sentinel AI Core Neural Network Visualization',
    tags: ['AI/ML', 'Security', 'Cloud Native'],
  },
]

export default function FeaturedProjects() {
  return (
    <ScrollReveal>
      <section className="py-16 sm:py-20 md:py-40 px-4 sm:px-6 md:px-12 lg:px-16" id="portfolio">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-mono text-cta-gold uppercase tracking-widest mb-4">
              Case Studies
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-tight font-bold">
              Selected Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="aspect-video bg-surface-container mb-4 sm:mb-6 overflow-hidden rounded-2xl shadow-lg border border-outline-var/30">
                  <img
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={project.image}
                  />
                </div>
                <div className="space-y-3 sm:space-y-4 px-1 sm:px-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-cta-gold transition-colors">
                      {project.title}
                    </h3>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      north_east
                    </span>
                  </div>
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="skill-tag text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
