const principles = [
  {
    title: 'Strategic Depth',
    description:
      "Every line of code serves a business objective. We don't just build features; we architect robust ecosystems that scale with your ambitions.",
  },
  {
    title: 'Technical Integrity',
    description:
      'Adhering to the highest standards of full-stack engineering, ensuring security, performance, and maintainability at every architectural layer.',
  },
  {
    title: 'Collaborative Focus',
    description:
      'High-bandwidth communication. I integrate seamlessly with your core team to deliver results with absolute architectural precision.',
  },
]

export default function EngineeringPrinciples() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
      {principles.map((p) => (
        <div key={p.title} className="space-y-5 sm:space-y-6 group">
          <div className="w-16 h-1.5 bg-brand-dark group-hover:w-full transition-all duration-500 origin-left" />
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-dark tracking-tight">
            {p.title}
          </h4>
          <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
            {p.description}
          </p>
        </div>
      ))}
    </section>
  )
}
