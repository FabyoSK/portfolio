import { ProjectCard } from "../ProjectCard";
import { Section } from "../Section";

import projects from "../../../projects.json";

import styles from "./projects.module.scss";

import Zoom from "react-reveal/Zoom";

export function Projects() {
  return (
    <Section background={false}>
      <Zoom duration={2000}>
        <h1 id="projects" style={{ textAlign: "center", fontWeight: "bold" }}>
          Projects
        </h1>
        <section className={styles.projectSection}>
          {projects.map((project) => {
            return <ProjectCard key={project.title} project={project} />;
          })}
        </section>
      </Zoom>
    </Section>
  );
}
