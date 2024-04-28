import useInfoContext from "../hooks/use-info-context";
import Skills from "./Skills";

function AboutMe() {
  const { PersonalInfo } = useInfoContext();

  return (
    <div>
      <div>{PersonalInfo.bio}</div>
      <Skills />
    </div>
  );
}

export default AboutMe;
