function SkillsDisplay({ skill }) {
  return (
    <div className="col-md-auto p-2 g-col-6">
      <i className="fa-solid fa-terminal px-2" style={{ color: "#0dcaf0" }}></i>
      {skill}
    </div>
  );
}

export default SkillsDisplay;
