// pages/tags.js

import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";

import Head from "next/head";

import { motion } from "framer-motion";

const Tags = ({ tags }) => {
  return (
    <>
      <Head>
        <title>Tags | Y345</title>
        <meta name="robots" content="all" />

        <meta name="theme-color" content="#1c9cfc" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content="Tags | Y345" />
        <meta property="og:url" content="https://preetsuthar.me/tags" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developemtn"
        />
        <meta name="author" content="Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content="Tags | Y345" />
        <meta name="subject" content="web development" />
      </Head>
      {/* <Navbar /> */}
      <div className="project-div">
        <motion.div
          initial={{ opacity: 1, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="project-headers">
            <div className="project-title">
              <h1>&#47;tags</h1>
            </div>
            <div className="project-header-text">
              <p>List of tags for blog posts.</p>
            </div>
          </div>
          <div className="project-container">
            {tags.map((tag) => (
              <div className="post-tag tags-item" key={tag}>
                <Link className="no-decoration p-color" href={`/tags/${tag}`}>
                  {tag}
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Tags;

export async function getStaticProps() {
  const articlesDirectory = path.join(process.cwd(), "articles");
  const fileNames = fs.readdirSync(articlesDirectory);

  const allTags = fileNames.reduce((tags, fileName) => {
    const filePath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    if (data.tags && Array.isArray(data.tags)) {
      tags.push(...data.tags);
    }

    return tags;
  }, []);

  const uniqueTags = [...new Set(allTags)];

  return {
    props: {
      tags: uniqueTags,
    },
  };
}
