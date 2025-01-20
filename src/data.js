const projectsList = [
  {
    id: "dark",
    title: "Item Manager - Mobile Design",
    imageUrl: "./assets/images/dark-souls-app-logo.png",
    gitHub: false,
    link: false,
    page: "/project/dark/",
    projectImages: [
      "./assets/images/dark-souls-app-logo.png",
      "./assets/images/dark-souls-app.png",
    ],
    description:
      "Mobile design of my first app in development with react native, an item manager for the game Dark Souls made by FromSoftware.",
  },
  {
    id: "kapple",
    title: "Kapple - Mobile Design",
    imageUrl: "./assets/images/kapplelogo.png",
    gitHub: false,
    link: false,
    page: "/project/kapple/",
    projectImages: [
      "./assets/images/kapplelogo.png",
      "./assets/images/kapple.png",
    ],
    description:
      "Mobile design of an app to read and discover new books and follow new authors created using Figma",
  },
  {
    id: "cine-now",
    title: "Cine Now - Mobile design",
    imageUrl: "./assets/images/cinenow.png",
    gitHub: false,
    link: "https://www.figma.com/community/file/1341511049313764049/cine-now-app",
    page: "/project/cine-now/",
    projectImages: [
      "./assets/images/cinenow.png",
      "./assets/images/cinenow2.png",
      "./assets/images/cinenow3.png",
      "./assets/images/cinenow4.png",
    ],
    description:
      "Mobile design for an app to buy tickets and get movies information created using Figma",
  },
  {
    id: "rent-a-car",
    title: "Rent a car",
    imageUrl: "./assets/images/rent-a-car.png",
    gitHub: "https://github.com/MayconPCampos/Rent-a-car",
    link: "https://rent-a-car-five.vercel.app/",
    page: "/project/rent-a-car/",
    projectImages: [
      "./assets/images/rent-a-car.png",
      "./assets/images/rent-a-car2.png",
    ],
    description: "Responsive template of a rent car site created with React.",
  },
  {
    id: "templates",
    title: "Responsive templates",
    imageUrl: "./assets/images/template1.jpg",
    gitHub: "https://github.com/MayconPCampos/Template-responsivo-photograph",
    link: "https://mayconpcampos.github.io/Template-responsivo-photograph/",
    page: "/project/templates/",
    projectImages: [
      "./assets/images/template1.jpg",
      "./assets/images/template2.jpg",
    ],
    description: "Responsive templates created with HTML, CSS, and Javascript.",
  },
  // {
  //   id: "charts-and-sales",
  //   title: "Charts & Sales",
  //   imageUrl: "./assets/images/chartsales.jpg",
  //   gitHub: "https://github.com/MayconPCampos/Django-Sales-Charts-RESTFul-API",
  //   link: false,
  //   page: "/project/charts-and-sales/",
  //   projectImages: ["./assets/images/chartsales.jpg"],
  //   description:
  //     "A RESTful API developed with Django Rest Framework, it receives data in JSON format and generates a dashboard using Chart JS to visualize the received data in 3 types of charts.",
  // },
  {
    id: "reactor",
    title: "Reactor",
    imageUrl: "./assets/images/reactor.jpg",
    gitHub: "https://github.com/MayconPCampos/Flask-Website",
    link: false,
    page: "/project/reactor/",
    projectImages: [
      "./assets/images/reactor.jpg",
      "./assets/images/reactor1.jpg",
      "./assets/images/reactor2.jpg",
      "./assets/images/reactor3.jpg",
    ],
    description:
      "Website for news and statistics of electronic games, with an administrator area for content updates, authentication, and user creation for submitting title data and search functionality.",
    tech: ["HTML", "CSS", "Python", "Flask", "MySQL", "Bootstrap"],
  },
  // {
  //   id: "info-invest",
  //   title: "Info invest",
  //   imageUrl: "./assets/images/infoinvest.jpg",
  //   gitHub: "https://github.com/MayconPCampos/Flask-dashboard",
  //   link: false,
  //   page: "/project/info-invest/",
  //   projectImages: ["./assets/images/infoinvest.jpg"],
  //   description:
  //     "Dashboard with stock chart that displays the values of the last seven days of a stock and calculates the value and percentage of variation, typically used for evaluating the performance of a stock. It also shows company information and recent related news obtained through the News API.",
  // },
];

export const skills = [
  {
    title: "React native",
    progress: 75,
  },
  {
    title: "React",
    progress: 75,
  },
  {
    title: "Javascript",
    progress: 75,
  },
  {
    title: "HTML",
    progress: 95,
  },
  {
    title: "CSS",
    progress: 90,
  },
  {
    title: "Bootstrap",
    progress: 70,
  },
  {
    title: "Figma",
    progress: 80,
  },
  {
    title: "Python",
    progress: 80,
  },
  {
    title: "Flask",
    progress: 80,
  },
  {
    title: "MySQL",
    progress: 60,
  },
];

export const softSkills = [
  {
    label: "Criativity",
    degrees: 324,
    percent: 90,
  },
  {
    label: "Learnability",
    degrees: 316.8,
    percent: 88,
  },
  {
    label: "Critical thinking",
    degrees: 306,
    percent: 85,
  },
  {
    label: "Organization",
    degrees: 342,
    percent: 95,
  },
];

export default projectsList;
