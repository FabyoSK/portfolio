import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>
        Made by{" "}
        <a href="http://github.com/FabyoSK" target="_blank">
          FabyoSK
        </a>{" "}
        with ❤️
      </h2>
    </footer>
  );
}
