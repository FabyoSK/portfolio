import Image from "next/image";

import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import styles from "./hero.module.scss";

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInfo}>
        <Fade left cascade duration={1000}>
          <p>Hello, i'm</p>
        </Fade>

        <h1>
          <Fade left cascade duration={1000} delay={1000}>
            Fábio Alves
          </Fade>
        </h1>

        <Fade left cascade duration={1000} delay={2000}>
          <p>Front-End Developer and Mobile Developer.</p>
        </Fade>

        <Fade bottom cascade duration={2000} delay={3000}>
          <div className={styles.buttons}>
            <button className={styles.button}>
              <a href="https://linkedin.com/in/fabyosk" />
              <FaLinkedinIn size={16} color="#fff" />
              <span> Linkedin</span>
            </button>

            <button className={styles.button}>
              <a href="https://github.com/FabyoSK" />
              <FaGithub size={16} color="#fff" />
              <span> GitHub</span>
            </button>

            <button className={styles.button}>
              <a href="/cv.pdf" download />
              <FaDownload size={16} color="#fff" /> Curriculum
            </button>
          </div>
        </Fade>
      </div>
      <div className={styles.heroImage}>
        <Image src="/fsk.jpg" width={500} height={500} objectFit="cover" />
      </div>
    </div>
  );
}
