import projects from "../../../projects.json";

import { ProjectCard } from "../ProjectCard";
import { Section } from "../Section";

import styles from "./projects.module.scss";

export function Projects() {
  return (
    <Section background={false}>
      <h1 id="projects" style={{ textAlign: "center", fontWeight: "bold" }}>
        Projects
      </h1>
      <section className={styles.projectSection}>
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </section>
    </Section>
  );
}
