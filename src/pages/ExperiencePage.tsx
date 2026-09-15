type Job = {
  title: string
  company: string
  dates: string
  bullets: string[]
  technologies: string[]
}

const jobs: Job[] = [
  {
    title: 'AI Engineer / Full Stack Developer',
    company: 'Confidential Client, UK',
    dates: 'June 2026 – August 2026',
    bullets: [
      'Architected a multi-agent orchestration engine from scratch as one of two engineers, designing 5 specialised agents on a shared engine, with a Context Registry enabling automated cross-agent data handoffs.',
      'Built a provider-agnostic adapter integrating Claude and OpenAI APIs, with real-time streaming (SSE), tool-calling, and a PostgreSQL schema persisting agent state and token usage.',
      'Built automation layers including phase detection and synthesis pipelines, plus admin dashboards for LLM usage monitoring and prompt management, proactively structuring ambiguous problems into clear technical workflows.',
    ],
    technologies: ['TypeScript', 'React', 'Vite', 'Node.js', 'Claude API', 'OpenAI API', 'PostgreSQL', 'SSE'],
  },
  {
    title: 'Software Developer',
    company: 'HDFC Ergo General Insurance Company Ltd., Mumbai',
    dates: 'May 2024 – January 2025',
    bullets: [
      'Designed and developed a customer-facing insurance purchase platform end to end using React.js, Next.js and Node.js, translating business requirements into clear technical specifications and workflows.',
      'Built and maintained RESTful APIs in Node.js and Express.js for insurance workflows, including authentication, authorisation and data retrieval from SQL and NoSQL stores.',
      'Designed and implemented a GenAI-powered backend using Python and FastAPI, integrating LLM APIs into a production employee chatbot.',
      'Collaborated with data and analytics teams, using Python and SQL to prepare and analyse datasets feeding into dashboards and reporting.',
      'Implemented Redis-based session management for login, improving authentication performance and reliability.',
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Python', 'FastAPI', 'SQL', 'Redis'],
  },
  {
    title: 'Software Developer',
    company: 'Reliance Nippon Life Insurance, Mumbai',
    dates: 'January 2023 – April 2024',
    bullets: [
      'Developed backend services for the SA3 application using Node.js and MongoDB in a microservice-based architecture, designing and maintaining REST APIs that supported internal operational workflows.',
      'Wrote optimised SQL queries for extracting hierarchical data and generating performance reports, improving data fetch performance by 20 seconds.',
      'Integrated third-party APIs, including SMS and email notification services, and handled webhooks to automate data collection and notifications.',
      'Implemented a responsive QR-based attendance web application using React.js and Node.js, reducing fraud via geo-location checks.',
    ],
    technologies: ['Node.js', 'MongoDB', 'SQL', 'React.js'],
  },
  {
    title: 'Engineer',
    company: 'Larsen & Toubro Infotech, Mumbai, India',
    dates: 'October 2020 – October 2022',
    bullets: [
      'Supported enterprise clients by creating and managing servers, checking logs and reviewing system health on cloud infrastructure, resolving incidents to ensure high availability.',
    ],
    technologies: ['Cloud Infrastructure'],
  },
]

function ExperiencePage() {
  return (
    <section className="detail-panel" aria-labelledby="experience-title">
      <p className="hero-eyebrow">The journey so far</p>
      <h1 id="experience-title" className="panel-title">Experience<span>.</span></h1>
      <p className="panel-intro">Building thoughtful software, from enterprise platforms to intelligent AI systems.</p>
      <div className="detail-stack timeline">
        {jobs.map((job) => (
          <article key={job.title + job.company} className="detail-card">
            <p className="card-date">{job.dates}</p>
            <h2>{job.title}</h2>
            <p className="card-company">{job.company}</p>
            <ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            <div className="tech-tags">
              {job.technologies.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperiencePage
