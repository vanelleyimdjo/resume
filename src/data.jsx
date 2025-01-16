import { nanoid } from "nanoid";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Tailwindcss",
    icon: "/icons/tailwind-css.png",
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "typescript.svg",
    icon: "/icons/typescript-icon.png",
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: "/icons/React.png",
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "menu.png",
    url: "https://menu-restaurant-projects.netlify.app/",
    github: "https://github.com/vanelleyimdjo",
    title: "Menu restaurant",
    text: "Creation of a showcase site for a restaurant highlighting its menu, its specialties, and its unique atmosphere. The site is fully responsive, offering smooth navigation on all devices, and incorporates a dynamic system to update dishes and offers in real time. This project combines attractive design and optimized features to improve the user experience.",
  },
  {
    id: nanoid(),
    img: "color.png",
    url: "https://generate-color-project.netlify.app/",
    github: "https://github.com/vanelleyimdjo",
    title: "Color generator",
    text: "Development of an interactive color generator allowing users to create, adjust and copy custom palettes. The intuitive and responsive interface ensures a smooth experience on all devices, ideal for designers and developers. This project highlights the use of JavaScript for dynamic functionality and real-time color manipulation.",
  },
  {
    id: nanoid(),
    img: "/auth.png",
    url: "#",
    github: "https://github.com/vanelleyimdjo",
    title: "Authentication ",
    text: "Design of a secure authentication and connection site with user management. The system integrates account creation, password recovery and email validation features for enhanced security. This project uses modern technologies like Ejs, Node.js, PgAdmin, or JWT to ensure optimal performance and user data protection.",
  },
  {
    id: nanoid(),
    img: "/dataScienceQuiz.png",
    url: "https://quiz-datascience.netlify.app/",
    github: "https://github.com/vanelleyimdjo/Quiz",
    title: "Quiz Data Science",
    text: "Creation of an interactive quiz of 10 questions on data science, designed to test and reinforce users' knowledge. The project integrates dynamic response management logic, real-time display of scores, and a responsive interface for smooth use on all devices. Built with typescript, react this quiz combines pedagogy and interactivity in an engaging experience.",
  },
  {
    id: nanoid(),
    img: "animalApi.png",
    url: "https://unsplashs-img.netlify.app/",
    github: "https://github.com/vanelleyimdjo",
    title: "Unsplash Images",
    text: "Created a website that allows users to browse and search images from the Unsplash API. The project includes a secure connection feature to save favorite images in a personalized space. Designed with a modern interface and technologies like React, Tailwind CSS, the site offers smooth navigation and efficient management of user data.",
  },
  {
    id: nanoid(),
    img: "exploration.png",
    url: "https://6775d3cb8b0d2361a63b1dd7--backroadsproject-site.netlify.app/",
    github: "https://github.com/vanelleyimdjo",
    title: "Backroads",
    text: "Development of a website for Backroads, a platform highlighting unique travel destinations and tourist circuits. The site offers an attractive and interactive user interface, integrating features such as destination search, itinerary presentation and customer reviews. Made with modern technologies such as React and REST API, this project offers an immersive and responsive experience suitable for all devices.",
  },
];
