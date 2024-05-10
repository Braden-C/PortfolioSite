import { createContext } from "react";

const InfoContext = createContext();

function Provider({ children }) {
  const Projects = [
    {
      id: 1,
      title: "Favorite Books",
      img: "./booksproject3.jpg",
      desc: "App developed to track a users favorite books. Uses default and custom react hooks as well as a locally hosted API for persistance",
      src: "https://github.com/Braden-C/Favorite-Books",
    },
    {
      id: 2,
      title: "Translation App",
      img: "./translationproject.webp",
      desc: "Translation app using Google Translate API. developed entirely in React.js",
      src: "https://github.com/Braden-C/Translation-App",
    },
    {
      id: 3,
      title: "Score Keeper",
      img: "./jsproject.webp",
      desc: "Score Keeper app for tabletop games. Developed entirely in vanilla JavaScript.",
      src: "https://github.com/Braden-C/ScoreKeeper",
    },
  ];

  const PersonalInfo = {
    firstName: "Braden",
    lastName: "Chapman",
    email: "bradencchapman@yahoo.com",
    resume: "resume.pdf",
    linkedin: "/braden-chapman-b25a05234",
    github: "/Braden-C",
    Portrait: "./portrait.WebP",
    intro:
      "I am a Colorado native Front-End engineer that specializes in React.js",
    bio: "Hello, I am a 27 year old Front-End developer based in central Colorado. I became interested in software/Web development at a very young age, My passion for technology and gaming has only grown over the years and lead me to pursue a career in tech.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Git", "Npm"],
  };

  const Skills = PersonalInfo.skills;

  const FullName = `${PersonalInfo.firstName} ${PersonalInfo.lastName}`;

  const value = {
    Projects,
    PersonalInfo,
    Skills,
    FullName,
  };
  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
}

export { Provider };
export default InfoContext;
