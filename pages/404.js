import dynamic from "next/dynamic";


const Footer = dynamic(() => import("../src/components/footer"));
const GoBack = dynamic(() => import("../src/components/goBack"));

import { motion } from "framer-motion";

import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Head>
          <title>Oops!</title>
          <meta name="robots" content="noindex" />
        </Head>

        <div className="notFoundDiv">
          <h2>404</h2>
          <p className="p-color">You&apos;re on wrong path!</p>
        </div>
        <GoBack />
        <Footer />
      </motion.div>
    </>
  );
}
