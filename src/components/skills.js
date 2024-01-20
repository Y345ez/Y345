import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons/faNodeJs';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs';

import SkillsCard from "./SkillsCard";

const ReactIcon = (
  <div className="skills__item__icon__react">
    <FontAwesomeIcon className="fa-brands fa-react" icon={faReact} />
  </div>
);

const JavascriptIcon = (
  <div className="skills__item__icon__js">
    <i className="devicon-javascript-plain"></i>
  </div>
);

const HtmlIcon = (
  <div className="skills__item__icon__html">
    <FontAwesomeIcon className="fa-brands fa-html5" icon={faHtml5} />
  </div>
);

const CssIcon = (
  <div className="skills__item__icon__css">
    <FontAwesomeIcon className="fa-brands fa-css3-alt" icon={faCss3Alt} />
  </div>
);

const DiscordjsIcon = (
  <div className="skills__item__icon__discordjs">
    <i className="devicon-discordjs-plain"></i>
  </div>
);

const NodejsIcon = (
  <div className="skills__item__icon__node">
    <FontAwesomeIcon className="fa-brands fa-node-js" icon={faNodeJs} />
  </div>
);

const MongoDBIcon = (
  <div className="skills__item__icon__mongodb">
    <i className="bx bxl-mongodb"></i>
  </div>
);

const TypeScriptIcon = (
  <div className="skills__item__icon__typescript">
    <i className="devicon-typescript-plain"></i>
  </div>
);

const Skills = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const Slider = document.querySelector(".Slider");
    const carousel = document.querySelector(".carousel-skills");
    const firstCardWidth = carousel.querySelector(".card-s").offsetWidth;
    const arrowBtns = document.querySelectorAll(".Slider .i");
    const carouselChildrens = [...carousel.children];

    let isDragging = false,
      isAutoPlay = true,
      startX,
      startScrollLeft,
      timeoutId;

    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insert copies of the last few cards to the beginning of the carousel for infinite scrolling
    carouselChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    // Insert copies of the first few cards to the end of the carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Scroll the carousel to the appropriate position to hide the first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
      // If the carousel is at the beginning, scroll to the end
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      // If the carousel is at the end, scroll to the beginning
      else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }

      // Clear existing timeout & start autoplay if the mouse is not hovering over the carousel
      clearTimeout(timeoutId);
      if (!Slider.matches(":hover")) autoPlay();
    };

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return; // Return if the window is smaller than 800 or isAutoPlay is false
      // Autoplay the carousel after every 2500 ms
      timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
    };
    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    Slider.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    Slider.addEventListener("mouseleave", autoPlay);

    return () => {
      arrowBtns.forEach((btn) => {
        btn.removeEventListener("click", () => {
          carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        });
      });

      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("scroll", infiniteScroll);
      Slider.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      Slider.removeEventListener("mouseleave", autoPlay);
    };
  }, []);

  return (
    <section className="section section--skills" id="s_skills">
      <div className="section__container">
        <div className="section__content">
          <div className="section__heading">
            <FontAwesomeIcon className="fa-solid fa-code s_fa" icon={faCode} />
            <h2>skills</h2>
          </div>
          <div className="Slider" ref={carouselRef}>
            <i id="left" className='bx bx-chevron-left i'></i>
            {/* <FontAwesomeIcon id="left" className="fa-solid fa-angle-left i" icon={faAngleLeft} /> */}
            <ul className="carousel-skills">
                            
                  <SkillsCard
                    skillsIcons={TypeScriptIcon}
                    skillsName="TypeScript"
                    skillsPercent={90}
                    PercentClass="typescript"
                  />
                  <SkillsCard
                    skillsIcons={JavascriptIcon}
                    skillsName="JavaScript"
                    skillsPercent={100}
                    PercentClass="javascript"
                  />
                  <SkillsCard
                    skillsIcons={ReactIcon}
                    skillsName="React"
                    skillsPercent={80}
                    PercentClass="react"
                  />
                  <SkillsCard
                    skillsIcons={DiscordjsIcon}
                    skillsName="DiscordJS"
                    skillsPercent={70}
                    PercentClass="discordjs"
                  />
                  <SkillsCard
                    skillsIcons={NodejsIcon}
                    skillsName="NodeJS"
                    skillsPercent={60}
                    PercentClass="nodejs"
                  />
                  <SkillsCard
                    skillsIcons={HtmlIcon}
                    skillsName="Html"
                    skillsPercent={100}
                    PercentClass="html"
                  />
                  <SkillsCard
                    skillsIcons={CssIcon}
                    skillsName="Css"
                    skillsPercent={70}
                    PercentClass="css"
                  />
                  <SkillsCard
                    skillsIcons={MongoDBIcon}
                    skillsName="MongoDB"
                    skillsPercent={89}
                    PercentClass="mongodb"
                  />
                  {/* <div className="skills__item">
                    <div className="skills__item__icon">
                    <FontAwesomeIcon icon={faDiscord} className="fa-brands fa-discord" />
                    </div>
                    <div className="skills__item__content">
                      <div className="skills__item__heading">
                        Discord Development
                      </div>
                    </div>
                  </div> */}
            </ul>
            <i id="right" className='bx bx-chevron-right i'></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
