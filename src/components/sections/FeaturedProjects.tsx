import ScrollReveal from '../ui/ScrollReveal'

const SuccessAiSvg = () => (
  <svg width="100%" height="100%" viewBox="0 0 900 280" preserveAspectRatio="xMidYMid meet" display="block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sa-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f0f9ff" />
        <stop offset="100%" stopColor="#e0f2fe" />
      </linearGradient>
      <clipPath id="sa-clip">
        <rect width="900" height="280" rx="16" />
      </clipPath>
    </defs>

    <g clipPath="url(#sa-clip)">
      <rect width="900" height="280" fill="url(#sa-bg)" />

      <text x="450" y="40" textAnchor="middle" fill="#0c4a6e" fontSize="14" fontWeight="700" fontFamily="Inter,system-ui,sans-serif" letterSpacing="2">SUCCESS.AI · B2B SAAS OPTIMIZATION PIPELINE</text>
      <text x="450" y="60" textAnchor="middle" fill="#0369a1" fontSize="10.5" fontFamily="Inter,system-ui,sans-serif">AI-driven customer engagement and sales automation, featuring 40% performance improvement.</text>

      <text x="80" y="88" fill="#0c4a6e" fontSize="8.5" fontWeight="700" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.2">INPUT · USER INTERACTION</text>
      <text x="820" y="88" textAnchor="end" fill="#0c4a6e" fontSize="8.5" fontWeight="700" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.2">OUTPUT · BUSINESS GROWTH &amp; ENGAGEMENT</text>

      <line x1="20" y1="148" x2="58" y2="148" stroke="#0284c7" strokeWidth="1" opacity="0.3" />
      <polygon points="58,145 66,148 58,151" fill="#0284c7" opacity="0.3" />

      {/* CARD 1 */}
      <rect x="66" y="110" width="170" height="76" rx="10" fill="white" stroke="#bae6fd" strokeWidth="1" />
      <circle cx="88" cy="130" r="10" fill="#0284c7" />
      <text x="88" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,system-ui,sans-serif">1</text>
      <text x="108" y="134" fill="#0c4a6e" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Customer Engagement</text>
      <text x="108" y="147" fill="#0c4a6e" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Tools</text>
      <text x="88" y="167" fill="#0369a1" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">AI-powered sales and marketing</text>
      <text x="88" y="180" fill="#0369a1" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">automation suite</text>

      {/* ARROW 1→2 */}
      <line x1="242" y1="148" x2="270" y2="148" stroke="#7dd3fc" strokeWidth="1.2" />
      <polygon points="270,144 278,148 270,152" fill="#7dd3fc" />

      {/* CARD 2 */}
      <rect x="284" y="110" width="170" height="76" rx="10" fill="white" stroke="#bae6fd" strokeWidth="1" />
      <circle cx="306" cy="130" r="10" fill="#0284c7" />
      <text x="306" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,system-ui,sans-serif">2</text>
      <text x="326" y="134" fill="#0c4a6e" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">AI Opportunity</text>
      <text x="326" y="147" fill="#0c4a6e" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Discovery</text>
      <text x="306" y="167" fill="#0369a1" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">Intelligent prospect</text>
      <text x="306" y="180" fill="#0369a1" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">identification &amp; pipeline</text>

      {/* ARROW 2→3 */}
      <line x1="460" y1="148" x2="488" y2="148" stroke="#7dd3fc" strokeWidth="1.2" />
      <polygon points="488,144 496,148 488,152" fill="#7dd3fc" />

      {/* CARD 3 */}
      <rect x="502" y="110" width="170" height="76" rx="10" fill="white" stroke="#bae6fd" strokeWidth="1" />
      <circle cx="524" cy="130" r="10" fill="#0284c7" />
      <text x="524" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,system-ui,sans-serif">3</text>
      <text x="544" y="134" fill="#0c4a6e" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Claude / Temporal</text>
      <text x="544" y="147" fill="#0c4a6e" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Evaluation</text>
      <text x="524" y="167" fill="#0369a1" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">AI-driven lead scoring</text>
      <text x="524" y="180" fill="#0369a1" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">&amp; qualification engine</text>

      {/* ARROW 3→4 */}
      <line x1="678" y1="148" x2="706" y2="148" stroke="#7dd3fc" strokeWidth="1.2" />
      <polygon points="706,144 714,148 706,152" fill="#7dd3fc" />

      {/* CARD 4 */}
      <rect x="720" y="110" width="170" height="76" rx="10" fill="white" stroke="#bae6fd" strokeWidth="1" />
      <circle cx="742" cy="130" r="10" fill="#0284c7" />
      <text x="742" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,system-ui,sans-serif">4</text>
      <text x="762" y="134" fill="#0c4a6e" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Smart Email</text>
      <text x="762" y="147" fill="#0c4a6e" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Outreach</text>
      <text x="742" y="167" fill="#0369a1" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">Personalized multi-channel</text>
      <text x="742" y="180" fill="#0369a1" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">engagement sequences</text>

      <line x1="890" y1="148" x2="898" y2="148" stroke="#0284c7" strokeWidth="1" opacity="0.3" />

      <line x1="80" y1="208" x2="820" y2="208" stroke="#bae6fd" strokeWidth="0.8" />
      <text x="450" y="230" textAnchor="middle" fill="#0369a1" fontSize="9" fontFamily="Inter,system-ui,sans-serif">Next.js Frontend · Node.js API Layer · OpenAI / Claude LLM Pipeline · PostgreSQL · Redis Cache</text>

      <g fill="#0284c7" opacity="0.08">
        <circle cx="20" cy="258" r="1.5" />
        <circle cx="32" cy="258" r="1.5" />
        <circle cx="44" cy="258" r="1.5" />
        <circle cx="856" cy="258" r="1.5" />
        <circle cx="868" cy="258" r="1.5" />
        <circle cx="880" cy="258" r="1.5" />
      </g>
    </g>
  </svg>
)

