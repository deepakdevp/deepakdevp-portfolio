import { Logo } from '@once-ui-system/core';

const person = {
  firstName: 'Deepak',
  lastName: 'Dev',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Full Stack Engineer',
  avatar: '/images/avatar.jpg',
  email: 'deepakdevp@gmail.com',
  location: 'Asia/Tokyo', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English', 'Hindi', 'Japanese'], // optional: Leave the array empty if you don't want to display languages
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
      link: 'https://cal.com/deepakdevp', // Uses the existing calendar link
    },
    {
      name: 'Email',
      icon: 'email',
      link: `mailto:${person.email}`,
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      link: social.find((s) => s.name === 'LinkedIn').link,
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
        Recent project: <strong className="ml-4">AI Chatbot</strong>
      </>
    ),
    href: '/work/building-once-ui-a-customizable-design-system',
  },
  subline: (
    <>
      I'm Deepak Dev, a FullStack Engineer at Medikabazaar , where I
      craft intuitive
      <br /> user experiences. After hours, I build my own projects.
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
        Deepak Dev Panwar is a Full Stack Software Engineer with 5+
        years of experience in building scalable web applications
        using React, Next.js, Django, and Java Spring Boot. He
        specializes in centralized authentication, CI/CD pipelines,
        and performance optimization. Deepak has led cross-functional
        teams and contributed to fintech, medical, and AI-based
        solutions.
      </>
    ),
  },
  work: {
    display: true,
    title: 'Work Experience',
    experiences: [
      {
        company: 'Medikabazaar',
        timeframe: 'Apr 2024 – Present',
        role: 'SDE 2 / Full Stack Engineer',
        achievements: [
          <>
            Built Seller Management Portal with React & Node.js,
            reducing onboarding time by 90%.
          </>,
          <>
            Created centralized User Access Management system across 8
            platforms.
          </>,
          <>
            Led UI component library development with Storybook &
            Chromatic.
          </>,
          <>
            Implemented Jenkins, Kafka, Docker pipelines with
            observability tools.
          </>,
          <>
            Managed a team of 5 engineers, ensuring timely and
            high-quality delivery.
          </>,
        ],
        images: [],
      },
      {
        company: 'Medikabazaar',
        timeframe: 'Mar 2022 – Mar 2024',
        role: 'SDE 1 / Full Stack Engineer',
        achievements: [
          <>
            Developed Medical Device Service Platform with React,
            Ionic, Django.
          </>,
          <>
            Automated financial modules using React & Spring Boot with
            60% invoice automation.
          </>,
          <>
            Built responsive dashboards for service and admin
            workflows.
          </>,
        ],
        images: [],
      },
      {
        company: 'Drishte',
        timeframe: 'Jul 2020 – Feb 2022',
        role: 'Full Stack Engineer',
        achievements: [
          <>
            Built real-time dashboards and ML tools with React &
            Django.
          </>,
          <>
            Created facial recognition attendance system (Upasthiti).
          </>,
          <>Optimized edge-based ad platform using Jetson Nano.</>,
        ],
        images: [],
      },
      {
        company: 'Drishte',
        timeframe: 'Jan 2020 – Jun 2020',
        role: 'Intern – Full Stack Engineer',
        achievements: [
          <>Built ad analytics dashboards using React and Django.</>,
        ],
        images: [],
      },
      {
        company: 'GeeksforGeeks',
        timeframe: 'May 2019 – Aug 2019',
        role: 'Technical Content Intern',
        achievements: [
          <>Wrote 60+ articles on Python, JavaScript, and Django.</>,
        ],
        images: [],
      },
      {
        company: 'Reliance Jio',
        timeframe: 'May 2018 – Jul 2018',
        role: 'Software Intern',
        achievements: [
          <>
            Developed a React-Django portal for internal issue
            tracking.
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
          <>Bachelor of Technology in Computer Science (2016–2020).</>
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
            Proficient in building scalable web apps using React.js,
            Next.js, Django, Node.js, Java Spring Boot, and
            TypeScript.
          </>
        ),
        images: [],
      },
      {
        title: 'DevOps & Cloud',
        description: (
          <>
            Experienced with Docker, Kubernetes, Jenkins, AWS, and
            CI/CD pipelines for deployment automation and monitoring.
          </>
        ),
        images: [],
      },
      {
        title: 'Databases & Messaging',
        description: (
          <>
            Hands-on with PostgreSQL, Redis, Kafka, and Prisma ORM for
            building efficient, event-driven systems.
          </>
        ),
        images: [],
      },
      {
        title: 'Testing & Tooling',
        description: (
          <>
            Familiar with Jest, React Testing Library, Playwright,
            Storybook, Git, and Agile methodology.
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
  title: 'Writing about design and tech...',
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
