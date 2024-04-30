import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Get in touch</h2>
        <p>Want to get in touch? Here's how you can reach me.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phoneIcon.png")} alt="Phone Icon" />
          <a href="phone:+359894908495">00359894908495</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:stanstoilkov@gmail.com">stanstoilkov@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="GithubIcon Icon"
          />
          <a href="https://github.com/Stanetc">github.com/Stanetc</a>
        </li>
      </ul>
    </footer>
  );
};
