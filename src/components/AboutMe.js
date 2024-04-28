import useInfoContext from "../hooks/use-info-context";
import Skills from "./Skills";

function AboutMe() {
  const { PersonalInfo } = useInfoContext();

  return (
    <div className="about-me-container">
      <div className="container text-center">
        <div className="row">
          <div className="container-md mw-50 col">{PersonalInfo.bio}</div>
          <div className="img-container col">
            <img
              className="img-fluid"
              src={PersonalInfo.Portrait}
              alt="portrait"
            ></img>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default AboutMe;
