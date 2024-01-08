
const ProjectCard = (props) => {
  const skillPerClasses = `skill-per ${props.PercentClass}`;
  return (
    <>
    <li className="card-s">
      <div className="skills__item">
        {props.skillsIcons}
        <div className="skills__item__box">
          <div className="skill-box">
            <span className="title">{props.skillsName}</span>
            <div className="skill-bar">
              <span className={skillPerClasses}>
                <span className="tooltip-s">{props.skillsPercent}%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      </li>
    </>
  );
};


export default ProjectCard;
