import styles from "./project-card.module.scss";

interface ProjectCard {
  hasWebsite: boolean;
}
export function ProjectCard({ hasWebsite }) {
  return (
    <div className={styles.projectCard}>
      <h2> Title</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        voluptatum voluptatibus aut corrupti impedit necessitatibus fugiat natus
        commodi omnis rem nostrum dolorem tenetur earum porro aliquam? Sunt
        minima provident eaque.
      </p>

      <h3>Techs</h3>
      <div className={styles.techs}>
        <a>Next.js</a>
        <a>React</a>
        <a>reactIcons</a>
        <a>reactIcons</a>
        <a>reactIcons</a>
        <a>PHP</a>
      </div>

      <div className={styles.buttons}>
        <button className={styles.button}>GitHub</button>

        {hasWebsite && <button className={styles.button}>Website</button>}
      </div>
    </div>
  );
}