const B2BRocketSvg = () => (
  <svg width="100%" height="100%" viewBox="0 0 900 280" preserveAspectRatio="xMidYMid meet" display="block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="b2b-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ecfdf5" />
        <stop offset="100%" stopColor="#f0f9ff" />
      </linearGradient>
      <clipPath id="b2b-clip">
        <rect width="900" height="280" rx="16" />
      </clipPath>
    </defs>

    <g clipPath="url(#b2b-clip)">
      <rect width="900" height="280" fill="url(#b2b-bg)" />

      <text x="450" y="44" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="700" fontFamily="Inter,system-ui,sans-serif" letterSpacing="2">B2B ROCKET · AI SALES AGENT PIPELINE</text>
      <text x="450" y="64" textAnchor="middle" fill="#64748b" fontSize="10.5" fontFamily="Inter,system-ui,sans-serif">Autonomous lead generation, CRM sync, and engagement analytics.</text>

      <text x="80" y="94" fill="#334155" fontSize="8.5" fontWeight="700" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.2">INPUT · PROSPECT DATA / CRM</text>
      <text x="820" y="94" textAnchor="end" fill="#334155" fontSize="8.5" fontWeight="700" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.2">OUTPUT · QUALIFIED DEALS &amp; ANALYTICS</text>

      <line x1="20" y1="150" x2="60" y2="150" stroke="#059669" strokeWidth="1" opacity="0.3" />
      <polygon points="60,147 68,150 60,153" fill="#059669" opacity="0.3" />

      {/* STEP 1 */}
      <rect x="70" y="112" width="200" height="76" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="94" cy="132" r="10" fill="#059669" />
      <text x="94" y="136" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,system-ui,sans-serif">1</text>
      <text x="114" y="136" fill="#334155" fontSize="11" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Lead Discovery Agent</text>
      <text x="94" y="157" fill="#64748b" fontSize="9" fontFamily="Inter,system-ui,sans-serif">AI-driven prospecting,</text>
      <text x="94" y="172" fill="#64748b" fontSize="9" fontFamily="Inter,system-ui,sans-serif">data scraping &amp; extraction</text>

      {/* ARROW 1→2 */}
      <line x1="278" y1="150" x2="310" y2="150" stroke="#94a3b8" strokeWidth="1.2" />
      <polygon points="310,146 318,150 310,154" fill="#94a3b8" />

      {/* STEP 2 */}
      <rect x="326" y="112" width="200" height="76" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="350" cy="132" r="10" fill="#059669" />
      <text x="350" y="136" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,system-ui,sans-serif">2</text>
      <text x="370" y="136" fill="#334155" fontSize="11" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Intent Scoring Model</text>
      <text x="350" y="157" fill="#64748b" fontSize="9" fontFamily="Inter,system-ui,sans-serif">Personalized outreach</text>
      <text x="350" y="172" fill="#64748b" fontSize="9" fontFamily="Inter,system-ui,sans-serif">generation &amp; lead qualification</text>

      {/* ARROW 2→3 */}
      <line x1="534" y1="150" x2="566" y2="150" stroke="#94a3b8" strokeWidth="1.2" />
      <polygon points="566,146 574,150 566,154" fill="#94a3b8" />

      {/* STEP 3 */}
      <rect x="582" y="112" width="200" height="76" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="606" cy="132" r="10" fill="#059669" />
      <text x="606" y="136" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,system-ui,sans-serif">3</text>
      <text x="626" y="136" fill="#334155" fontSize="11" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">CRM Integration</text>
      <text x="606" y="157" fill="#64748b" fontSize="9" fontFamily="Inter,system-ui,sans-serif">Automated pipeline update</text>
      <text x="606" y="172" fill="#64748b" fontSize="9" fontFamily="Inter,system-ui,sans-serif">&amp; sales analytics</text>

      <line x1="790" y1="150" x2="880" y2="150" stroke="#059669" strokeWidth="1" opacity="0.3" />

      <line x1="80" y1="210" x2="820" y2="210" stroke="#cbd5e1" strokeWidth="0.8" />
      <text x="450" y="232" textAnchor="middle" fill="#475569" fontSize="9" fontFamily="Inter,system-ui,sans-serif">React &amp; Node.js Microservices · OpenAI API Integration · AWS Cloud Infrastructure</text>

      <g fill="#059669" opacity="0.08">
        <circle cx="20" cy="260" r="1.5" />
        <circle cx="32" cy="260" r="1.5" />
        <circle cx="44" cy="260" r="1.5" />
        <circle cx="856" cy="260" r="1.5" />
        <circle cx="868" cy="260" r="1.5" />
        <circle cx="880" cy="260" r="1.5" />
      </g>
    </g>
  </svg>
)

