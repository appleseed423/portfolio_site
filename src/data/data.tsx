import {
  ArrowDownTrayIcon,
  CheckBadgeIcon,
  ClockIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  HandThumbUpIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import client1 from '../images/clients/1.png';
import client2 from '../images/clients/2.jpg';
import client3 from '../images/clients/3.jpg';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/1.PNG';
import porfolioImage2 from '../images/portfolio/2.jpg';
import porfolioImage3 from '../images/portfolio/3.PNG';
import porfolioImage4 from '../images/portfolio/4.jpg';
import porfolioImage5 from '../images/portfolio/5.jpg';
import porfolioImage6 from '../images/portfolio/6.jpg';
import porfolioImage7 from '../images/portfolio/7.jpg';
import porfolioImage8 from '../images/portfolio/8.PNG';
import porfolioImage9 from '../images/portfolio/9.PNG';
import porfolioImage10 from '../images/portfolio/10.jpg';
import porfolioImage11 from '../images/portfolio/11.jpg';
import porfolioImage12 from '../images/portfolio/12.PNG';
import porfolioImage13 from '../images/portfolio/13.jpg';
import porfolioImage14 from '../images/portfolio/14.PNG';
import porfolioImage15 from '../images/portfolio/15.jpg';
import porfolioImage16 from '../images/portfolio/16.jpg';
import porfolioImage17 from '../images/portfolio/17.PNG';
import porfolioImage18 from '../images/portfolio/18.PNG';
import porfolioImage19 from '../images/portfolio/19.PNG';
import porfolioImage20 from '../images/portfolio/20.jpg';
// import profilepic from '../images/profilepic1.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';



/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'MANUEL RIVERA',
  description: "Portfolio site built with Next.js by Manuel Rivera",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Manuel Rivera.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Senior Full Stack Developer</strong>, with <strong className="text-stone-100"> 10+ years experience</strong> in building <strong className="text-stone-100">Web Applications</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Based in <strong className="text-stone-100">Pereira, Risaralda, Colombia</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://app.enhancv.com/share/d08f5f06/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  // profileImageSrc: profilepic,
  description: `Results-oriented Full Stack Developer with 11 years of professional experience delivering high-performance applications using React, Next.js, Node.js, and Django. Skilled in building scalable, user-friendly front-end interfaces and robust back-end architectures. Proficient in modern web technologies, including PHP, Laravel, SQL (MySQL, PostgreSQL), and MongoDB. Experienced in agile environments, collaborating with cross-functional teams to meet project goals effectively. Demonstrated ability to enhance team collaboration and deliver high- quality, maintainable code by adhering to industry best practices. Passionate about performance optimization, user experience, and scalable software solutions.`,
  aboutItems: [
    {label: '20+', text: 'Project completed', Icon: CheckBadgeIcon},
    {label: '96%', text: 'Satisfaction of customers', Icon: HandThumbUpIcon},
    {label: '21000+', text: 'Development Hours', Icon: ClockIcon},
    {label: '550K+', text: 'Total Earning', Icon: CurrencyDollarIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React/Next',
        level: 8,
      },
      {
        name: 'JS/TS',
        level: 10,
      },
      {
        name: 'TailWind CSS',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Django',
        level: 8,
      },
      {
        name: 'Laravel',
        level: 8,
      },
    ],
  },
  {
    name: 'Database development',
    skills: [
      {
        name: 'Mongo DB',
        level: 9,
      },
      {
        name: 'MySQL',
        level: 8,
      },
      {
        name: 'Postgre SQL',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Seller Crowd',
    description: 'React, Next.js, Amazon Web Services, Stripe, ...',
    url: 'https://sellercrowd.com/#extension',
    image: porfolioImage1,
  },
  {
    title: 'Live Sessions',
    description: 'React, Express, Node.js, Heroku, ...',
    url: 'https://livesessions.npr.org/',
    image: porfolioImage2,
  },
  {
    title: 'Ecommerce ex',
    description: 'React, Next.js, reCAPTCHA, Firebase, Vercel, ...',
    url: 'https://next-e-commerce-example.vercel.app/',
    image: porfolioImage3,
  },
  {
    title: 'Forest',
    description: 'Next.js, Firebase, jQuery, Bootstrap, Animate.css, ...',
    url: 'https://forestapp.cc/',
    image: porfolioImage4,
  },
  {
    title: 'LAS',
    description: 'Laravel, jQueryUI,  Yoast SEO, Backbone.js, Bootstrap, MySQL, ...',
    url: 'http://las.pp.ua/',
    image: porfolioImage5,
  },
  {
    title: 'FitSat 6',
    description: 'HTML5, CSS3, Animate.css, Bootstrap, LiteSpeed, jQuery, ...',
    url: 'http://fitsat6.websolutions.pp.ua/',
    image: porfolioImage6,
  },
  {
    title: 'LBS Education',
    description: 'PHP, MySQL, jQuery, Facebook Login, ...',
    url: 'https://www.lbs.edu.ng/',
    image: porfolioImage7,
  },
  {
    title: 'VISIT',
    description: 'E-commerce, Next.js, Payment processors, ...',
    url: 'https://ivisitdoc.com/',
    image: porfolioImage8,
  },
  {
    title: 'Popular',
    description: 'React.js, Bootstrap, Node.js, Mongo DB, ...',
    url: 'https://popl.co/pages/popl-teams',
    image: porfolioImage9,
  },
  {
    title: 'LOOPJEWELRY',
    description: 'Google Map API, Stripe, Chatbot',
    url: 'https://loopjewelry.com/',
    image: porfolioImage10,
  },
  {
    title: 'Divayd',
    description: 'HTML5, CSS3, JavaScript, MySQL, Laravel, ...',
    url: 'http://divayd.com/',
    image: porfolioImage11,
  },
  {
    title: 'Best Find',
    description: 'React, Tailwind CSS, Express, Node.js, Git, ...',
    url: 'https://www.bestfind.com.au/',
    image: porfolioImage12,
  },
  {
    title: 'EDX',
    description: 'React, MySQL, Next.js, AWS, ASP.NET, Tailwind CSS, HubSpot, ...',
    url: 'https://www.edx.org/',
    image: porfolioImage13,
  },
  {
    title: 'FP 2030',
    description: 'React, Next.js, PWA, Vercel, Tailwind CSS, TypeScript, Django, GraphQL, ...',
    url: 'https://www.fp2030.org/',
    image: porfolioImage14,
  },
  {
    title: 'UBAC_STORE',
    description: 'Vue.js, Nuxt.js, Django, Postgre, Heroku, ...',
    url: 'https://ubac-store.com/en/',
    image: porfolioImage15,
  },
  {
    title: 'Shop BMWUSA',
    description: 'Next.js Tailwind CSS, Stripe, Django, ...',
    url: 'https://shop.bmwusa.com/',
    image: porfolioImage16,
  },
  {
    title: 'Casino',
    description: 'Next.js, Payment processors, Tailwind CSS, Web3, ...',
    url: 'https://casino-react.netlify.app/',
    image: porfolioImage17,
  },
  {
    title: 'Ecommerce 1101',
    description: 'React, PWA, Tailwind CSS, Django, Netlify, ...',
    url: 'https://ecommerce1101.netlify.app/',
    image: porfolioImage18,
  },
  {
    title: 'Sub Culture',
    description: 'Three.js, Vercel, ASP.NET, Python, ...',
    url: 'https://subculture.makery.co.jp/',
    image: porfolioImage19,
  },
  {
    title: 'Locoslouis Ville',
    description: 'PHP, MySQL, jQuery, Nginx, ...',
    url: 'https://www.locoslouisville.com/',
    image: porfolioImage20,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2010 -2014',
    location: 'Technological University of Pereira',
    title: 'Bachelor of Science in Computer Science',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2022 - December 2024',
    location: 'Tarro',
    title: 'Senior Full Stack Developer',
    content: (
      <ul className='pl-6'>
        <li style={{listStyleType:"disc"}}>Built modern, SEO-friendly web applications using React and Next.js, leveraging server-side rendering (SSR) and static site generation (SSG).</li>
        <li style={{listStyleType:"disc"}}>Designed and developed scalable back-end architectures using Django and Node.js, adhering to best practices for maintainability and performance.</li>
        <li style={{listStyleType:"disc"}}>Managed data storage and retrieval by designing optimized schemas in SQL databases (MySQL, PostgreSQL) and NoSQL solutions (MongoDB).</li>
        <li style={{listStyleType:"disc"}}>Enhanced team collaboration by participating in code reviews, knowledge sharing, and mentoring team members to drive project success.</li>
        <li style={{listStyleType:"disc"}}>Improved application performance by analyzing and optimizing database queries, reducing API response times, and implementing caching strategies.</li>
        <li style={{listStyleType:"disc"}}>Collaborated closely with product and design teams to implement user-centric features and deliver high-quality results on schedule.</li>
        <li style={{listStyleType:"disc"}}>Maintained and enhanced CI/CD pipelines to ensure smooth deployment processes and minimize downtime during releases.</li>
      </ul>
    ),
  },
  {
    date: 'January 2019 - May 2022',
    location: 'Carlos Cortés Agencia de publicidad digital',
    title: 'Full Stack Developer',
    content: (
      <ul className='pl-6'>
        <li style={{listStyleType:"disc"}}>Engineered end-to-end solutions by combining React for the front end with Django and Node.js for back-end development, ensuring seamless functionality. </li>
        <li style={{listStyleType:"disc"}}>Designed and implemented RESTful APIs and GraphQL endpoints to power complex data-driven applications with real- time capabilities. </li>
        <li style={{listStyleType:"disc"}}>Managed databases using MySQL, PostgreSQL, and MongoDB, optimizing query performance and reducing latency in data retrieval. </li>
        <li style={{listStyleType:"disc"}}>Collaborated with cross-functional teams to gather requirements, design features, and deliver results within project deadlines. </li>
        <li style={{listStyleType:"disc"}}>Conducted thorough performance testing and profiling to identify bottlenecks and enhance application scalability and reliability. </li>
        <li style={{listStyleType:"disc"}}>Integrated third-party services, APIs, and payment gateways to expand application capabilities and meet diverse business needs.</li>
        <li style={{listStyleType:"disc"}}>Automated deployment workflows using Docker and CI/CD pipelines to streamline software delivery and improve release efficiency.</li>
      </ul>
    ),
  },
  {
    date: 'January 2016 - August 2018',
    location: 'Argomedia Tech',
    title: 'MERN Stack Developer',
    content: (
      <ul className='pl-6'>
        <li style={{listStyleType:"disc"}}>Built scalable and high-performing web applications using React, Node.js, Express.js, and MongoDB, ensuring seamless front-end and back-end integration.</li>
        <li style={{listStyleType:"disc"}}>Designed modular and maintainable React components, utilizing Redux for efficient state management across complex applications.</li>
        <li style={{listStyleType:"disc"}}>Developed RESTful APIs with Node.js to facilitate secure and efficient communication between front-end interfaces and back-end servers.</li>
        <li style={{listStyleType:"disc"}}>Optimized MongoDB queries and schema designs to improve database performance and scalability for high-volume applications.</li>
        <li style={{listStyleType:"disc"}}>Conducted thorough debugging and troubleshooting to address client-side and server-side issues, ensuring optimal application functionality. </li>
        <li style={{listStyleType:"disc"}}>Enhanced application performance by implementing advanced techniques such as lazy loading and code splitting in React</li>
      </ul>
    ),
  },
  {
    date: 'November 2014 - December 2015',
    location: 'Ok Web',
    title: 'Front End Developer as Intern',
    content: (
      <ul className='pl-6'>
        <li style={{listStyleType:"disc"}}>Designed and developed responsive web pages using HTML, CSS, and JavaScript to deliver engaging user interfaces aligned with project requirements and timelines.</li>
        <li style={{listStyleType:"disc"}}>Created dynamic and reusable web components using PHP and Laravel to streamline the development process for future projects. </li>
        <li style={{listStyleType:"disc"}}>Collaborated with UI/UX designers to ensure web interfaces adhered to design specifications and user-centric principles. </li>
        <li style={{listStyleType:"disc"}}>Debugged and resolved front-end issues to improve usability, functionality, and cross-browser compatibility for all major browsers. </li>
        <li style={{listStyleType:"disc"}}>Enhanced website performance by optimizing JavaScript and CSS files, reducing page load times and increasing user engagement.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'William Brown',
      text: 'Manuel consistently delivers high-quality, scalable solutions across the stack, demonstrating exceptional technical expertise and attention to detail. Their proactive communication and ability to mentor team members significantly enhance collaboration and overall project outcomes. They are a dependable leader who drives innovation and consistently exceeds expectations, making them an invaluable asset to the team.',
      image: client1,
    },
    {
      name: 'Cindy Evelin',
      text: 'He has been an invaluable partner over the long term, consistently delivering high-quality, scalable solutions that align with our evolving business needs. Their deep technical expertise, proactive communication, and unwavering commitment to excellence have built a strong foundation of trust and reliability. We greatly appreciate their ability to adapt, innovate, and provide ongoing support, making them an integral part of our success.',
      image: client2,
    },
    {
      name: 'Louis Dupont',
      text: 'Manuel is an outstanding team player who consistently delivers on project timelines while maintaining exceptional code quality. Their ability to break down complex tasks, communicate effectively with both technical and non-technical stakeholders, and adapt to evolving requirements has been instrumental in project success. They are a reliable and proactive contributor, ensuring seamless collaboration and driving projects forward efficiently.',
      image: client3,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'manuelrivera0915.dev@gmail.com',
      href: 'mailto:manuelrivera0915.dev@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Pereira, Risaralda, Colombia',
      href: 'https://www.google.ca/maps/place/Pereira, Risaralda, Colombia/@4.8052949,-75.7548716,13z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'manuelrivera0915',
      href: 'https://www.linkedin.com/in/manuelrivera0915',
    },
    {
      type: ContactType.Github,
      text: 'manuelrivera0915',
      href: 'https://github.com/manuelrivera0915',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/manuelrivera0915'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/manuelrivera0915'},
  {label: 'Mail', Icon: EnvelopeIcon, href: 'mailto:manuelrivera0915.dev@gmail.com'},
  {label: 'Phone', Icon: PhoneIcon, href: 'tel:+573017714373'},
];
