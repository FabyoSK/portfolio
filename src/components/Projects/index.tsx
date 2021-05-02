import { ProjectCard } from "../ProjectCard";
import { Section } from "../Section";

import projects from "../../../projects.json";

import styles from "./projects.module.scss";

export function Projects() {
  return (
    <Section background={false}>
      <h1 id="projects" style={{ textAlign: "center", fontWeight: "bold" }}>
        Projects
      </h1>
      <section className={styles.projectSection}>
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </section>
    </Section>
  );
}
