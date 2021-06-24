/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Ivan",
  logo_name: "ivan.m()",
  nickname: "Ivan",
  full_name: "Ivan Mak",
  subTitle: "Full Stack Developer, Robotics Enthusiast 🔥. Always learning.",
  resumeLink: "resume.pdf",
  mail: "mailto:ivanjbmak@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/ivan-jb-mak",
  linkedin: "https://www.linkedin.com/in/ivanjbmak/",
  gmail: "ivanjbmak@gmail.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
        "⚡ Building responsive website front end using React and TypeScript",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Designing backend API's in REST for SQL and noSQL databases for PostgreSQL and MongoDB",
        "⚡ Managing application and component level state with React/Redux",
        "⚡ Creating beautiful and interactive UI elements and animations with Sass and Bootstrap",
        "⚡ Integration of third party services for deployment such as Heroku and Netlify",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos-typescript-icon",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos-javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E434AA",
          },
        },
        {
          skillName: "Apollo Client",
          fontAwesomeClassname: "simple-icons:apollographql",
          style: {
            color: "#311C87",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos-postgresql",
          style: {
            color: "#4169E1",
          },
        },
        {
          skillName: "Prisma",
          fontAwesomeClassname: "logos-prisma",
          style: {
            color: "#424159",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
          style: {
            color: "#E34F26",
            backgroundcolor: "#424159",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "logos-sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos-flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#003B57",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos-c-plusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "vscode-icons:file-type-npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Webpack",
          fontAwesomeClassname: "simple-icons:webpack",
          style: {
            color: "#8DD6F9",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#00C7B7",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "The Odin Project",
      subtitle: "Web Development Bootcamp – Full Stack JavaScript",
      logo_path: "odin.JPG",
      alt_name: "TheOdinProject",
      duration: "February 2021",
      descriptions: [],
      website_link: "http://www.ssgc.cteguj.in/",
    },
    {
      title: "Ontario Tech University",
      subtitle: "Bachelor of Engineering (Honours), Mechatronics Engineering",
      logo_path: "uoit.JPG",
      alt_name: "UOIT",
      duration: "April 2020",
      descriptions: [],
      website_link: "http://www.ssgc.cteguj.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter Internation Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Flutter Internation Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    "I've completed two internships in my undergraduate and have worked on many software projects on my own. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Junior Manufacturing Engineer",
          company: "Dynaplas Ltd.",
          company_url: "",
          logo_path: "dynaplas.jpg",
          duration: "Sep 2018 - Apr 2019",
          location: "Scarborough, ON",
          description:
            "Automated quality inspection of automotive parts by programming a collaborative 6-axis robot arm, and designed guarding layouts and fixtures using SOLIDWORKS to ensure safety and efficiency on the plant floor.",
          color: "#0071C5",
        },
        {
          title: "Junior Project Analyst",
          company: "Brockport Home Systems",
          company_url: "",
          logo_path: "brockport.jpg",
          duration: "May 2016 - Aug 2016",
          location: "Etobicoke, ON",
          description:
            "Re-designed and fabricated pneumatic lifting table using Siemens NX and welding to optimize workspace, and tested small scale pneumatic and hydraulic actuators using sensors to verify functionality for future projects",
          color: "#90ee90",
        },
        {
          title: "Manager",
          company: "Chatime Willowdale",
          company_url: "",
          logo_path: "chatime.JPG",
          duration: "Jan 2015 - Apr 2016",
          location: "North York, ON",
          description:
            "Supervised all work and tasks done by employees to ensure quality of service and products, and trained 9 new employees on all material to follow policy procedure.",
          color: "#7526bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is with MERN stack applications. And i'm currently working on a twitter-clone using graphQL instead of REST API's. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ivan3.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      github: true,
      name: "DevBook - Social Media App for Developer",
      websiteUrl: "https://developerbook.me",
      githubUrl: "https://github.com/ivan-jb-mak/DevBook",
      description:
        "A social media web application for developers to create profiles/portfolios to share online, and share posts.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:folder-type-mongodb",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },

        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
    },
    {
      id: "1",
      github: true,
      name: "Exercise Tracking App",
      websiteUrl: "https://exercise-tracker-react.netlify.app/",
      githubUrl: "https://github.com/ivan-jb-mak/exercise-tracker-app",
      description:
        "An exercise tracking web application to keep track of the time, date, and info for all of your workouts.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:folder-type-mongodb",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "SASS",
          iconifyClass: "logos-sass",
        },
        {
          name: "Netlify",
          iconifyClass: "vscode-icons:file-type-netlify",
        },
      ],
    },
    {
      id: "2",
      github: false,
      name: "Virtual Stock Trading App",
      websiteUrl: "",
      githubUrl: "",
      description:
        "A virtual stock trading platform for users to buy and sell stocks with virtual cash, and see real-time stock market quotes.",
      languages: [
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "SQLite",
          iconifyClass: "vscode-icons:file-type-sqlite",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "SASS",
          iconifyClass: "logos-sass",
        },
        {
          name: "Jinja",
          iconifyClass: "vscode-icons:file-type-jinja",
        },
      ],
    },
    {
      id: "3",
      github: false,
      name: "Autonomous Object Recognition Robot",
      websiteUrl: "",
      githubUrl: "",
      description:
        "A large scale self balancing robot with autonomous navigation and object recognition",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "C++",
          iconifyClass: "logos-c-plusplus",
        },
        {
          name: "Robot Operating System",
          iconifyClass: "simple-icons:ros",
        },
        {
          name: "TensorFlow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Ubuntu Linux",
          iconifyClass: "logos-ubuntu",
        },
        {
          name: "RaspberryPi",
          iconifyClass: "simple-icons:raspberrypi",
        },

        {
          name: "Arduino",
          iconifyClass: "logos-arduino",
        },
      ],
    },
    {
      id: "4",
      github: true,
      name: "React Portfolio",
      websiteUrl: "https://ivanjbmak.dev",
      githubUrl: "https://github.com/ivan-jb-mak/ivans-portfolio",
      description:
        "A social media web application for developers to create profiles/portfolios to share online, and share posts.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },

        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "GraphQL",
          iconifyClass: "logos-graphql",
        },
        {
          name: "Styled-Components",
          iconifyClass: "vscode-icons:file-type-styled",
        },
      ],
    },
    {
      id: "5",
      github: false,
      name: "Weather App",
      websiteUrl: "https://github.com/ivan-jb-mak/Fire-Water-Grass",
      githubUrl: "https://github.com/ivan-jb-mak/Fire-Water-Grass",
      description:
        "A weather web application to check the temperature and weather statistics in real-time. ",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },

        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Netlify",
          iconifyClass: "vscode-icons:file-type-netlify",
        },
      ],
    },
    {
      id: "6",
      github: false,
      name: "Rock-Paper-Scissors Game App",
      websiteUrl: "https://github.com/ivan-jb-mak/weatherApp",
      githubUrl: "https://github.com/ivan-jb-mak/weatherApp",
      description:
        "A rock-paper-scissors game applicaion, but instead of rock-paper-scissors, it's fire-water-grass from Pokemon!",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },

        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Netlify",
          iconifyClass: "vscode-icons:file-type-netlify",
        },
      ],
    },
    {
      id: "7",
      github: false,
      name: "Twitter-Clone (In-Progress)",
      websiteUrl: "https://github.com/ivan-jb-mak/twitter-clone",
      githubUrl: "https://github.com/ivan-jb-mak/twitter-clone",
      description:
        "A twitter-clone made with Typescript, React, GraphQL, Apollo-Client and PostgreSQL.",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript-icon",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "GraphQL",
          iconifyClass: "logos-graphql",
        },
        {
          name: "PostgreSQL",
          iconifyClass: "logos-postgresql",
        },
        {
          name: "Prisma",
          iconifyClass: "vscode-icons:file-type-light-prisma",
        },
        {
          name: "Apollo-Client",
          iconifyClass: "logos-apollostack",
        },
        {
          name: "Node",
          iconifyClass: "logos-nodejs-icon",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
