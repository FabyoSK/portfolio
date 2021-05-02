import { useState } from "react";

import styles from "./header.module.scss";

import { MdMenu, MdClose } from "react-icons/md";

export function Header() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }
  function closeMobileMenu() {
    setClick(false);
  }

  return (
    <header className={styles.header}>
      <nav>
        <h1>FabyoSK</h1>
        <ul className={click ? styles.mobileMenuShow : styles.mobileMenuHide}>
          <li onClick={closeMobileMenu}>
            <a href="#about">About me</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="#">Projects</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="#">Skills</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