const SpinSvg = () => (
  <svg width="100%" height="100%" viewBox="0 0 900 280" preserveAspectRatio="xMidYMid meet" display="block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="spin-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#f1f5f9" />
      </linearGradient>
      <clipPath id="spin-clip">
        <rect width="900" height="280" rx="16" />
      </clipPath>
    </defs>

    <g clipPath="url(#spin-clip)">
      <rect width="900" height="280" fill="url(#spin-bg)" />

      <text x="450" y="40" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="700" fontFamily="Inter,system-ui,sans-serif" letterSpacing="2">SPIN · AI BUSINESS MANAGEMENT PLATFORM</text>
      <text x="450" y="60" textAnchor="middle" fill="#64748b" fontSize="10.5" fontFamily="Inter,system-ui,sans-serif">End-to-end automated document processing and workflow management.</text>

      <text x="80" y="88" fill="#334155" fontSize="8.5" fontWeight="700" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.2">INPUT · BUSINESS DOCUMENTS</text>
      <text x="820" y="88" textAnchor="end" fill="#334155" fontSize="8.5" fontWeight="700" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.2">OUTPUT · STRUCTURED DATA &amp; INSIGHTS</text>

      <line x1="20" y1="148" x2="58" y2="148" stroke="#4f46e5" strokeWidth="1" opacity="0.3" />
      <polygon points="58,145 66,148 58,151" fill="#4f46e5" opacity="0.3" />

      {/* CARD 1 */}
      <rect x="66" y="110" width="200" height="76" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="88" cy="130" r="10" fill="#4f46e5" />
      <text x="88" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,system-ui,sans-serif">1</text>
      <text x="108" y="134" fill="#334155" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Data Extraction Engine</text>
      <text x="88" y="155" fill="#64748b" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">OCR and data parsing from</text>
      <text x="88" y="168" fill="#64748b" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">unstructured documents</text>

      {/* ARROW 1→2 */}
      <line x1="272" y1="148" x2="310" y2="148" stroke="#a5b4fc" strokeWidth="1.2" />
      <polygon points="310,144 318,148 310,152" fill="#a5b4fc" />

      {/* CARD 2 */}
      <rect x="326" y="110" width="200" height="76" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="348" cy="130" r="10" fill="#4f46e5" />
      <text x="348" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,system-ui,sans-serif">2</text>
      <text x="368" y="134" fill="#334155" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">AI Processing</text>
      <text x="368" y="147" fill="#334155" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">(Python / Django)</text>
      <text x="348" y="167" fill="#64748b" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">Contextual analysis, entity</text>
      <text x="348" y="180" fill="#64748b" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">recognition &amp; workflow trigger</text>

      {/* ARROW 2→3 */}
      <line x1="532" y1="148" x2="570" y2="148" stroke="#a5b4fc" strokeWidth="1.2" />
      <polygon points="570,144 578,148 570,152" fill="#a5b4fc" />

      {/* CARD 3 */}
      <rect x="586" y="110" width="200" height="76" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="608" cy="130" r="10" fill="#4f46e5" />
      <text x="608" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,system-ui,sans-serif">3</text>
      <text x="628" y="134" fill="#334155" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Workflow Orchestration</text>
      <text x="608" y="155" fill="#64748b" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">Business process automation</text>
      <text x="608" y="168" fill="#64748b" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">&amp; system updates</text>

      <line x1="794" y1="148" x2="880" y2="148" stroke="#4f46e5" strokeWidth="1" opacity="0.3" />

      <line x1="80" y1="208" x2="820" y2="208" stroke="#e2e8f0" strokeWidth="0.8" />
      <text x="450" y="230" textAnchor="middle" fill="#475569" fontSize="9" fontFamily="Inter,system-ui,sans-serif">Python &amp; Django Backend · AWS Infrastructure · OpenAI Integration</text>

      <g fill="#4f46e5" opacity="0.08">
        <circle cx="20" cy="258" r="1.5" />
        <circle cx="32" cy="258" r="1.5" />
        <circle cx="44" cy="258" r="1.5" />
        <circle cx="856" cy="258" r="1.5" />
        <circle cx="868" cy="258" r="1.5" />
        <circle cx="880" cy="258" r="1.5" />
      </g>
    </g>
  </svg>
)

