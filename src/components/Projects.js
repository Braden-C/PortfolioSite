import useInfoContext from "../hooks/use-info-context";
import ProjectsDisplay from "./ProjectsDisplay";

function Projects() {
  const { Projects } = useInfoContext();

  const renderedProjects = Projects.map((project) => {
    return (
      <ProjectsDisplay
        key={project.id}
        title={project.title}
        desc={project.desc}
        src={project.src}
      />
    );
  });
  return <div>{renderedProjects}</div>;
}

export default Projects;