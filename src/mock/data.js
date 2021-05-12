import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Maxime',
  subtitle: "I'm a web developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'maxbeach.jpg',
  paragraphOne:
    'After my master degree at Novancia Paris Business School, I had the opportunity to move abroad, in Singapore. During those 5 years, I had different experiences, in two companies: Art of Click, a young Start- up, and Mindshare, an internationnal Agency from the WPP holding.',
  paragraphTwo:
    'I joined Le Wagon in febuary 2020. I was always interessed in coding and this was the perfect time and opportunity to do a career path switch.',
  paragraphThree:
    'After le Wagon, I move back to France, and keep learning by following web course or personal project.',
  resume: 'https://www.resumemaker.online/esgaru.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to know more ? Awesome !',
  btn: 'maxime.trinquet@gmail.com',
  email: 'maxime.trinquet@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/maxime-trinquet-a79b645b',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MaxTrinquet',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
