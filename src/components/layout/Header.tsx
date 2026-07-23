import { useState } from 'react'

const navLinks = [
  { label: 'About Me', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-6 sm:px-6 md:px-12 bg-surface/80 backdrop-blur-md">
      <div className="flex items-center gap-6 md:gap-12">
        <a href="#" className="w-8 h-8 flex items-center justify-center overflow-hidden rounded-full shrink-0">
          <img src="/Pictures/Photo_1784721434246.png" alt="Uzair Rahim" className="w-full h-full object-cover" />
        </a>
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-brand-gray">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-black transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="hidden sm:flex text-sm font-medium items-center gap-1 group text-brand-gray hover:text-black transition-colors"
        >
          Book A Call
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M17 8l4 4m0 0l-4 4m4-4H3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </a>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-brand-dark transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-brand-dark transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-brand-dark transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface/95 backdrop-blur-md border-b border-outline-var/20 md:hidden">
          <ul className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-brand-gray hover:text-black transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="text-sm font-medium text-brand-gray hover:text-black transition-colors block sm:hidden"
                onClick={() => setMenuOpen(false)}
              >
                Book A Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
