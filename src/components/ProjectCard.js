import Link from "next/link";
import Image from 'next/image';

const ProjectCard = (props) => {
  return (
    <>
      <div className="project-card Projects__item">
        <Link className="Projects__item__image" target="_blank" href={props.projectLink}>
        <Image src={props.projectImage} alt={props.projectName} width="400" height="400" />
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
