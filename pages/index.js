import React, { useState, useEffect } from 'react'
import dynamic from "next/dynamic";
import Head from "next/head";

import { motion } from "framer-motion";


const Showcase = dynamic(() => import("../src/components/showcase"));
const Layout = dynamic(() => import("../src/components/Layout"));
const ScrollButton = dynamic(() => import("../src/components/scrollButton"));



export default function Home() {
  useEffect(() => {
  const scrollButton = document.querySelector(".scroll-button");

  if (scrollButton) {
    // when the user scrolls, show the button; otherwise, hide it
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100 ?
        scrollButton.classList.add("show-btn") :
        scrollButton.classList.remove("show-btn");
    });

    // when the user clicks the button, take them to the top with smooth behavior
    scrollButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // for smooth scrolling
      });
    });
  }
});
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Layout style={{ backgroundColor: "#080809" }}>
        <Head>
          <title>Y345</title>
          <meta name="robots" content="all" />
          <meta
            name="description"
            content="Y345 personal portfolio and blog website."
          />
          <meta name="theme-color" content="#1c9cfc" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta
            property="og:title"
            content="Y345"
          />
          <meta
            property="og:description"
            content="Y345 personal portfolio and blog website."
          />
          <meta property="og:url" content="https://Y345suthar.me" />
          <meta property="og:type" content="website" />
          <meta
            name="keywords"
            content="Y345, Front-end Developer, Portfolio, Blog, web development, Y345, front end development, front-end developemtn"
          />
          <meta name="author" content="Y345" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="twitter:title"
            content="Y345"
          />
          <meta
            name="twitter:description"
            content="Y345's personal portfolio and blog website."
          />{" "}
          <meta name="subject" content="web development" />
        </Head>

        <>
          <Showcase />
          <ScrollButton />
        </>
      </Layout>
    </motion.div>
  );
}
