import { createContext } from "react";

const InfoContext = createContext();

function Provider({ children }) {
  const Projects = [
    {
      id: 1,
      title: "Favorite Books",
      desc: "App developed to track a users favorite books. Uses default and custom react hooks",
      src: "https://github.com/Braden-C/Favorite-Books",
    },
    {
      id: 2,
      title: "Translation App",
      desc: "Translation app using Google Translate API. developed entirely in React.js",
      src: "https://github.com/Braden-C/Translation-App",
    },
    {
      id: 3,
      title: "Score Keeper",
      desc: "Score Keeper app for tabletop games. Developed entirely in vanilla JavaScript.",
      src: "https://github.com/Braden-C/ScoreKeeper",
    },
  ];

  const PersonalInfo = {
    firstName: "Braden",
    lastName: "Chapman",
    email: "bradencchapman@yahoo.com",
    linkedin: "/braden-chapman-b25a05234",
    bio: "Hello, I am a 27 year old Front-End developer based in central Colorado. I became interested in software/Web development at a very young age, My passion for technology and gaming has only grown over the years and lead me to pursue a career in tech.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Git"],
  };

  const Skills = PersonalInfo.skills;

  const fullName = `${PersonalInfo.firstName} ${PersonalInfo.lastName}`;

  const value = {
    Projects,
    PersonalInfo,
    Skills,
    fullName,
  };
  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
}

export { Provider };
export default InfoContext;
