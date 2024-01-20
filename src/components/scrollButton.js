import React, { useState, useEffect } from 'react'
import dynamic from "next/dynamic";

import { motion } from "framer-motion";

const Layout = dynamic(() => import("./Layout"));

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
      <Layout>
        <>
          <button className="scroll-button">
          {/* <svg xmlns="http://www.w3.org/2000/svg" 
               width="35" 
               height="35" 
               fill="currentColor" 
               class="bx-arrow" 
               viewBox="0 0 24 24">
            <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"/>
          </svg> */}
          <i className='bx bx-up-arrow-alt'></i>
          </button>
        </>
      </Layout>
    </motion.div>
  );
}
