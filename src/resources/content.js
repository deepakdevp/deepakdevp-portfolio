import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Deepak",
  lastName: "Dev",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Engineer & Full Stack Developer",
  avatar: "/images/my_avatar.png",
  email: "deepakdevp@gmail.com",
  location: "Asia/Tokyo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Japanese (N5 – actively learning)"], // optional: Leave the array empty if you don't want to display languages
};
const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about building with AI — RAG systems, agentic workflows, MCP servers, and what it
      actually looks like to ship AI in production.
    </>
  ),
};
const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/deepakdevp",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/deepak-dev-panwar-166187135/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/DeepakDev2012",
  },

  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const contact = {
  display: true,
  title: <>Contact Me</>,
  description: (
    <>
      Want to build something with AI? Need help getting your team to adopt AI tools? Or just want
      to connect? Let's talk.
    </>
  ),
  options: [
    {
      name: "Schedule a Call",
      icon: "calendar",
      link: "https://cal.com/deepakdevp",
    },
    {
      name: "Email",
      icon: "email",
      link: `mailto:${person.email}`,
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/deepak-dev-panwar-166187135/",
    },
  ],
};

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building products in the age of AI</>,
  featured: {
    display: false,
    title: (
      <>
        Recent project: <strong className="ml-4">AI Health Assistant</strong>
      </>
    ),
    href: "/work/ai-health-assistant",
  },
  subline: (
    <>
      I'm Deepak Dev — I build with AI. RAG systems, agentic workflows, and LLM-powered products.
      Currently shipping AI at Medikabazaar and helping teams move faster with AI tools.
      <br />
      Also learning Japanese (JLPT N5) こんにちは！
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – Deepak Dev Panwar`,
  description: `Meet Deepak Dev Panwar, AI Engineer building with LLMs, RAG, and agentic workflows`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/deepakdevp",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Deepak Dev Panwar is an AI Engineer & Full Stack Developer with 5+ years of experience
        shipping production software. He builds LLM-powered products — RAG systems, agentic
        workflows, MCP servers, and AI tooling — and helps engineering teams adopt AI practices in
        their day-to-day work.
        <br />
        <br />
        At Medikabazaar, India's largest B2B healthcare marketplace, Deepak shipped an AI-powered
        invoice processing system using OpenAI vision models that eliminated 80% of manual data
        entry across ₹100 Cr+ monthly GMV. He leads a 5-engineer team and has built platforms used
        by 250K+ customers.
        <br />
        <br />
        Outside work, Deepak is actively learning Japanese (targeting JLPT N5 🇯🇵) and exploring
        frontier AI tools and agentic coding with Claude Code.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Medikabazaar",
        timeframe: "Apr 2022 – Present",
        role: "SDE 2 / Full Stack Engineer",
        achievements: [
          <>
            Architected centralised User Access Management (UAM) system, consolidating
            authentication for 8+ enterprise platforms with SSO integration, unifying company-wide
            identity policies.
          </>,
          <>
            Set up CI/CD pipelines using Jenkins with Kafka, New Relic, and Docker on AWS, improving
            deployment reliability and observability.
          </>,
          <>
            Led 5-engineer team through architecture decisions, code reviews, and mentoring on
            system design patterns.
          </>,
          <>
            Delivered 60% automation of invoicing processes (Accounts Receivable, Payable, Credit
            Notes) using React, Django, and Java Spring Boot microservices.
          </>,
          <>
            Built automated invoice processing leveraging OpenAI vision models, eliminating 80% of
            manual data entry.
          </>,
          <>
            Architected Medical Device Service Platform — 2 cross-platform mobile apps (Ionic) +
            React/Django admin panel, achieving 90% field operations adoption.
          </>,
          <>
            Built &amp; published internal React component library on NPM (Storybook + Chromatic),
            adopted by 50+ developers across 12 teams, reducing dev time by 50%.
          </>,
        ],
        images: [],
      },
      {
        company: "DrishteAI",
        timeframe: "Jul 2020 – Feb 2022",
        role: "Software Engineer",
        achievements: [
          <>
            Architected offline advertisement platform (similar to Google Ads) with NVIDIA Jetson
            Nano edge devices and computer vision pipelines.
          </>,
          <>
            Led 3-person team delivering real-time analytics dashboards, annotation tools, and
            campaign portals for 10+ enterprise clients.
          </>,
          <>
            Designed Upasthiti — facial recognition attendance system deployed for 10+ clients using
            React, Django, and computer vision.
          </>,
        ],
        images: [],
      },
      {
        company: "DrishteAI",
        timeframe: "Jan 2020 – Jun 2020",
        role: "Intern – Full Stack Engineer",
        achievements: [<>Built ad analytics dashboards using React and Django.</>],
        images: [],
      },
      {
        company: "Reliance Jio",
        timeframe: "May 2018 – Jul 2018",
        role: "Software Intern",
        achievements: [
          <>
            Built a React-Django portal for internal network issue tracking, improving incident
            management efficiency.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Bennett University",
        description: (
          <>Bachelor of Technology in Computer Science (Specialisation in AI/ML), 2016–2020.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Full Stack Development",
        description: (
          <>
            Proficient in React.js, Next.js, TypeScript, Django, Node.js, and Java Spring Boot —
            building scalable, production-ready applications.
          </>
        ),
        images: [],
      },
      {
        title: "DevOps & Cloud",
        description: (
          <>
            Experienced with Docker, Kubernetes, Jenkins, AWS (EC2, Lambda, RDS, S3), and CI/CD
            pipelines for deployment automation and monitoring.
          </>
        ),
        images: [],
      },
      {
        title: "Databases & Messaging",
        description: (
          <>
            Hands-on with PostgreSQL, MongoDB, Redis, Kafka, ElasticSearch, and Prisma ORM for
            efficient, event-driven systems.
          </>
        ),
        images: [],
      },
      {
        title: "LLMs & AI Engineering",
        description: (
          <>
            Building with Claude (Anthropic), GPT-4o (OpenAI), and open-source models via
            HuggingFace. Hands-on with prompt engineering, function calling, structured outputs, and
            streaming APIs.
          </>
        ),
        images: [],
      },
      {
        title: "RAG & Vector Search",
        description: (
          <>
            Shipped RAG systems using LangChain and LlamaIndex. Experienced with chunking strategies
            (fixed, semantic, structure-aware), embeddings, Pinecone and pgvector for retrieval, and
            hybrid search approaches.
          </>
        ),
        images: [],
      },
      {
        title: "Agentic AI & MCP",
        description: (
          <>
            Building with Claude Code and agentic coding workflows. Exploring multi-agent
            orchestration, tool use, and MCP (Model Context Protocol) server development for
            AI-native tooling.
          </>
        ),
        images: [],
      },
      {
        title: "AI in Production",
        description: (
          <>
            Deployed OpenAI vision models at scale (₹100 Cr+ GMV platform), eliminating 80% of
            manual invoice processing. Experience with AI adoption strategy, evaluation, and rolling
            out LLM tools to engineering teams.
          </>
        ),
        images: [],
      },
      {
        title: "Testing & Tooling",
        description: (
          <>
            Familiar with Jest, React Testing Library, Playwright, Storybook, Mixpanel, Sentry, New
            Relic, and Agile/Scrum methodology.
          </>
        ),
        images: [],
      },
    ],
  },
};

const currently = {
  display: true,
  items: [
    { label: "Building", value: "A RAG-powered chatbot for this portfolio" },
    { label: "Learning", value: "Agentic AI orchestration & MCP server design" },
    { label: "Shipping", value: "AI invoice automation at Medikabazaar" },
  ],
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing on AI, RAG, agentic systems & building with LLMs",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, contact, home, currently, about, blog, work, gallery, newsletter };
