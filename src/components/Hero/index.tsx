import Image from "next/image";
import styles from "./hero.module.scss";

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInfo}>
        <p>Hello, i'm </p>
        <h1>Fábio Alves</h1>
        <p>Front-End Developer and Mobile Developer.</p>

        <div className={styles.buttons}>
          <button className={styles.button}>LinkedIn</button>
          <button className={styles.button}>GitHub</button>
          <button className={styles.button}>Curriculum</button>
        </div>
      </div>

      <div className={styles.heroImage}>
        <Image src="/fsk.jpg" width={500} height={500} />
      </div>
    </div>
  );
}
