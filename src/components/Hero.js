import useInfoContext from "../hooks/use-info-context";

function Hero() {
  const { PersonalInfo } = useInfoContext();

  return <div>{PersonalInfo.email}</div>;
}

export default Hero;
