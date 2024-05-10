import useInfoContext from "../hooks/use-info-context";
import "./Contact.css";

function Contact() {
  const { PersonalInfo } = useInfoContext();
  return (
    <div className="contact-me-container text-white fs-5" id="Contact">
      <div className="container-md py-3 text-center">
        <div className="Header">
          <div className="horizontal-Header">
            <span>Contact Me</span>
            <div className="horizontal-rule"></div>
          </div>
        </div>
        <p className="contact">
          I'm currently open to opportunities, please feel free to reach out via
          email or LinkedIn. If you have any questions, please don't hesitate to
          ask!
        </p>
        <a
          className="btn btn-outline-light bg-opacity-25 btn-lg px-6"
          id="Contact-Button"
          role="button"
          href="mailto:bradencchapman@yahoo.com"
        >
          Contact Me
        </a>
      </div>
      <div className="information-container">
        <ul className="list-group list-group-flush text-center">
          <li className="list-group-item border-0 text-white fs-5 py-2 bg-transparent">
            <a href="mailto:bradencchapman@yahoo.com" className="icon-link">
              <i className="far fa-envelope px-2" aria-hidden="true"></i>
            </a>
            <span>{PersonalInfo.email}</span>
          </li>
          <li className="list-group-item text-white fs-5 border-0 py-2 bg-transparent">
            <a
              href="https://www.linkedin.com/in/braden-chapman-b25a05234?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Bvm36WcETd%2BVvXYIdiZdwQ%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <i className="fab fa-linkedin-in px-2" aria-hidden="true"></i>
            </a>
            <span>{PersonalInfo.linkedin}</span>
          </li>
          <li className="list-group-item text-white fs-5 border-0 py-2 bg-transparent">
            <a
              href="https://github.com/Braden-C"
              className="icon-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github px-2" aria-hidden="true"></i>
            </a>
            <span>/Braden-C</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