const LanternSvg = () => (
  <svg width="100%" height="100%" viewBox="0 0 900 280" preserveAspectRatio="xMidYMid meet" display="block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lan-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#f1f5f9" />
      </linearGradient>
      <clipPath id="lan-clip">
        <rect width="900" height="280" rx="16" />
      </clipPath>
    </defs>

    <g clipPath="url(#lan-clip)">
      <rect width="900" height="280" fill="url(#lan-bg)" />

      <text x="450" y="40" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="700" fontFamily="Inter,system-ui,sans-serif" letterSpacing="2">LANTERN FINANCE · FINTECH DATA PIPELINE</text>
      <text x="450" y="60" textAnchor="middle" fill="#64748b" fontSize="10.5" fontFamily="Inter,system-ui,sans-serif">Crypto-based loan management, investment tracking, and personal finance tools.</text>

      <text x="80" y="88" fill="#334155" fontSize="8.5" fontWeight="700" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.2">INPUT · SECURE USER DATA</text>
      <text x="820" y="88" textAnchor="end" fill="#334155" fontSize="8.5" fontWeight="700" fontFamily="Inter,system-ui,sans-serif" letterSpacing="1.2">OUTPUT · ASSET MANAGEMENT &amp; REPORTING</text>

      <line x1="20" y1="148" x2="58" y2="148" stroke="#4f46e5" strokeWidth="1" opacity="0.3" />
      <polygon points="58,145 66,148 58,151" fill="#4f46e5" opacity="0.3" />

      {/* CARD 1 */}
      <rect x="66" y="110" width="200" height="76" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="88" cy="130" r="10" fill="#4f46e5" />
      <text x="88" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,system-ui,sans-serif">1</text>
      <text x="108" y="134" fill="#334155" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Secure Onboarding</text>
      <text x="88" y="155" fill="#64748b" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">Verified user identity and</text>
      <text x="88" y="168" fill="#64748b" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">compliant account setup</text>

      {/* ARROW 1→2 */}
      <line x1="272" y1="148" x2="310" y2="148" stroke="#a5b4fc" strokeWidth="1.2" />
      <polygon points="310,144 318,148 310,152" fill="#a5b4fc" />

      {/* CARD 2 */}
      <rect x="326" y="110" width="200" height="76" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="348" cy="130" r="10" fill="#4f46e5" />
      <text x="348" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,system-ui,sans-serif">2</text>
      <text x="368" y="134" fill="#334155" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Crypto Loan Engine</text>
      <text x="348" y="155" fill="#64748b" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">Collateral assessment, loan</text>
      <text x="348" y="168" fill="#64748b" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">approval &amp; disbursement flow</text>

      {/* ARROW 2→3 */}
      <line x1="532" y1="148" x2="570" y2="148" stroke="#a5b4fc" strokeWidth="1.2" />
      <polygon points="570,144 578,148 570,152" fill="#a5b4fc" />

      {/* CARD 3 */}
      <rect x="586" y="110" width="200" height="76" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="608" cy="130" r="10" fill="#4f46e5" />
      <text x="608" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,system-ui,sans-serif">3</text>
      <text x="628" y="134" fill="#334155" fontSize="10.5" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">Portfolio Analytics</text>
      <text x="608" y="155" fill="#64748b" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">Real-time investment tracking</text>
      <text x="608" y="168" fill="#64748b" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">&amp; budget optimization</text>

      <line x1="794" y1="148" x2="880" y2="148" stroke="#4f46e5" strokeWidth="1" opacity="0.3" />

      <line x1="80" y1="208" x2="820" y2="208" stroke="#e2e8f0" strokeWidth="0.8" />
      <text x="450" y="230" textAnchor="middle" fill="#475569" fontSize="9" fontFamily="Inter,system-ui,sans-serif">React &amp; Next.js Frontend · Tailwind CSS · Node.js Backend · AWS Cloud &amp; Firebase Integration</text>

      <g fill="#4f46e5" opacity="0.08">
        <circle cx="20" cy="258" r="1.5" />
        <circle cx="32" cy="258" r="1.5" />
        <circle cx="44" cy="258" r="1.5" />
        <circle cx="856" cy="258" r="1.5" />
        <circle cx="868" cy="258" r="1.5" />
        <circle cx="880" cy="258" r="1.5" />
      </g>
    </g>
  </svg>
)

