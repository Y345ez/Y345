import React, { useState, useEffect } from 'react'
import dynamic from "next/dynamic";

import { motion } from "framer-motion";

const Layout = dynamic(() => import("../src/components/Layout"));

export default function Home() {
    useEffect(() => {
      document.body.style.backgroundImage = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1017%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(34%2c 40%2c 49%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c701.045C145.662%2c702.512%2c315.014%2c757.412%2c426.524%2c663.684C539.078%2c569.079%2c502.464%2c388.851%2c540.422%2c246.803C571.013%2c132.324%2c641.119%2c27.475%2c628.003%2c-90.293C614.693%2c-209.805%2c545.574%2c-313.636%2c467.792%2c-405.344C389.374%2c-497.802%2c296.203%2c-578.742%2c181.196%2c-617.098C63.73%2c-656.274%2c-62.408%2c-651.58%2c-182.723%2c-622.299C-307.233%2c-591.997%2c-444.773%2c-553.696%2c-516.274%2c-447.354C-586.498%2c-342.912%2c-531.937%2c-203.619%2c-548.147%2c-78.812C-564.057%2c43.684%2c-631.672%2c157.136%2c-610.593%2c278.849C-586.131%2c420.098%2c-538.948%2c573.619%2c-421.038%2c655.148C-302.516%2c737.1%2c-144.089%2c699.594%2c0%2c701.045' fill='%231b2027'%3e%3c/path%3e%3cpath d='M1920 1472.933C2023.5529999999999 1493.377 2126.627 1595.6599999999999 2220.952 1548.29 2312.613 1502.258 2300.65 1365.487 2329.7799999999997 1267.1399999999999 2354.704 1182.994 2397.9809999999998 1099.705 2379.215 1013.975 2360.91 930.35 2296.111 865.7719999999999 2230.014 811.371 2171.307 763.052 2095.595 750.649 2024.991 722.432 1945.639 690.719 1873.674 621.0160000000001 1789.421 635.29 1704.074 649.749 1656.658 738.232 1592.001 795.787 1516.382 863.1 1405.409 904.689 1377.47 1001.996 1349.134 1100.686 1389.604 1211.241 1448.583 1295.289 1503.347 1373.3310000000001 1597.603 1409.217 1686.819 1442.836 1761.673 1471.0430000000001 1841.523 1457.439 1920 1472.933' fill='%2329303b'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1017'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e";
    });
  return (

      <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Layout>
    <div className="wrapper">
        <div className="section--coming-soon">
            <h1>ComingSoon</h1>
        </div>
    </div>
      </Layout>
    </motion.div>
    </>
  );
}
