import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
//import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
//import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  //TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Dominik Heyer',
  description: ``,
  ogImageUrl: ``,
  //twitterCardType: 'summary_large',
  //twitterSite: `@timbakerx`,
  //twitterCreator: `@timbakerx`,
  //twitterDomain: `reactresume.com`,
  //twitterUrl: `https://reactresume.com`,
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
  //Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: 'Hey there, I\'m Dominik Heyer.',
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">dual student</strong>, currently studying <strong className="text-stone-100"> IT and Business</strong> at the 
        <strong className="text-stone-100"> IU Dortmund</strong>, while working
        at <a href="https://addi.de/">Selter</a> where I analyse and restructure production and administration processes,
        and have worked on projects ranging from developing RaspberryPi based hardware solutions for production control,
        to designing an algorithm for batch and container size selection regarding production bottlenecks and storage optimization.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my spare time you can catch me developing the most niche Web Applications like the <a href="https://mhbuildpawcessor.com/">Pawcessor</a>,
        playing <strong className="text-stone-100">Guitar</strong>, or exploring the <strong className="text-stone-100">JavaScript Frontend Framework</strong> of the week.
        And if there's still time, I'll probably prepare the next <strong className="text-stone-100">DnD session</strong> for my wife and friends.
      </p>
    </>
  ),
  actions: [
    /*
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    */
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
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Altena, Germany', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'German', Icon: FlagIcon},
    {label: 'Interests', text: 'Traveling, Learning, Literature, DnD, Guitar', Icon: SparklesIcon},
    {label: 'Study', text: 'IU Dortmund', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Selter GmbH & co. KG', Icon: OfficeBuildingIcon},
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
        name: 'German',
        level: 10,
      },
      {
        name: 'English',
        level: 10,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Vue',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 7,
      },
      {
        name: 'React',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Express',
        level: 5,
      },
      {
        name: 'Document Databases',
        level: 4,
      },
      {
        name: 'Relational Databases',
        level: 3,
      }
    ],
  },
  {
    name: 'Others',
    skills: [
      {
        name: 'Python/Pandas',
        level: 4,
      },
      {
        name: 'Webscraper - Cheerio',
        level: 5,
      },
      {
        name: 'Java / Swing',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Pawcessor',
    description: 'Build optimization tool for Monster Hunter Rise by Capcom.',
    url: 'https://mhbuildpawcessor.com',
    imageUrl: 'https://source.unsplash.com/collection/51517718/',
  },
  {
    title: 'Pawcessor',
    description: 'Build optimization tool for Monster Hunter Rise by Capcom.',
    url: 'https://mhbuildpawcessor.com',
    imageUrl: 'https://source.unsplash.com/collection/51517718/',
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2013',
    location: 'Albrecht Dürer Gymnasium',
    title: 'Higher School Certificate',
    content: <p></p>,
  },
  {
    date: 'March 2003',
    location: 'Ruhr-Universität Bochum',
    title: 'The Curious Years',
    content: <p>After going abroad I came back with specific ideas about my plans for the future, but life, as it does, threw me for a loop once or twice. <br />
      In this period I took classes in Physics, Chemistry and Biology, deepening my love for the scientific thought process, but ultimately failing to find my calling.
      First contact to the world of software engineering was made here, while writing first Python Scripts for data evaluation.
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2020 - Present',
    location: 'International University - Selter GmbH & co. KG',
    title: 'Business & Information Technology - System Administrator',
    content: (
      <p>
        From a student job at Selter, where I was supposed to support production management, but , I got offered the opportunity to dually study Business & Information Technology
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
/*
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};
*/

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact',
  description: 'You can reach me here. Normally I`ll get back to you in 1-2 days.',
  items: [
    {
      type: ContactType.Email,
      text: 'pawcessor@gmail.com',
      href: 'mailto:pawcessor@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Altena, Germany',
      href: 'https://goo.gl/maps/PATKDx912uT6vwko9',
    },
    /*
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    */
    {
      type: ContactType.Github,
      text: 'Gepolter',
      href: 'https://github.com/Gepolter',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/18409013/dominik-heyer'},
  /*
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
  */
];
