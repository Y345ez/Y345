import React, { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import StatsPanel from '../src/components/StatsPanel';

const ScrollButton = dynamic(() => import('../src/components/scrollButton'));
const Footer = dynamic(() => import("../src/components/footer"));
const GoBack = dynamic(() => import("../src/components/goBack"));

export default function Posts({ posts }) {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const api = {
    base: 'https://api.hypixel.net/player?key=',
    key: 'fa6d25c4-49bd-4bac-85b8-71e9b2ebb4a4',
  };

  const onSearch = async (text) => {
    if (text === '') {
      return '';
    }
    setLoading(true);

    text = text.replace(/\s+/g, '');

    setTimeout(() => {
      fetch(`https://api.minetools.eu/uuid/${text}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.status === 'ERR' || result === '') {
            setLoading(false);
            setPlayer(null);
          } else {
            fetch(`${api.base}${api.key}&uuid=${result.id}`)
              .then((bedwars_res) => bedwars_res.json())
              .then((bedwars_json) => {
                setLoading(false);
                setPlayer(bedwars_json.player);
              });
          }
        })
        .catch((err) => {
          setLoading(false);
          setPlayer(null);
        });
    }, 300);
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchText);
      setSearchText('');
    }
  };

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
          <meta property="og:url" content="https://preetsuthar.me/posts" />
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

        <>
          <div
            id="blog-title"
            className="blog-div"
            style={{
              height: '100vh',
            }}
          >
            <motion.div
              initial={{ opacity: 1, translateX: -100 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="blog-headers">
                <div className="blog-title">
                  <h1>&#47;<span>Y</span>bedwars</h1>
                </div>
                <div className="blog-header-text">
                  <p>Quick Minecraft Bedwars Stats</p>
                </div>

                <input
                  style={{ marginTop: '2rem' }}
                  className="blog-search"
                  type="text"
                  placeholder="Search player"
                  spellCheck={false}
                  onKeyPress={handleEnterKeyPressed}
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                />
              </div>
            </motion.div>

            <div className="styled-hr"></div>

            <div className="bed-container">
              {loading && <p>Loading...</p>}
              {!loading && player && <StatsPanel player_data={player} />}
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
