import useInfoContext from "../hooks/use-info-context";
import ProjectsDisplay from "./ProjectsDisplay";
import "./Projects.css";

function Projects() {
  const { Projects } = useInfoContext();

  const renderedProjects = Projects.map((project) => {
    return (
      <ProjectsDisplay
        key={project.id}
        title={project.title}
        img={project.img}
        desc={project.desc}
        src={project.src}
      />
    );
  });
  return (
    <div className="projects-container overflow-hidden">
      <div className="row py-5">{renderedProjects}</div>
    </div>
  );
}

export default Projects;
