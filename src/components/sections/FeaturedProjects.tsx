import ScrollReveal from '../ui/ScrollReveal'
import ProjectPreviewCard from '../ui/ProjectPreviewCard'

const projects = [
  {
    title: 'Success.ai',
    url: 'https://www.success.ai/',
    description:
      'AI-driven B2B SaaS platform for customer engagement, sales, and marketing automation — optimizing business operations and customer relationships at scale.',
    technologies: ['React', 'Node', 'MongoDB', 'AWS', 'OpenAI', 'SendGrid'],
    accentColor: '#2563eb',
    screenshot: '/FeaturedProjectsPictures/SuccessAI.png',
  },
  {
    title: 'SPiN',
    url: 'https://www.spinsports.ai/',
    description:
      'AI-powered sports profile network connecting youth and amateur sports ecosystems through integrated tools, community building, and lifelong athlete profiles.',
    technologies: ['React', 'Next.js', 'Node', 'Python', 'Django', 'AWS', 'OpenAI'],
    accentColor: '#65a30d',
    screenshot: '/FeaturedProjectsPictures/Spin.png',
  },
]

export default function FeaturedProjects() {
  return (
    <ScrollReveal>
      <section className="pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-40 md:pb-16 px-4 sm:px-6 md:px-12 lg:px-16" id="portfolio">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-mono text-cta-gold uppercase tracking-widest mb-4">
              Case Studies
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-tight font-bold">
              Selected Projects
            </h2>
            <p className="mt-4 text-sm sm:text-base text-text-muted max-w-xl mx-auto">
              Production SaaS products built end-to-end — from architecture to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch">
            {projects.map((project) => (
              <ProjectPreviewCard
                key={project.title}
                title={project.title}
                url={project.url}
                description={project.description}
                technologies={project.technologies}
                accentColor={project.accentColor}
                screenshot={project.screenshot}
              />
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
