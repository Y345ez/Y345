import "../src/styles/globals.scss";
import "../src/styles/reset.css";
import "../src/styles/style.css";
import "../src/styles/partials/_about.scss";
import "../src/styles/partials/_navbar.scss";
import "../src/styles/partials/_projects.scss";
import "../src/styles/partials/_showcase.scss";
import "../src/styles/partials/_blogsPage.scss";
import "../src/styles/partials/_reviewSec.scss";
import "../src/styles/partials/_footer.scss";
import "../src/styles/partials/_reviewsSkeletonCard.scss";
import "../src/styles/partials/_loadingBar.scss";
import "../src/styles/partials/_buttons.scss";
import "../src/styles/partials/_customTooltip.scss";
import "../src/styles/partials/_postPage.scss";
import "../src/styles/partials/_404.scss";
import "../src/styles/partials/_Ybedwars.scss";
import "../src/styles/partials/_CourseSnackBar.scss";

import CourseSnackBar from "../src/components/CourseSnackBar";

import Dialog from "../src/components/Dialog";
import Layout from "../src/components/Layout";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const [showDialog, setShowDialog] = useState(false);
  const { session, ...rest } = pageProps;

  useEffect(() => {
    const dialogShownInThisSession = sessionStorage.getItem(
      "dialogShownInThisSession"
    );
    if (!dialogShownInThisSession) {
      const showPopupAfterDelay = setTimeout(() => {
        setShowDialog(true);
        sessionStorage.setItem("dialogShownInThisSession", true);
      }, 11000);

      return () => clearTimeout(showPopupAfterDelay);
    }
  }, []);

  if (showDialog == true) {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        setShowDialog(false);
      }
    });
  }

  const handleCloseDialog = () => {
    setShowDialog(false);
  };
  return (
    <SessionProvider session={session}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3, transition: "ease-in" }}
    >
      <Layout>
        <Head>
        {/* <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' /> */}
        </Head>
        <>
          {showDialog && (
            <Dialog onClose={handleCloseDialog} className="show" />
          )}
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-GE0Q2SX5ZY" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GE0Q2SX5ZY');
        `}
          </Script>
        </>
        {/* <CourseSnackBar /> */}
         <Component {...pageProps} />
      </Layout>
    </motion.div>
    </SessionProvider>
  );
}
