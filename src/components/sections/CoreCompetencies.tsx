import ScrollReveal from '../ui/ScrollReveal'

const competencies = [
  {
    icon: 'smart_toy',
    title: 'AI & Automation',
    description:
      'Designing multi-agent systems, LLM-integrated workflows, and autonomous pipelines using n8n, Temporal, Claude, and OpenAI.',
    tags: ['n8n', 'Temporal', 'Claude', 'OpenAI'],
  },
  {
    icon: 'code',
    title: 'Full-Stack Engineering',
    description:
      'Shipping production applications across React, Next.js, Node.js, Python, and PostgreSQL — 15+ apps delivered for startups and enterprises.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: 'cloud_done',
    title: 'Cloud & DevOps',
    description:
      'Deploying scalable infrastructure on AWS and GCP with CI/CD pipelines that reduced release cycles by 30%.',
    tags: ['AWS', 'GCP', 'CI/CD', 'Firebase'],
  },
  {
    icon: 'groups',
    title: 'Team Leadership',
    description:
      'Led teams of 20+ engineers, mentored juniors, conducted code reviews, and introduced processes that improved delivery speed.',
    tags: ['20+ Engineers', 'Code Reviews', 'Mentoring'],
  },
]

export default function CoreCompetencies() {
  return (
    <ScrollReveal>
      <section className="py-16 sm:py-20 md:py-40 px-4 sm:px-6 md:px-12 lg:px-16 bg-primary" id="competencies">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] mb-4 sm:mb-6 text-white">
              Core Competencies
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold leading-tight mb-4 sm:mb-6 text-white">
              What I Bring
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              6+ years of production experience across AI automation, full-stack
              engineering, cloud infrastructure, and team leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {competencies.map((comp) => (
              <div
                key={comp.title}
                className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-cta-gold/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-cta-gold/10 transition-colors">
                  <span className="material-symbols-outlined text-white text-lg sm:text-xl">
                    {comp.icon}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                  {comp.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {comp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {comp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] px-2 sm:px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-white/10 text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
