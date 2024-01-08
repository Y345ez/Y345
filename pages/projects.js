import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = dynamic(() => import("../src/components/footer"));
const GoBack = dynamic(() => import("../src/components/goBack"));

import Layout from "../src/components/Layout";

import ProjectCard from "../src/components/ProjectCard";

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

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

  useEffect(() => {
    const handleMousemove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mousemove", handleMousemove);
      return () => {
        card.removeEventListener("mousemove", handleMousemove);
      };
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Layout>
        <Head>
          <title>Projects | Y345</title>
          <meta name="robots" content="all" />
          <meta name="description" content="Portfolio page" />
          <meta name="theme-color" content="#1c9cfc" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta property="og:title" content="Projects | Y345" />
          <meta property="og:description" content="Portfolio page" />
          <meta property="og:url" content="http://localhost:3000/projects" />
          <meta property="og:type" content="website" />
          <meta
            name="keywords"
            content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developemtn"
          />
          <meta name="author" content="Preet Suthar" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:title" content="Projects | Y345" />
          <meta name="twitter:description" content="Portfolio page" />{" "}
          <meta name="subject" content="web development" />
        </Head>

        <>
          <div className="project-div">
            <motion.div
              initial={{ opacity: 1, translateX: -100 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="project-headers">
                <div className="project-title">
                  <h1>&#47;projects</h1>
                </div>
                <div className="project-header-text">
                  <p>You can view more on my github.</p>
                </div>
              </div>
            </motion.div>
            <div className="styled-hr"></div>
            <div className="project-container">
              <ProjectCard
                projectName="Halfaheart Network"
                projectDescription="Full Custom Website"
                projectImage="https://i.imgur.com/wUvxEM7.png"
                projectLink="http://localhost:3000"
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

              <ProjectCard
                projectName="Discord bot website template"
                projectDescription="Full Custom Website"
                projectImage="https://i.imgur.com/XINcDs1.png"
                projectLink="https://discord-bot-webpage-template.vercel.app/"
                projectAbout="Minimal and awesome discord bot website created with love using NextJS."
              />

              <ProjectCard
                projectName="ShadowedNight"
                projectDescription="Full Custom Website"
                projectImage="https://i.imgur.com/XINcDs1.png"
                projectLink="https://marketplace.visualstudio.com/items?itemName=Pritudev.shadowednight"
                projectAbout="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ut sint, aut facere culpa quae, earum, voluptates fugiat blanditiis molestias"
              />
              <ProjectCard
                projectName="Vinlybot"
                projectDescription="Full Custom Website"
                projectImage="https://i.imgur.com/XINcDs1.png"
                projectLink="https://github.com/preetsuthar17/Vinlybot"
                projectAbout="Vinlybot is a open-source discord bot with 100+ command where you can contribute!"
              />
              <ProjectCard
                projectName="Zakbot"
                projectDescription="Full Custom Website"
                projectImage="https://i.imgur.com/XINcDs1.png"
                projectLink="https://github.com/preetsuthar17/Zakbot"
                projectAbout="Zak is a multipurpose discord bot made with discord js v13, Created Using discord.js"
              />
            </div>
          </div>
        </>
        <GoBack />
        <Footer />
      </Layout>
    </motion.div>
  );
};

export default Projects;
