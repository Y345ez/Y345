import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";

import { motion } from "framer-motion";

const Footer = dynamic(() => import("../src/components/footer"));
const Layout = dynamic(() => import("../src/components/Layout"));
const GoBack = dynamic(() => import("../src/components/goBack"));
const Projects = () => {
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
          <meta property="og:url" content="https://preetsuthar.me/projects" />
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
            <div className="project-headers">
              <div className="project-title">
                <h1>&#47;projects</h1>
              </div>
              <div className="project-header-text">
                <p>You can view more on my github.</p>
              </div>
            </div>
            <div className="styled-hr"></div>


              <div className="wrapper">
                <div className="content" id="content">
                    <section className="section section--Projects" id="section-Projects">              
                
                        <div className="section__container">
                            <div className="section__content">
                                <div className="Projects">
                                    <div className="Projects__container">
                                        <div className="Projects__item">
                                            <Link href="https://halfaheart.store" target="_blank" className="Projects__item__image">
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
                                        </div>
                                        <div className="Projects__item">
                                            <Link href="/comingsoon" target="_blank" className="Projects__item__image">
                                                <img src="https://cdn.discordapp.com/attachments/767170983369900043/1133841676461412472/image.png" alt="yanime" />
                                            </Link>
                                            <div className="Projects__item__content">
                                                <div className="Projects__item__heading">
                                                    Yanime
                                                </div>
                                                <div className="Projects__item__description">
                                                    Full Custom Website
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Projects__item">
                                            <Link href="/comingsoon" target="_blank" className="Projects__item__image">
                                                <img src="https://i.imgur.com/XINcDs1.png" alt="Coming Soon" />
                                            </Link>
                                            <div className="Projects__item__content">
                                                <div className="Projects__item__heading">
                                                    Coming Soon
                                                </div>
                                                <div className="Projects__item__description">
                                                    Coming Soon
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Projects__item">
                                            <Link href="/comingsoon" target="_blank" className="Projects__item__image">
                                                <img src="https://i.imgur.com/XINcDs1.png" alt="Coming Soon" />
                                            </Link>
                                            <div className="Projects__item__content">
                                                <div className="Projects__item__heading">
                                                    Coming Soon
                                                </div>
                                                <div className="Projects__item__description">
                                                    Coming Soon
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Projects__item">
                                            <Link href="/comingsoon" target="_blank" className="Projects__item__image">
                                                <img src="https://i.imgur.com/XINcDs1.png" alt="Coming Soon" />
                                            </Link>
                                            <div className="Projects__item__content">
                                                <div className="Projects__item__heading">
                                                    Coming Soon
                                                </div>
                                                <div className="Projects__item__description">
                                                    Coming Soon
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Projects__item">
                                            <Link href="/comingsoon" target="_blank" className="Projects__item__image">
                                                <img src="https://i.imgur.com/XINcDs1.png" alt="Coming Soon" />
                                            </Link>
                                            <div className="Projects__item__content">
                                                <div className="Projects__item__heading">
                                                    Coming Soon
                                                </div>
                                                <div className="Projects__item__description">
                                                    Coming Soon
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Projects__item">
                                            <Link href="/comingsoon" target="_blank" className="Projects__item__image">
                                                <img src="https://i.imgur.com/XINcDs1.png" alt="Coming Soon" />
                                            </Link>
                                            <div className="Projects__item__content">
                                                <div className="Projects__item__heading">
                                                    Coming Soon
                                                </div>
                                                <div className="Projects__item__description">
                                                    Coming Soon
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Projects__item">
                                            <Link href="/comingsoon" target="_blank" className="Projects__item__image">
                                                <img src="https://i.imgur.com/XINcDs1.png" alt="Coming Soon" />
                                            </Link>
                                            <div className="Projects__item__content">
                                                <div className="Projects__item__heading">
                                                    Coming Soon
                                                </div>
                                                <div className="Projects__item__description">
                                                    Coming Soon
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Projects__item">
                                            <Link href="/comingsoon" target="_blank" className="Projects__item__image">
                                                <img src="https://i.imgur.com/XINcDs1.png" alt="Coming Soon" />
                                            </Link>
                                            <div className="Projects__item__content">
                                                <div className="Projects__item__heading">
                                                    Coming Soon
                                                </div>
                                                <div className="Projects__item__description">
                                                    Coming Soon
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Projects__item">
                                            <Link href="/comingsoon" target="_blank" className="Projects__item__image">
                                                <img src="https://i.imgur.com/XINcDs1.png" alt="Coming Soon" />
                                            </Link>
                                            <div className="Projects__item__content">
                                                <div className="Projects__item__heading">
                                                    Coming Soon
                                                </div>
                                                <div className="Projects__item__description">
                                                    Coming Soon
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
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
