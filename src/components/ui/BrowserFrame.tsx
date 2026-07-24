import { type ReactNode, useMemo } from 'react'

type Platform = 'macos' | 'windows' | 'tablet' | 'mobile'

function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'macos'
  const ua = navigator.userAgent
  if (/iPad|Android(?!.*Mobile)/i.test(ua)) return 'tablet'
  if (/iPhone|iPod|Android.*Mobile/i.test(ua)) return 'mobile'
  if (/Win/.test(ua)) return 'windows'
  return 'macos'
}

function extractDomain(url: string): string {
  try {
    return new URL(url).hostname
  } catch {
    return url
  }
}

interface BrowserFrameProps {
  url: string
  children: ReactNode
  accentColor?: string
}

function MacOSFrame({ url, children, accentColor }: BrowserFrameProps) {
  const domain = extractDomain(url)
  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-black/5">
      <div
        className="flex items-center gap-3 px-4 h-10"
        style={{
          background: 'linear-gradient(180deg, #e8e8e8 0%, #d4d4d4 100%)',
        }}
      >
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-inner" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e] shadow-inner" />
          <span className="w-3 h-3 rounded-full bg-[#28c840] shadow-inner" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 bg-white/60 rounded-md px-3 py-1 text-[11px] text-gray-500 min-w-[200px] max-w-[320px] w-full">
            <svg className="w-3 h-3 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="truncate">{domain}</span>
          </div>
        </div>
        <div className="w-[52px]" />
      </div>
      <div
        className="relative overflow-hidden"
        style={{
          background: accentColor
            ? `linear-gradient(135deg, ${accentColor}08 0%, ${accentColor}03 100%)`
            : '#fafafa',
        }}
      >
        {children}
      </div>
    </div>
  )
}

function WindowsFrame({ url, children, accentColor }: BrowserFrameProps) {
  const domain = extractDomain(url)
  return (
    <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-200">
      <div className="flex items-center h-10 bg-white border-b border-gray-200">
        <div className="flex-1 flex items-center px-3 gap-2">
          <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-[12px] text-gray-600 truncate">{domain}</span>
        </div>
        <div className="flex items-center h-full">
          <button className="h-full px-3 hover:bg-gray-100 transition-colors flex items-center justify-center">
            <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          </button>
          <button className="h-full px-3 hover:bg-gray-100 transition-colors flex items-center justify-center">
            <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="3" y="3" width="18" height="18" rx="1" stroke="currentColor" fill="none" />
            </svg>
          </button>
          <button className="h-full px-3 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center group">
            <svg className="w-3 h-3 text-gray-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="relative overflow-hidden"
        style={{
          background: accentColor
            ? `linear-gradient(135deg, ${accentColor}08 0%, ${accentColor}03 100%)`
            : '#fafafa',
        }}
      >
        {children}
      </div>
    </div>
  )
}

function TabletFrame({ url, children }: BrowserFrameProps) {
  const domain = extractDomain(url)
  return (
    <div className="relative mx-auto max-w-[520px]">
      <div className="bg-gray-900 rounded-[2rem] p-3 shadow-2xl">
        <div className="relative bg-white rounded-[1.25rem] overflow-hidden">
          {/* Status bar + URL bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-100">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 rounded-md px-2 py-0.5 text-[9px] text-gray-400 max-w-[180px]">
              <svg className="w-2.5 h-2.5 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="truncate">{domain}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
              </svg>
              <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
              </svg>
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ height: '350px' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileFrame({ url, children }: BrowserFrameProps) {
  const domain = extractDomain(url)
  return (
    <div className="relative mx-auto max-w-[280px]">
      <div className="bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl">
        <div className="relative bg-white rounded-[2rem] overflow-hidden">
          {/* Status bar with notch */}
          <div className="relative flex items-center justify-center h-7 bg-gray-50">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-2xl" />
            <div className="text-[9px] text-gray-400 font-semibold ml-8">9:41</div>
            <div className="absolute right-4 top-1.5 flex items-center gap-0.5">
              <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
              </svg>
              <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
              </svg>
            </div>
          </div>
          {/* URL bar */}
          <div className="flex items-center justify-center px-3 py-1.5 bg-white border-b border-gray-100">
            <div className="flex items-center gap-1 bg-gray-100/80 rounded-full px-2.5 py-1 text-[8px] text-gray-400 w-full max-w-[200px]">
              <svg className="w-2 h-2 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="truncate">{domain}</span>
            </div>
          </div>
          {/* Content area */}
          <div className="relative overflow-hidden" style={{ height: '380px' }}>
            {children}
          </div>
          {/* Home indicator */}
          <div className="flex justify-center py-1.5 bg-white">
            <div className="w-24 h-1 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BrowserFrame({ url, children, accentColor }: BrowserFrameProps) {
  const platform = useMemo(() => detectPlatform(), [])

  return (
    <div className="w-full">
      {platform === 'macos' && (
        <MacOSFrame url={url} accentColor={accentColor}>
          {children}
        </MacOSFrame>
      )}
      {platform === 'windows' && (
        <WindowsFrame url={url} accentColor={accentColor}>
          {children}
        </WindowsFrame>
      )}
      {platform === 'tablet' && (
        <TabletFrame url={url}>
          {children}
        </TabletFrame>
      )}
      {platform === 'mobile' && (
        <MobileFrame url={url}>
          {children}
        </MobileFrame>
      )}
    </div>
  )
}
