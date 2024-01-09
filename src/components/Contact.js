import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons/faAddressBook';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';

const Contact = () => {

  return (
    <>
    <section className="section section--contact" id="s_contact-me">
      <div className="section__container">
        <div className="section__content">
          <div className="section__heading">
            <FontAwesomeIcon className="fa-solid fa-address-book s_fa" icon={faAddressBook} />
            <h2>Contact Me</h2>
          </div>
          <div className="section__description">
            <p>You can contact me pretty much anywhere, and I will also respond to you immediately. My Discord is the
              fastest way you can contact me and if I'm offline there, you can just privately message me through Discord
              and you
              will get a reply from me.</p>
          </div>
          <div className="contact">
            <div className="contact__container">
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=y345develop@gmail.com"
                target="_blank" className="contact__item">
                <div className="contact__item__icon">
                  <FontAwesomeIcon className="fa-solid fa-envelope" icon={faEnvelope} />
                </div>
                <div className="contact__item__content">
                  <div className="contact__item__heading">
                    Email
                  </div>
                  <div className="contact__item__description">
                    Y345Develop@gmail.com

                  </div>
                </div>
              </a>
              <a href="https://t.me/Y345Develop" target="_blank" className="contact__item">
                <div className="contact__item__icon">
                  <i className="fa-brands fa-telegram"></i>
                  <FontAwesomeIcon className="fa-brands fa-telegram" icon={faTelegram} />
                </div>
                <div className="contact__item__content">
                  <div className="contact__item__heading">
                    Telegram
                  </div>
                  <div className="contact__item__description">
                    Y345ez
                  </div>
                </div>
              </a>
              <a href="https://discord.com/users/767169362771574834" target="_blank" className="contact__item">
                <div className="contact__item__icon">
                  <FontAwesomeIcon className="fa-brands fa-discord" icon={faDiscord} />
                </div>
                <div className="contact__item__content">
                  <div className="contact__item__heading">
                    Discord
                  </div>
                  <div className="contact__item__description">
                    Y345
                  </div>
                </div>
              </a>
              <a href="https://twitter.com/Y345Develop" target="_blank" className="contact__item">
                <div className="contact__item__icon">
                  <FontAwesomeIcon className="fa-brands fa-twitter" icon={faTwitter} />
                </div>
                <div className="contact__item__content">
                  <div className="contact__item__heading">
                    Twitter
                  </div>
                  <div className="contact__item__description">
                    Y345Develop
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
