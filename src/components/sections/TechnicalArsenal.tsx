import ScrollReveal from '../ui/ScrollReveal'

export default function TechnicalArsenal() {
  return (
    <ScrollReveal>
      <section className="py-16 sm:py-20 md:py-40 px-4 sm:px-6 md:px-12 lg:px-16 bg-surface" id="stack">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm font-mono text-cta-gold uppercase tracking-widest mb-4">
              Technical Arsenal
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-tight font-bold">
              Modern tech, masterfully applied.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Python - Featured card */}
            <div className="col-span-1 sm:col-span-2 row-span-2 bg-primary-container text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between group overflow-hidden relative shadow-lg">
              <div className="z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-2 font-bold">Python</h3>
                <p className="opacity-70 text-sm sm:text-base">
                  Core expertise including Django, FastAPI, &amp; AsyncIO.
                </p>
              </div>
              <div className="z-10 mt-8 sm:mt-12 flex gap-2 flex-wrap">
                {['Numpy', 'Pandas', 'PyTorch'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 text-white border-transparent px-3 py-1 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] opacity-[0.03] group-hover:rotate-12 transition-transform duration-700">
                code
              </span>
            </div>

            {/* Cloud Infrastructure */}
            <div className="col-span-1 sm:col-span-2 bg-white border border-outline-var p-5 sm:p-8 rounded-2xl flex items-center gap-4 sm:gap-6 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary p-3 sm:p-4 bg-surface rounded-xl shrink-0">
                cloud
              </span>
              <div>
                <h4 className="text-base sm:text-lg font-bold">Cloud Infrastructure</h4>
                <p className="text-text-muted text-xs sm:text-sm">AWS, GCP, Terraform</p>
              </div>
            </div>

            {/* Frontend Systems */}
            <div className="col-span-1 sm:col-span-2 bg-white border border-outline-var p-5 sm:p-8 rounded-2xl flex items-center gap-4 sm:gap-6 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary p-3 sm:p-4 bg-surface rounded-xl shrink-0">
                javascript
              </span>
              <div>
                <h4 className="text-base sm:text-lg font-bold">Frontend Systems</h4>
                <p className="text-text-muted text-xs sm:text-sm">
                  React, Next.js, TypeScript
                </p>
              </div>
            </div>

            {/* Architecture */}
            <div className="col-span-1 sm:col-span-2 bg-white border border-outline-var p-5 sm:p-8 rounded-2xl flex items-center gap-4 sm:gap-6 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary p-3 sm:p-4 bg-surface rounded-xl shrink-0">
                database
              </span>
              <div>
                <h4 className="text-base sm:text-lg font-bold">Architecture</h4>
                <p className="text-text-muted text-xs sm:text-sm">
                  PostgreSQL, Redis, GraphQL
                </p>
              </div>
            </div>

            {/* DevOps */}
            <div className="col-span-1 sm:col-span-2 bg-cta-gold text-white p-5 sm:p-8 rounded-2xl flex items-center gap-4 sm:gap-6 shadow-lg shadow-cta-gold/10">
              <span className="material-symbols-outlined text-3xl sm:text-4xl p-3 sm:p-4 bg-white/10 rounded-xl shrink-0">
                terminal
              </span>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  DevOps &amp; CI/CD
                </h4>
                <p className="text-white/80 text-xs sm:text-sm">Docker, K8s, Jenkins</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
