// Resume content shown on the info page. Newest entries first in each list.

export interface Entry {
  title: string;
  subtitle?: string;
  period?: string;
  href?: string;
  points?: readonly string[];
  tags?: readonly string[];
}

export interface SkillGroup {
  label: string;
  items: readonly string[];
}

export const about: readonly string[] = [
  'I am a software engineer at Pattern, where I work on LLM integrations and AI agents. Before that, I interned on the same team building marketplace integrations with Ruby on Rails, Sidekiq and Redis.',
  'Most of my side projects rebuild tools I use every day to understand how they work: a Redis-like data store in Go, and an HTTP server and Git in C++.',
];

export const experience: readonly Entry[] = [
  {
    title: 'Software Engineer',
    subtitle: 'Pattern',
    period: 'Jul 2026 - Present',
    points: [
      'Deployed an LLM-powered assistant (Claude) into the Amazon and Walmart syndication Slack channels, grounded in a curated knowledge base with retrieval-augmented generation.',
      "Extended the team's internal AI agent harness with reusable agent skills and MCP-backed context sources.",
    ],
    tags: ['LLMs', 'MCP', 'AI agents', 'Ruby on Rails', 'Node.js', 'Python', 'Bash'],
  },
  {
    title: 'Software Engineer Intern',
    subtitle: 'Pattern',
    period: 'May 2025 - Jul 2025',
    points: [
      'Shipped a Zalando marketplace integration to production, syndicating 5,000+ SKUs across 7 brands.',
      'Designed REST and GraphQL APIs across 4 microservices and built order synchronization with Sidekiq workers and Redis caching.',
      'Raised integration pipeline test coverage from 73% to 89% with 20+ RSpec tests, added Rake tasks for data backfills, and Datadog logging for observability.',
    ],
    tags: ['Ruby on Rails', 'TypeScript', 'Node.js', 'Redis', 'GraphQL', 'Docker', 'CI/CD'],
  },
];

export const projects: readonly Entry[] = [
  {
    title: 'myGit',
    subtitle: 'Git implementation',
    period: '2026',
    href: 'https://github.com/Veer0x1/myGit',
    points: [
      'Git in C++: repository init, blob hashing, object inspection, and tree and commit creation.',
      'Clones public repositories over Git Smart HTTP by parsing pkt-line refs, issuing upload-pack requests, unpacking packfiles and checking out commits.',
    ],
    tags: ['C++23', 'Git internals', 'libcurl', 'OpenSSL', 'zlib'],
  },
  {
    title: 'HTTP Server',
    period: 'May 2024',
    points: [
      'Concurrent HTTP server serving static content, with endpoint routing, error handling, Gzip compression and mutex-guarded shared state.',
    ],
    tags: ['C++', 'Sockets', 'TCP/IP', 'HTTP'],
  },
  {
    title: 'In-memory data store',
    subtitle: 'Redis-like cache',
    period: 'Mar 2023 - Jul 2023',
    points: [
      'Key-value store implementing PING, ECHO, SET, GET, INFO, REPLCONF and PSYNC over the RESP protocol.',
      'Master-replica replication with RDB persistence, and concurrent TCP connections handled with goroutines.',
    ],
    tags: ['Go', 'TCP/IP', 'Concurrency', 'RESP'],
  },
  {
    title: 'IAAN',
    subtitle: 'Startup funding platform for IIT alumni',
    period: 'Mar 2023 - Jul 2023',
    points: [
      'Web app connecting student startups with IIT alumni investors, with searchable startup and investor feeds, dashboards and registration.',
      'Email/password and LinkedIn sign-in with JWT, Firebase Storage uploads, and server-side rendering with Next.js.',
    ],
    tags: ['Next.js', 'TypeScript', 'Firebase', 'JWT', 'Tailwind CSS'],
  },
];

export const skills: readonly SkillGroup[] = [
  { label: 'Languages', items: ['C/C++', 'Python', 'Bash', 'TypeScript', 'Go', 'Ruby', 'SQL'] },
  {
    label: 'Frameworks & tech',
    items: ['React', 'Next.js', 'Node.js', 'Ruby on Rails', 'REST', 'GraphQL', 'PostgreSQL', 'Redis', 'Firebase', 'DynamoDB'],
  },
  {
    label: 'Tools & concepts',
    items: ['Linux', 'Git', 'CI/CD', 'Datadog', 'Sidekiq', 'TCP/IP', 'Concurrency', 'Unit testing'],
  },
];

export const education: readonly Entry[] = [
  {
    title: 'IIT (BHU) Varanasi',
    subtitle: 'Integrated Dual Degree, Electrical Engineering',
    period: '2021 - 2026',
    points: ['CGPA 9.32 / 10'],
  },
];

export const achievements: readonly Entry[] = [
  {
    title: 'Technical Head',
    subtitle: 'E-Cell IIT BHU',
    period: 'Jun 2023 - May 2024',
    points: [
      'Led an 11+ member team, trained members in web development, and led the Student Internship Portal, Campus Director Portal and E-Cell website.',
    ],
  },
  {
    title: 'Competitive programming',
    points: [
      'Codeforces Specialist (max rating 1598) and CodeChef 4 Star (max rating 1818).',
      'Global rank 28 in CodeChef Starters 134.',
    ],
  },
];
