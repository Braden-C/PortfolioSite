import useInfoContext from "../hooks/use-info-context";
import SkillsDisplay from "./SkillsDisplay";

function Skills() {
  const { Skills } = useInfoContext();

  const renderedSkills = Skills.map((skill, index) => {
    return <SkillsDisplay key={index} skill={skill} />;
  });
  return <div className="book-list">{renderedSkills}</div>;
}

export default Skills;
