import { useState, useCallback } from 'react'

interface ProjectPreviewCardProps {
  title: string
  url: string
  description: string
  technologies: string[]
  accentColor?: string
  screenshot?: string
}

function extractDomain(url: string): string {
  try {
    return new URL(url).hostname
  } catch {
    return url
  }
}

export default function ProjectPreviewCard({
  title,
  url,
  description,
  technologies,
  accentColor = '#4a90d9',
  screenshot,
}: ProjectPreviewCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = useCallback(() => setIsHovered(false), [])
  const handleClick = useCallback(() => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [url])

  return (
    <div
      className="group relative cursor-pointer h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Card body */}
      <div
        className="relative rounded-2xl bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out overflow-hidden h-full"
        style={{
          border: isHovered ? `1px solid ${accentColor}30` : '1px solid #f3f4f6',
          boxShadow: isHovered
            ? `0 0 24px -4px ${accentColor}40, 0 4px 16px -4px rgba(0,0,0,0.04)`
            : '0 4px 16px -4px rgba(0,0,0,0.06)',
        }}
      >
        {/* Screenshot */}
        <div className="w-full relative bg-gray-50 border border-gray-200">
          {screenshot ? (
            <img
              src={screenshot}
              alt={`${title} preview`}
              className="w-full h-auto block"
            />
          ) : (
            <div
              className="w-full flex items-center justify-center"
              style={{
                height: '400px',
                background: `linear-gradient(135deg, ${accentColor}10 0%, ${accentColor}05 100%)`,
              }}
            >
              <span className="text-xs text-gray-400">Preview coming soon</span>
            </div>
          )}
        </div>

        {/* Project info */}
        <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-4 sm:pt-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                {title}
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">{extractDomain(url)}</p>
            </div>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: `${accentColor}10`,
                color: accentColor,
              }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full font-medium"
                style={{
                  background: `${accentColor}08`,
                  color: `${accentColor}cc`,
                  border: `1px solid ${accentColor}15`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
