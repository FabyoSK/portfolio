import Image from "next/image";

import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import styles from "./hero.module.scss";

export function Hero() {
  return (
    <main className={styles.hero}>
      <div className={styles.heroInfo}>
        <Fade left cascade duration={1000}>
          <p>Hello, I'm</p>
        </Fade>

        <h1>
          <Fade left cascade duration={1000} delay={1000}>
            Fábio Alves
          </Fade>
        </h1>

        <Fade left cascade duration={1000} delay={2000}>
          <p>FullStack Software Engineer.</p>
        </Fade>

        <Fade bottom cascade duration={2000} delay={3000}>
          <div className={styles.buttons}>
            <button type="button" className={styles.button}>
              <a href="https://linkedin.com/in/fabyosk" />
              <FaLinkedinIn size={16} color="#fff" />
              <span> Linkedin</span>
            </button>

            <button type="button" className={styles.button}>
              <a href="https://github.com/FabyoSK" />
              <FaGithub size={16} color="#fff" />
              <span> GitHub</span>
            </button>

            <button type="button" className={styles.button}>
              <a href="/cv.pdf" download />
              <FaDownload size={16} color="#fff" /> Curriculum
            </button>
          </div>
        </Fade>
      </div>
      <Fade right cascade duration={2000} delay={2000}>
        <div style={{ overflow: "hidden" }}>
          <div className={styles.heroImage}>
            <Image
              src="https://avatars.githubusercontent.com/u/64048314?v=4"
              width={500}
              height={500}
              objectFit="cover"
              alt="Fábio Alves"
            />
          </div>
        </div>
      </Fade>
    </main>
  );
}
