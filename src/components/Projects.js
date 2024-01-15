
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder';

import ProjectCard from "./ProjectCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  useEffect(() => {
    const cardContainers = document.querySelectorAll(".project-card");

    cardContainers.forEach((container, index) => {
      gsap.to({}, 0.6, {});
      gsap.fromTo(
        container,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          delay: index * 0.01,
          ease: "power1.in",
          scrollTrigger: {
            trigger: container,
            start: "top 60%",
            end: "center 100%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
        <section className="section section--Projects" id="s_Projects">
      <div className="section__container">
        <div className="section__content">
          <div className="section__heading">
            <FontAwesomeIcon className="fa-solid fa-folder s_fa" icon={faFolder} />
            <h2>Projects</h2>
          </div>
          <div className="Projects">
            <div className="project-container">
              <ProjectCard
                projectName="Halfaheart Network"
                projectDescription="Full Custom Website"
                projectImage="https://i.imgur.com/wUvxEM7.png"
                projectLink="/comingsoon"
                projectAbout="This is my minecraft website and blog website built running on next.js and react.js and using Vercel."
              />
              <ProjectCard
                projectName="Yanime"
                projectDescription="Full Custom Website"
                projectImage="https://cdn.discordapp.com/attachments/767170983369900043/1133841676461412472/image.png"
                projectLink="https://yanime.vercel.app"
                projectAbout="Simplified JavaScript CRUD to-do manager with advanced features for effortless task management. Get things done with ease!"
              />

              <ProjectCard
                projectName="Architecture Portfolio"
                projectDescription="Full Custom Website"
                projectImage="https://cdn.discordapp.com/attachments/1140689143421218980/1151133548716245057/image.png"
                projectLink="https://hasanemad.vercel.app"
                projectAbout="This is a portfolio website built using react.js and Vercel, For architecture engineer called Hasan Emad Ishaq."
              />
              <ProjectCard
                projectName="ComingSoon"
                projectDescription="Full Custom Website"
                projectImage="https://cdn.discordapp.com/attachments/767170983369900043/1189554055350071326/Screenshot_2023-12-27_160043.png"
                projectLink="/comingsoon"
                projectAbout="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ut sint, aut facere culpa quae, earum, voluptates fugiat blanditiis molestias"
              />

            </div>
          </div>
          <div className="section__buttons">
          <Link href="/projects" className="button button--primary button--large">See More</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Projects;
