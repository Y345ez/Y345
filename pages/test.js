import { useState, useEffect, useCallback, useRef } from "react";
import Head from "next/head";

import React from "react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import vscode from "../src/utils/icons/brands/vs-code.svg";
import chrome from "../src/utils/icons/brands/chrome.svg";
import brave from "../src/utils/icons/brands/brave.svg";
import github from "../src/utils/icons/brands/github.svg";
import nextjs from "../src/utils/icons/brands/nextjs.svg";
import firefox from "../src/utils/icons/brands/firefox.svg";
import vercel from "../src/utils/icons/brands/vercel.svg";
import git from "../src/utils/icons/brands/git.svg";
import sass from "../src/utils/icons/brands/sass.svg";
import html from "../src/utils/icons/techs/html.svg";
import css from "../src/utils/icons/techs/css.svg";
import javascript from "../src/utils/icons/techs/javascript.svg";
import python from "../src/utils/icons/techs/python.svg";
import react from "../src/utils/icons/techs/react.svg";
import mysql from "../src/utils/icons/techs/mysql.svg";



import CustomTooltip from "../src/components/CustomTooltip";

import { motion } from "framer-motion";

const Footer = dynamic(() => import("../src/components/footer"));

function AutomaticAge({ birthdate }) {
  const calculateAge = useCallback(() => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const age = Math.floor(
      (currentDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000)
    );
    return age;
  }, [birthdate]);

  const [age, setAge] = useState(calculateAge());

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [calculateAge]);

  return <span> {age} </span>;
}

