import useInfoContext from "../hooks/use-info-context";

function NavBar() {
  const { PersonalInfo } = useInfoContext();

  return (
    <nav
      className="navbar px-4 position-absolute top-0 end-0 navbar-expand-lg navbar-dark bg-transparent"
      id="Nav-Container"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/#about">
                About-Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact">
                Contact
              </a>
            </li>
            <a
              className="btn btn-outline-info"
              href={PersonalInfo.resume}
              download="resume.pdf"
              role="button"
            >
              Resume
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
