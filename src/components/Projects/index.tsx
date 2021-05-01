import { ProjectCard } from "../ProjectCard";
import { Section } from "../Section";

import styles from "./projects.module.scss";
export function Projects() {
  return (
    <Section background={false}>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <section className={styles.projectSection}>
        <ProjectCard hasWebsite={true} />
        <ProjectCard hasWebsite={false} />
        <ProjectCard hasWebsite={true} />
        <ProjectCard hasWebsite={true} />
        <ProjectCard hasWebsite={false} />
        <ProjectCard hasWebsite={true} />
      </section>
    </Section>
  );
}
