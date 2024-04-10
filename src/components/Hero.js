import useInfoContext from "../hooks/use-info-context";

function Hero() {
  const { fullName } = useInfoContext();

  return <div>{fullName}</div>;
}

export default Hero;