const About = () => {
  const typingRefs = useRef([React.createRef(), React.createRef()]);

  useEffect(() => {
    const animateParagraph = (index) => {
      const textElement = typingRefs.current[index].current;
      const textContent = textElement.textContent.trim();

      textElement.textContent = "";

      for (const letter of textContent) {
        const letterSpan = document.createElement("span");
        letterSpan.textContent = letter === " " ? "\u00A0" : letter;
        letterSpan.style.display = "inline-block";
        letterSpan.style.opacity = 0;
        textElement.appendChild(letterSpan);
      }

      requestAnimationFrame(() => {
        const letterSpans = textElement.querySelectorAll("span");
        letterSpans.forEach((letterSpan, letterIndex) => {
          setTimeout(() => {
            letterSpan.style.opacity = 1;
          }, letterIndex * 50);
        });
      });
    };

    const animateSingleParagraph = (index) => {
      if (
        index < typingRefs.current.length &&
        typingRefs.current[index].current
      ) {
        typingRefs.current[index].current.style.display = "block";

        animateParagraph(index);

        setTimeout(() => {
          animateSingleParagraph(index + 1);
        }, 50 * (typingRefs.current[index].current.textContent.length + 1));
      }
    };

    animateSingleParagraph(0);
  }, []);

  useEffect(() => {
    const contentItems = document.querySelectorAll(".about-my-tools-icon");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentItems,
        start: "top 65%",
        end: "bottom center",
        scrub: 1,
      },
    });

    contentItems.forEach((item, index) => {
      tl.fromTo(
        item,
        { opacity: 0, y: "-40px" },
        { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" },
        index * 0.2
      );
    });
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".cd-timeline-block");
    elements.forEach((element, index) => {
      const direction = index % 2 === 0 ? -1 : 1;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
        },
      });

      tl.from(element, {
        opacity: 0,
        x: 100 * direction,
        duration: 1,
        ease: "Power2.easeInOut",
      });
    });
  }, []);

  useEffect(() => {
    const contentItems = document.querySelectorAll(".about-contact-link");
    const tl = gsap.timeline();

    tl.to({}, 1.6, {});

    contentItems.forEach((item, index) => {
      tl.fromTo(
        item,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          delay: index * 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "center",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });
  }, []);

  const birthdate = "2006-08-28";
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Head>
          <title>tast</title>
          <meta name="robots" content="all" />

          <meta name="description" content="About page" />
          <meta name="theme-color" content="#1c9cfc" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta property="og:title" content="About | Y345" />
          <meta property="og:description" content="About page" />
          <meta property="og:url" content="https://preetsuthar.me/about" />
          <meta property="og:type" content="website" />
          <meta
            name="keywords"
            content="Y345, front-end development, Portfolio, Blog, web development, preet, front end development, front-end developemtn"
          />
          <meta name="author" content="Y345" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="twitter:title" content="About | Y345" />
          <meta name="twitter:description" content="About page" />
          <meta name="subject" content="web development" />
        </Head>
        <div>
          <>
            <div className="about-div">
              <motion.div
                initial={{ opacity: 1, translateX: -100 }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5 }}
              >
                </motion.div>
              </div>
            <div className="aboutToolsFloating-container">
              {Array.from({ length: 1 }, (_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                >
                  <div className="about-my-tools" id="my-skills-about">
                    <p className="p-color sub-heading">#technologies</p>
                    <div className="about-my-tools-icons">
                      <CustomTooltip
                        text="NextJs"
                        description="One of the best React Framework."
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="nextjs"
                          width={55}
                          height={55}
                          src={nextjs}
                        />
                      </CustomTooltip>
                      <CustomTooltip
                        text="Python"
                        description="For advanced scripting."
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="Python"
                          width={55}
                          height={55}
                          src={python}
                        />
                      </CustomTooltip>
                      <CustomTooltip
                        text="HTML"
                        description="Creating websites."
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="HTML"
                          width={55}
                          height={55}
                          src={html}
                        />
                      </CustomTooltip>
                      <CustomTooltip text="CSS" description="Styling websites.">
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="CSS"
                          width={55}
                          height={55}
                          src={css}
                        />
                      </CustomTooltip>
                      <CustomTooltip
                        text="SASS"
                        description="Because it's SASS :)"
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="SASS"
                          width={55}
                          height={55}
                          src={sass}
                        />
                      </CustomTooltip>{" "}
                      <CustomTooltip
                        text="Javascript"
                        description="Making things functional."
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="Javascript"
                          width={55}
                          height={55}
                          src={javascript}
                        />
                      </CustomTooltip>
                      <CustomTooltip
                        text="React"
                        description="Because React, duh!"
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="React"
                          width={55}
                          height={55}
                          src={react}
                        />
                      </CustomTooltip>
                      <CustomTooltip
                        text="MySQL"
                        description="Database management."
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="MySQL"
                          width={55}
                          height={55}
                          src={mysql}
                        />
                      </CustomTooltip>
                      <CustomTooltip
                        text="VS code"
                        description="My favorite code editor."
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="vscode"
                          width={55}
                          height={55}
                          src={vscode}
                        />
                      </CustomTooltip>
                      <CustomTooltip
                        text="Brave"
                        description="Debugging security."
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="brave"
                          width={55}
                          height={55}
                          src={brave}
                        />
                      </CustomTooltip>
                      <CustomTooltip
                        text="Firefox"
                        description="Debugging CSS."
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="firefox"
                          width={55}
                          height={55}
                          src={firefox}
                        />
                      </CustomTooltip>
                      <CustomTooltip
                        text="Chrome"
                        description="Debugging Javascript."
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="chrome"
                          width={55}
                          height={55}
                          src={chrome}
                        />
                      </CustomTooltip>
                      <CustomTooltip
                        text="Github"
                        description="For publishing projects."
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="github"
                          width={55}
                          height={55}
                          src={github}
                        />
                      </CustomTooltip>
                      <CustomTooltip
                        text="Vercel"
                        description="For hosting my projects."
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="vercel"
                          width={55}
                          height={55}
                          src={vercel}
                        />
                      </CustomTooltip>
                      <CustomTooltip
                        text="Git"
                        description=" For Open-Source management."
                      >
                        <Image
                          loading="lazy"
                          className="about-my-tools-icon"
                          alt="git"
                          width={55}
                          height={55}
                          src={git}
                        />
                      </CustomTooltip>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="floating-container">
              {Array.from({ length: 1 }, (_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <section id="cd-timeline" className="cd-container">
                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-picture"></div>

                      <div className="cd-timeline-content">
                        <h2>Currently</h2>

                        <p>
                          Dates in this timeline might not be the most accurate,
                          But yeah, all the dates in this are somewhere around
                          the actual dates.
                        </p>
                        <ul className="content-skills">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                          <li>Next.js</li>
                          <li>React.js</li>
                        </ul>
                      </div>
                    </div>

                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-movie"></div>

                      <div className="cd-timeline-content">
                        <h2>Learning more about Full-Stack</h2>
                        <p>
                          I am still a student pursuing my diploma @ECT in
                          Computer Eng. I have a vision of becoming a Full-Stack
                          Web Developer so I am learning about that too.
                        </p>
                        <span className="cd-date">Present</span>
                      </div>
                    </div>
                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-movie"></div>

                      <div className="cd-timeline-content">
                        <h2>Gave lecture about DB @ECT</h2>
                        <p>
                          I gave my first lecture in college which went
                          fantastic. The lecture was about database systems and
                          relation database management system using MySQL.
                        </p>
                        <span className="cd-date">Sep 4, 2023</span>
                      </div>
                    </div>

                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-movie"></div>

                      <div className="cd-timeline-content">
                        <h2>Learned React & Its Frameworks</h2>
                        <p>
                          I learned React Js and also almost finished Gatsby Js.
                          Later I heard that Next Js is lighting fast for SSR
                          websites. I started to research about it and found
                          Interesting to I started to learn Next Js via YouTube.
                        </p>
                        <span className="cd-date">Feb 7, 2023</span>
                      </div>
                    </div>

                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-picture"></div>

                      <div className="cd-timeline-content">
                        <h2>React Js ⚛️</h2>
                        <p>
                          I had pretty much mastered HTML, CSS, and Javascript.
                          Later I heard about React Js so I started to learn
                          more about that. I was still learning Front-End only
                          because I knew nothing about Back-end systems.
                        </p>
                        <span className="cd-date">May 9, 2021</span>
                      </div>
                    </div>

                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-location"></div>

                      <div className="cd-timeline-content">
                        <h2>Learning @ home</h2>
                        <p>
                          Fast-forward to 2021, Pretty much mastered HTML & CSS.
                          Then I heard about JavaScript. Started to Learn
                          JavaScript via YouTube
                        </p>
                        <span className="cd-date">Feb 14, 2021</span>
                      </div>
                    </div>

                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-location"></div>

                      <div className="cd-timeline-content">
                        <h2>It's so cool! 🤩</h2>
                        <p>
                          I found web development pretty cool and awesome. I was
                          having fun creating websites and all so I continued my
                          journey by learning HTML and CSS.
                        </p>
                        <span className="cd-date">Sep 1, 2020</span>
                      </div>
                    </div>

                    <div className="cd-timeline-block">
                      <div className="cd-timeline-img cd-movie"></div>

                      <div className="cd-timeline-content">
                        <h2>Learning @ JJIS</h2>

                        <p>
                          Write my first lines of HTML and CSS using Chrome!
                          Fell in love with web development. Started to learn
                          more about HTML & CSS.
                        </p>
                        <span className="cd-date">Aug 21, 2020</span>
                      </div>
                    </div>
                  </section>
                </motion.div>
              ))}
            </div>
          </>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};
export default About;