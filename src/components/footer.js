import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import Qrcode from "../utils/images/Qrcode.png";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const downloadQRCode = () => {
    const link = document.createElement("a");
    link.href = Qrcode.src;
    link.download = "Qrcode.png";
    link.click();
  };

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const onMouseOver = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    document.querySelector(".y345h1").onmouseover = onMouseOver;

    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        document.documentElement.classList.add("loaded");
      }, 1000);
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <div className="y345h1"
                 data-value={`© ${currentYear} All rights reserved | Made by Y345`}>
                 &#169;{currentYear} All rights reserved | Made by Y345
             </div>
            <div className="qr" id="qr-logout" onClick={openModal}>
              <i className="bx bx-qr"></i>
            </div>
            <AnimatePresence>
              {isModalOpen && (
                <motion.div
                  className="qr__Popup"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={modalVariants}
                >
                  <div className="qr__Popup__contents">
                    <div
                      className="close close-l fa fa-close"
                      onClick={closeModal}
                    >
                      <FontAwesomeIcon icon={faClose} />
                    </div>
                    <div className="qr__Popup__body"></div>
                    <div className="qr__Popup__gro">
                      <h1>Share this page</h1>
                      <div>
                        <Image
                          className="qr-svg"
                          alt="QR Code"
                          src={Qrcode}
                          width={300}
                          height={300}
                        />
                      </div>
                      <button
                        className="button button--primary"
                        onClick={downloadQRCode}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </footer>
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </>
  );
};

export default Footer;
