import useInfoContext from "../hooks/use-info-context";

function AboutMe() {
  const { PersonalInfo } = useInfoContext();

  return <div>{PersonalInfo.bio}</div>;
}

export default AboutMe;
