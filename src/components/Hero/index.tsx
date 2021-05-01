import Image from "next/image";
import styles from "./hero.module.scss";

import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInfo}>
        <p>Hello, i'm </p>
        <h1>Fábio Alves</h1>
        <p>Front-End Developer and Mobile Developer.</p>

        <div className={styles.buttons}>
          <button className={styles.button}>
            <a href="https://linkedin.com/in/fabyosk" />
            <FaLinkedinIn size={16} color="#fff" />
          </button>
          <button className={styles.button}>
            <a href="https://github.com/FabyoSK" />
            <FaGithub size={16} color="#fff" />
          </button>
          <button className={styles.button}>
            <a href="/cv.pdf" download />
            <FaDownload size={16} color="#fff" /> Curriculum
          </button>
        </div>
      </div>

      <div className={styles.heroImage}>
        <Image src="/fsk.jpg" width={500} height={500} />
      </div>
    </div>
  );
}
