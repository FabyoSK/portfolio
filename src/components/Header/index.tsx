import Fade from "react-reveal/Fade";

import styles from "./header.module.scss";

export function Header() {
  return (
    <Fade top cascade duration={1000} delay={4000}>
      <header className={styles.header}>
        <nav>
          <h1>FabyoSK</h1>
          <ul>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
          </ul>
        </nav>
      </header>
    </Fade>
  );
}
