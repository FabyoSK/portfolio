import Image from "next/image";
import styles from "./hero.module.scss";

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInfo}>
        <p>Hello, i'm </p>
        <h1>Fábio Alves</h1>
        <p>Front-End Developer and Mobile Developer.</p>
      </div>

      <div className={styles.heroImage}>
        <Image src="/fsk.jpg" width={500} height={500} />
      </div>
    </div>
  );
}
