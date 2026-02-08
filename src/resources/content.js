import { Logo } from '@once-ui-system/core';

const person = {
  firstName: 'Deepak',
  lastName: 'Dev',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Full Stack Engineer',
  avatar: '/images/my_avatar.png',
  email: 'deepakdevp@gmail.com',
  location: 'Asia/Tokyo', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English', 'Hindi', 'Japanese (N5 – actively learning)'], // optional: Leave the array empty if you don't want to display languages
};
const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share
      thoughts on the intersection of creativity and engineering.
    </>
  ),
};
const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/deepakdevp',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/deepak-dev-panwar-166187135/',
  },

  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
  },
];

const contact = {
  display: true,
  title: <>Contact Me</>,
  description: (
    <>
      Interested in working together or want to connect? Choose an
      option below to get in touch!
    </>
  ),
  options: [
    {
      name: 'Schedule a Call',
      icon: 'calendar',
      link: 'https://cal.com/deepakdevp',
    },
    {
      name: 'Email',
      icon: 'email',
      link: `mailto:${person.email}`,
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/deepak-dev-panwar-166187135/',
    },
  ],
};

const home = {
  path: '/',
  image: '/images/og/home.jpg',
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">AI Health Assistant</strong>
      </>
    ),
    href: '/work/ai-health-assistant',
  },
  subline: (
    <>
      こんにちは！ I'm Deepak Dev, a Full Stack Engineer at Medikabazaar, crafting
      intuitive user experiences.
      <br />
      Currently learning Japanese (JLPT N5) 🇯🇵 &amp; exploring Claude Code and agentic
      coding workflows. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: '/about',
  label: 'About',
  title: `About – Deepak Dev Panwar`,
  description: `Meet Deepak Dev Panwar, Full Stack Software Engineer from India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://cal.com/deepakdevp',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        こんにちは！ Deepak Dev Panwar is a Full Stack Software Engineer with 5+
        years of experience building scalable web applications using React,
        Next.js, Django, and Java Spring Boot. He specialises in centralised
        authentication, CI/CD pipelines, and performance optimisation. Deepak
        has led cross-functional teams and contributed to fintech, medical, and
        AI-based solutions.
        <br /><br />
        Outside work, Deepak is actively learning Japanese (targeting JLPT N5
        🇯🇵) and deeply exploring Claude Code and agentic coding — building
        AI-powered workflows with MCP servers, LangChain, and multi-agent
        systems. He is preparing to relocate to Japan and contribute to
        product-focused engineering teams there.
      </>
    ),
  },
  work: {
    display: true,
    title: 'Work Experience',
    experiences: [
      {
        company: 'Medikabazaar',
        timeframe: 'Apr 2022 – Present',
        role: 'SDE 2 / Full Stack Engineer',
        achievements: [
          <>
            Architected centralised User Access Management (UAM) system,
            consolidating authentication for 8+ enterprise platforms with SSO
            integration, unifying company-wide identity policies.
          </>,
          <>
            Set up CI/CD pipelines using Jenkins with Kafka, New Relic, and
            Docker on AWS, improving deployment reliability and observability.
          </>,
          <>
            Led 5-engineer team through architecture decisions, code reviews,
            and mentoring on system design patterns.
          </>,
          <>
            Delivered 60% automation of invoicing processes (Accounts
            Receivable, Payable, Credit Notes) using React, Django, and Java
            Spring Boot microservices.
          </>,
          <>
            Built automated invoice processing leveraging OpenAI vision models,
            eliminating 80% of manual data entry.
          </>,
          <>
            Architected Medical Device Service Platform — 2 cross-platform
            mobile apps (Ionic) + React/Django admin panel, achieving 90%
            field operations adoption.
          </>,
          <>
            Built &amp; published internal React component library on NPM
            (Storybook + Chromatic), adopted by 50+ developers across 12 teams,
            reducing dev time by 50%.
          </>,
        ],
        images: [],
      },
      {
        company: 'DrishteAI',
        timeframe: 'Jul 2020 – Feb 2022',
        role: 'Software Engineer',
        achievements: [
          <>
            Architected offline advertisement platform (similar to Google Ads)
            with NVIDIA Jetson Nano edge devices and computer vision pipelines.
          </>,
          <>
            Led 3-person team delivering real-time analytics dashboards,
            annotation tools, and campaign portals for 10+ enterprise clients.
          </>,
          <>
            Designed Upasthiti — facial recognition attendance system deployed
            for 10+ clients using React, Django, and computer vision.
          </>,
        ],
        images: [],
      },
      {
        company: 'DrishteAI',
        timeframe: 'Jan 2020 – Jun 2020',
        role: 'Intern – Full Stack Engineer',
        achievements: [
          <>Built ad analytics dashboards using React and Django.</>,
        ],
        images: [],
      },
      {
        company: 'Reliance Jio',
        timeframe: 'May 2018 – Jul 2018',
        role: 'Software Intern',
        achievements: [
          <>
            Built a React-Django portal for internal network issue tracking,
            improving incident management efficiency.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: 'Education',
    institutions: [
      {
        name: 'Bennett University',
        description: (
          <>
            Bachelor of Technology in Computer Science (Specialisation in
            AI/ML), 2016–2020.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: 'Technical Skills',
    skills: [
      {
        title: 'Full Stack Development',
        description: (
          <>
            Proficient in React.js, Next.js, TypeScript, Django, Node.js, and
            Java Spring Boot — building scalable, production-ready applications.
          </>
        ),
        images: [],
      },
      {
        title: 'DevOps & Cloud',
        description: (
          <>
            Experienced with Docker, Kubernetes, Jenkins, AWS (EC2, Lambda, RDS,
            S3), and CI/CD pipelines for deployment automation and monitoring.
          </>
        ),
        images: [],
      },
      {
        title: 'Databases & Messaging',
        description: (
          <>
            Hands-on with PostgreSQL, MongoDB, Redis, Kafka, ElasticSearch, and
            Prisma ORM for efficient, event-driven systems.
          </>
        ),
        images: [],
      },
      {
        title: 'AI & Agentic Coding',
        description: (
          <>
            Actively building with Claude Code, LangChain, OpenAI APIs, RAG
            pipelines, MCP servers, and multi-agent systems. Exploring the
            frontier of AI-assisted engineering workflows.
          </>
        ),
        images: [],
      },
      {
        title: 'Testing & Tooling',
        description: (
          <>
            Familiar with Jest, React Testing Library, Playwright, Storybook,
            Mixpanel, Sentry, New Relic, and Agile/Scrum methodology.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: '/blog',
  label: 'Blog',
  title: 'Thoughts on tech, AI & Japanese learning',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: '/work',
  label: 'Work',
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: '/images/gallery/horizontal-1.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-2.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-3.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-4.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/vertical-1.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-2.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-3.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-4.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
  ],
};

export {
  person,
  social,
  contact,
  home,
  about,
  blog,
  work,
  gallery,
  newsletter,
};
