import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

import dynamic from "next/dynamic";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { motion } from "framer-motion";
const ScrollButton = dynamic(() => import("../src/components/scrollButton"));
const Navbar = dynamic(() => import("../src/components/navbar"));
const Footer = dynamic(() => import("../src/components/footer"));
const GoBack = dynamic(() => import("../src/components/goBack"));
import Layout from "../src/components/Layout";

export default function Posts({ posts, tags }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(posts);

  const sanitizeQuery = (query) => {
    return query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  useEffect(() => {
    const contentItems = document.querySelectorAll(".blog-card");

    contentItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: 80 },

        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: item,
            start: "center 100%",
            end: "center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults(posts);
    } else {
      const sanitizedQuery = sanitizeQuery(searchQuery);
      const regex = new RegExp(`(${sanitizedQuery})`, "gi");

      const filteredResults = posts.filter(
        (post) =>
          post.frontmatter.title.toLowerCase().match(regex) ||
          post.frontmatter.description.toLowerCase().match(regex)
      );
      setSearchResults(filteredResults);
    }
  }, [searchQuery, posts]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Layout>
        <Head>
          <title>Blogs | Y345</title>
          <meta name="robots" content="all" />

          <meta name="theme-color" content="#1c9cfc" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta property="og:title" content="Blogs | Y345" />
          <meta property="og:url" content="http://localhost:3000/posts" />
          <meta property="og:type" content="website" />
          <meta
            name="keywords"
            content="Y345, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developemtn"
          />
          <meta name="author" content="Y345" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:title" content="Blogs | Y345" />
          <meta name="subject" content="web development" />
        </Head>

        {/* <Navbar /> */}
        <>
          <div id="blog-title" className="blog-div">
            <motion.div
              initial={{ opacity: 1, translateX: -100 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="blog-headers">
                <div className="blog-title">
                  <h1>&#47;blogs</h1>
                </div>
                <div className="blog-header-text">
                  <p>I do write blogs sometimes.</p>
                </div>

                <input
                  style={{ marginTop: "2rem" }}
                  className="blog-search"
                  type="text"
                  placeholder="Search Article"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div
                  className="tags"
                  style={{
                    marginTop: "0.5rem",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {tags.map((tag) => (
                    <Link
                      style={{
                        width: "fit-content",
                      }}
                      className="post-tag no-decoration p-color"
                      href={`/tags/${tag}`}
                      key={tag}
                    >
                      {tag}
                    </Link>
                  ))}
                  <Link className="post-tag p-color" href="/tags">
                    All Tags
                  </Link>
                </div>
              </div>
            </motion.div>

            <div className="styled-hr"></div>

            <div className="blog-container">
              {searchResults.length === 0 ? (
                <p
                  style={{
                    margin: "1rem 0",
                    color: "#777777",
                    fontSize: "1.3rem",
                  }}
                >
                  No blogs found.
                </p>
              ) : (
                searchResults.map((post, i) => (
                  // <motion.div
                  //   key={post.slug}
                  //   initial={{ translateY: -70 }}
                  //   animate={{ translateY: 0 }}
                  //   exit={{ translateY: 0 }}
                  //   transition={{ duration: 0.5, delay: i * 0.1 }}
                  // >
                  <div key={post.slug} className="blog-card">
                    <div>
                      <Link href={`/posts/${post.slug}`} passHref>
                        <h2 className="blog-header">
                          {" "}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: post.frontmatter.title,
                              searchQuery,
                            }}
                          />
                        </h2>
                      </Link>
                      <p className="blog-text">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description,
                            searchQuery,
                          }}
                        />
                      </p>
                      <div
                        style={{
                          marginTop: "0.6rem",
                        }}
                      >
                        <Link href={`/posts/${post.slug}`} passHref>
                          Read article &rarr;
                        </Link>
                      </div>
                    </div>

                    <p className="blog-text blog-date">
                      {post.frontmatter.date}
                    </p>
                  </div>
                  // </motion.div>
                ))
              )}
            </div>
          </div>
          <GoBack />
          <Footer />
        </>
        <ScrollButton />
      </Layout>
    </motion.div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("articles");
  const posts = files.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(
      path.join("articles", filename),
      "utf-8"
    );
    const { data, content } = matter(markdownWithMetadata);
    const frontmatter = {
      title: data.title,
      date: formatDate(data.date.toString()),
      description: data.description,
      tags: data.tags || [],
    };
    const lines = content.split("\n");
    let description = "";
    for (const line of lines) {
      if (line.trim().length > 0 && !line.trim().startsWith("#")) {
        description = line.trim();
        break;
      }
    }
    if (!description) {
      description = lines[0].trim();
    }
    if (description.length > 100) {
      description = description.substring(0, 50) + "...";
    }
    frontmatter.description = description;
    const tags = data.tags || [];
    return {
      slug: filename.replace(".md", ""),
      frontmatter,
      content,
      tags,
    };
  });

  posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.frontmatter.tags))
  );

  return {
    props: {
      posts,
      tags: allTags,
    },
  };
}

function formatDate(date) {
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(date)
  );
  return formattedDate;
}
