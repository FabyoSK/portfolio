import { FaHeart } from "react-icons/fa";

import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>
        Made by{" "}
        <a href="http://github.com/FabyoSK" target="_blank">
          FabyoSK
        </a>{" "}
        with <FaHeart size={16} color="#fff" />
      </h2>
    </footer>
  );
}
