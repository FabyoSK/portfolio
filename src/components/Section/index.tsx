import { ReactNode } from "react";

import styles from "./section.module.scss";

interface SectionProps {
  background: boolean;
  children: ReactNode;
}
export function Section({ background, children }: SectionProps) {
  return (
    <section className={background ? styles.container : styles.containerDark}>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
