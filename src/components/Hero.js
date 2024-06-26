import useInfoContext from "../hooks/use-info-context";
import "./Hero.css";

function Hero() {
  const { PersonalInfo, FullName } = useInfoContext();

  return (
    <div className="hero">
      <div className="hero-container py-5">
        <div className="text-secondary px-4 py-5 text-center" id="Home">
          <div className="py-5">
            <h1 className="display-5 fw-bold text-white">{FullName}</h1>
            <div className="col-lg-6 mx-auto">
              <p className="fs-3 mb-5 text-white-50">{PersonalInfo.intro}</p>
              <div className="d-grid gap-2 d-sm-flex pb-5 justify-content-sm-center">
                <div className="col col-lg-3">
                  <a
                    className="btn btn-outline-light bg-opacity-25 btn-lg text-nowrap"
                    role="button"
                    href="mailto:bradencchapman@yahoo.com"
                  >
                    Contact Me
                  </a>
                </div>
                <div className="col col-lg-3">
                  <a
                    className="btn btn-outline-info bg-opacity-25 btn-lg"
                    href={PersonalInfo.resume}
                    download="resume.pdf"
                    role="button"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
