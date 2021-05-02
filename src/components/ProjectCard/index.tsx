import { FaGithub, FaLink } from "react-icons/fa";

import styles from "./project-card.module.scss";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    techs: string[];
    hasWebsite: boolean;
    github_url: string;
    website?: string;
  };
}
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <h3>Techs</h3>
      <div className={styles.techs}>
        {project.techs.map((tech) => {
          return <a key={tech}>{tech}</a>;
        })}
      </div>

      <div className={styles.buttons}>
        <button className={styles.button} type="button">
          <a href={project.github_url} target="_blank"></a>
          <FaGithub size={16} color="#fff" /> GitHub
        </button>
        {project.hasWebsite && (
          <button className={styles.button}>
            <a href={project.website} target="_blank"></a>
            <FaLink size={16} color="#fff" /> Website
          </button>
        )}
      </div>
    </div>
  );
}
