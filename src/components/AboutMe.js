import useInfoContext from "../hooks/use-info-context";
import Skills from "./Skills";
import "./AboutMe.css";

function AboutMe() {
  const { PersonalInfo } = useInfoContext();

  return (
    <div className="about-me-container" id="about">
      <div className="container-md">
        <div className="row align-items-center">
          <div className="container-md text-white text-center fs-5 mw-50 col">
            <h2 className="text-center text-white py-3">About</h2>
            <div className="bio pb-5">{PersonalInfo.bio}</div>
            <Skills />
          </div>
          <div className="img-container d-flex justify-content-center col">
            <img
              className="img-fluid w-50 rounded-5"
              src={PersonalInfo.Portrait}
              alt="portrait"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
