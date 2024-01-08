import Link from "next/link";

const ProjectCard = (props) => {
  return (
    <>
    {/* <div className="Projects__item">
          <Link href="https://halfaheart.store" target="_blank" >
            <img src="https://i.imgur.com/wUvxEM7.png" alt="halfaheart" />    
          </Link>
          <div className="Projects__item__content">
              <div className="Projects__item__heading">
                  halfaheart Network
              </div>
              <div className="Projects__item__description">
                  Full Custom Website
              </div>
          </div>
      </div> */}
      <div className="project-card Projects__item">
        <Link className="Projects__item__image" target="_blank" href={props.projectLink}>
        <img src={props.projectImage} alt={props.projectName} />
        <div className="Projects__item__content">
          <div className="Projects__item__heading">
            {props.projectName}
          </div>
          <div className="Projects__item__description">
            {props.projectDescription}
          </div>
          <p className="project-text">{props.projectAbout}</p>
        </div>
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
