import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Stanislav Stoilkov</h1>
        <p className={styles.description}>
          I'm a front end developer with 1 year of experience using React and
          JavaScript. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:stanstoilkov@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImg.png")}
        alt="Stanislav Stoilkov"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
