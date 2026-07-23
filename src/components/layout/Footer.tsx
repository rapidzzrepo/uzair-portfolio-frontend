const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-uzair-rahim-826b49b6/' },
  { label: 'GitHub', href: 'https://github.com/uzairahim' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-high border-t border-outline-var/30">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 md:py-16 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 sm:gap-12">
          <div>
            <a
              href="#"
              className="text-xl sm:text-2xl font-black tracking-tighter text-primary flex items-center gap-2 mb-3 sm:mb-4"
            >
              <img src="/Pictures/Photo_1784721434246.png" alt="Uzair Rahim" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover" />
              Uzair Rahim
            </a>
            <p className="text-text-muted max-w-xs text-sm sm:text-base">
              Sr. Software Engineer specializing in AI automation &amp;
              full-stack systems.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-cta-gold transition-colors text-[10px] sm:text-xs font-mono uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-outline-var/20 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-text-muted text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Uzair Rahim. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-primary font-mono font-bold text-xs sm:text-sm">uzair.raheem987@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
