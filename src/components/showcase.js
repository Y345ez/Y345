import { useState, useEffect, useRef, useCallback } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faUserGear,
  faMedal,
  faClose,
  faTerminal,
  faQuestion,
  faTruckFast,
  faDollarSign,
  faLaptopCode,
  faArrowUpFromBracket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import Image from "next/image";
import Footer from "./footer";
import ReviewDiscord from "./ReviewDiscord";
import Skills from "./skills";
import Contact from "./Contact";
import Projects from "./Projects";
import CustomTooltip from "./CustomTooltip";
import Spotify from "./spotify";
import { motion } from "framer-motion";

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "@#&*__-<>";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span className="showcase-h1">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const Home = () => {
  const { data: session } = useSession();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    setShowLogoutPopup(true);
  };

  const handleCloseLogoutPopup = () => {
    setShowLogoutPopup(false);
  };

  const textRef = useRef(null);
  const fxRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      fxRef.current = new TextScramble(textRef.current);
      const phrases = ["yousef "];
      let counter = 0;

      const next = () => {
        fxRef.current.setText(phrases[counter]).then(() => {
          setTimeout(next, 2500);
        });
        counter = (counter + 1) % phrases.length;
      };

      next();
    }

    return () => {
      if (fxRef.current) {
        cancelAnimationFrame(fxRef.current.frameRequest);
      }
    };
  }, []);

  function AutomaticAge({ birthdate }) {
    const calculateAge = useCallback(() => {
      const birthDate = new Date(birthdate);
      const currentDate = new Date();
      const age = Math.floor(
        (currentDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000)
      );
      return age;
    }, [birthdate]);

    const [age, setAge] = useState(calculateAge());

    useEffect(() => {
      const interval = setInterval(() => {
        setAge(calculateAge());
      }, 24 * 60 * 60 * 1000);

      return () => clearInterval(interval);
    }, [calculateAge]);

    return <span> {age} </span>;
  }

  const birthdate = "2004-08-6";

  return (
    <>
      {session && (
        <div className="logged-in log-css" id="loggedin">
          <a id="popup-logout" className="log-out" onClick={handleLogout}>
            {session.user?.image && (
              <Image
                src={session.user.image}
                alt="discord-image"
                width={50}
                height={50}
                className="discord__img"
              />
            )}
            <span className="discord__name">{session.user?.name}</span>
            <span className="discord__hashtag">
              {session.user?.discriminator}
            </span>
            <span className="discord__exit">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="fa-brands fa-discord"
              />
            </span>
          </a>
        </div>
      )}

      {showLogoutPopup && (
        <div id="logout__Popup" className="logout__Popup">
          <div className="logout__Popup__contents">
            <div className="logout__Popup__header sub-heart-h">
              <h3 className="header-title">
                <FontAwesomeIcon
                  className="fa-solid fa-arrow-right-from-bracket log-out-fa"
                  icon={faArrowUpFromBracket}
                  rotation={90}
                />
                Logout
              </h3>
              <div
                className="close close-l fa fa-close"
                onClick={handleCloseLogoutPopup}
              >
                <FontAwesomeIcon icon={faClose} />
              </div>
            </div>

            <div className="logout__Popup__body">
              <h3>Are you sure you want to logout?</h3>
            </div>
            <div className="logout__Popup__footer">
              <div className="logout__Popup__gro">
                <a
                  onClick={() => signOut()}
                  className="button button--primary log-out"
                >
                  Logout
                </a>
                <a
                  className="button button--primary log-c close-l"
                  onClick={handleCloseLogoutPopup}
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.6 }}
      >
        <div className="login-d" id="login-d">
          {!session && (
            <a
              onClick={() => signIn("discord")}
              className="button button--primary button--large--2 login-b"
            >
              <FontAwesomeIcon
                icon={faDiscord}
                className="fa-brands fa-discord discord-i"
              />
              Login with Discord
            </a>
          )}
        </div>
        <Spotify />

        {/*hero section displayed at all times */}
        <section className="section section--hero">
          <div className="section__container">
            <div className="section__content">
              <div className="section__heading">
                <h1>
                  <span data-text="yousef" ref={textRef}></span>
                  <span>raslan</span>
                </h1>
              </div>
              <div className="section__subheading">
                <h2>
                  <span>Full Stack</span>
                  <span>Web Developer</span>
                </h2>
              </div>
              <div className="section__description">
                <p>
                  Hello! I'm a self-taught web developer with more than four
                  years of experience. I can help you to create website with
                  most appealing design.
                </p>
                <div style={{ marginTop: "0.5rem" }}>
                  <CustomTooltip
                    text="note!"
                    description="Dynamic Imports may affect loading on some devices."
                  >
                    <p
                      style={{
                        color: "#ff4f4f",
                        fontSize: "1rem",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        className="bi bi-exclamation-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                      </svg>
                    </p>
                  </CustomTooltip>
                </div>
              </div>
              <div className="section__buttons">
                <a href="#s_about" className="button button--primary">
                  About Me
                </a>
                <a href="#s_contact-me" className="button button--primary">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <section className="section section--about" id="s_about">
        <div className="section__container">
          <div className="section__content">
            <div className="section__heading">
              <FontAwesomeIcon
                className="fas fa-address-card s_fa"
                icon={faAddressCard}
              />
              <h2>About Me</h2>
            </div>
            <div className="section__description">
              <p>
                Hello, my name is yousef I'm a developer, my age is{" "}
                <AutomaticAge birthdate={birthdate} /> and known as Y345 on the
                internet. My goal is to make a good quality product for
                everyone’s budget. I'd consider myself fast in learning new
                things. I want to start learning development to make wonderful
                websites, i've been into web developing for about 4 years with a
                quite good experience. I'll be able to provide a professional
                service and high quality development, to make your dreams become
                true.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <section className="section section--services" id="s_services">
        <div className="section__container">
          <div className="section__content">
            <div className="section__heading">
              <FontAwesomeIcon
                className="fa-solid fa-user-gear s_fa"
                icon={faUserGear}
              />
              <h2>My Services</h2>
            </div>
            <div className="services">
              <div className="services__container">
                <div className="services__item">
                  <div className="services__item__icon">
                    <FontAwesomeIcon icon={faLaptopCode} />
                  </div>
                  <div className="services__item__content">
                    <div className="services__item__heading">
                      Web Development
                    </div>
                    <div className="services__item__description">
                      <ul>
                        <li>Frontend Designing</li>
                        <li>Backend Development</li>
                        <li>Full Stack Development</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="services__item">
                  <div className="services__item__icon">
                    <FontAwesomeIcon
                      className="fas fa-terminal"
                      icon={faTerminal}
                    />
                  </div>
                  <div className="services__item__content">
                    <div className="services__item__heading">
                      Software Setups
                    </div>
                    <div className="services__item__description">
                      <ul>
                        <li>Minecraft Server Setup</li>
                        <li>NamelessMC Setup</li>
                        <li>Wordpress Setup</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="services__item">
                  <div className="services__item__icon">
                    <FontAwesomeIcon
                      className="fa-brands fa-discord"
                      icon={faDiscord}
                    />
                  </div>
                  <div className="services__item__content">
                    <div className="services__item__heading">
                      Discord Development
                    </div>
                    <div className="services__item__description">
                      <ul>
                        <li>Server Setup</li>
                        <li>Bot Development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--why" id="section-why">
        <div className="section__container">
          <div className="section__content">
            <div className="section__heading">
              <FontAwesomeIcon
                className="fa-solid fa-question s_fa"
                icon={faQuestion}
              />
              <h2>Why Me</h2>
            </div>
            <div className="why">
              <div className="why__container">
                <div className="why__item">
                  <div className="why__item__icon">
                    <FontAwesomeIcon
                      className="fa-solid fa-dollar-sign"
                      icon={faDollarSign}
                    />
                  </div>
                  <div className="why__item__content">
                    <div className="why__item__heading">Budget Friendly</div>
                  </div>
                </div>
                <div className="why__item">
                  <div className="why__item__icon">
                    <FontAwesomeIcon
                      className="fa-solid fa-truck-fast"
                      icon={faTruckFast}
                    />
                  </div>
                  <div className="why__item__content">
                    <div className="why__item__heading">Fast Delivery</div>
                  </div>
                </div>
                <div className="why__item">
                  <div className="why__item__icon">
                    <FontAwesomeIcon
                      className="fa-solid fa-medal"
                      icon={faMedal}
                    />
                  </div>
                  <div className="why__item__content">
                    <div className="why__item__heading">Quality Work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Projects />
      <ReviewDiscord />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
