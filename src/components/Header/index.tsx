import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <h1>FabyoSK</h1>
        <ul>
          <li>
            <a href="/">About me</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
