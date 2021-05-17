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
    title: 'This website ! ',
    info:
      'A classic Portfolio, inspired by Jacob Martinez, free to use on on "Start with Gatsby" and Served on AWS ',
    info2:
      "I've done some developemnts on it : dowloading a PDF, minor change on the UI, adding the different project and one part, 'Professional project' ",
    url: '',
    cta: 'Here ! ',
    repo: 'http://github.com/MaxTrinquet/portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Les recettes de nos mamies',
    info:
      'Recipe website. Idea is to share with your relative, or close friend the recipe that you cook and found delicious on the web.',
    info2: '',
    url: '',
    cta: 'Coming Soon',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Pomodoro App ! ',
    info: "I didn't find what I was looking for on the Appstore... So I decide to build it.",
    info2: '',
    url: '',
    cta: 'Coming Soon',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Reading List ',
    info: 'Share your reading easily, track and reminder old good books. ',
    info2: '',
    url: '',
    cta: 'Coming Soon',
    repo: '', // if no repo, the button will not show up
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