const projects = [
  {
    title: 'Success.ai',
    description:
      'AI-driven B2B SaaS platform for customer engagement, sales, and marketing automation — optimizing business operations and customer relationships.',
    image: <SuccessAiSvg />,
    tags: ['React', 'Node', 'MongoDB', 'AWS', 'OpenAI', 'SendGrid'],
  },
  {
    title: 'B2B Rocket',
    description:
      'AI agents platform for B2B companies — managing and optimizing sales processes with lead generation, CRM integration, and sales analytics.',
    image: <B2BRocketSvg />,
    tags: ['React', 'Next.js', 'Node', 'OpenAI', 'AWS'],
  },
  {
    title: 'SPIN',
    description:
      'AI-powered business management platform for document processing, data extraction, and workflow automation.',
    image: <SpinSvg />,
    tags: ['React', 'Next.js', 'Node', 'Python', 'Django', 'AWS', 'OpenAI'],
  },
  {
    title: 'Lantern Finance',
    description:
      'Crypto-based financial platform providing tools for managing personal and business finances, including investment tracking, budgeting, and financial planning.',
    image: <LanternSvg />,
    tags: ['React', 'Next.js', 'Node', 'Tailwind CSS', 'Firebase', 'AWS'],
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
                <div className="aspect-[9/4] mb-4 sm:mb-6 overflow-hidden rounded-2xl shadow-lg border border-outline-var/30">
                  {project.image}
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
