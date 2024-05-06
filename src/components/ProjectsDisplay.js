function ProjectsDisplay({ title, img, desc, src }) {
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={src} className="btn btn-primary">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDisplay;
