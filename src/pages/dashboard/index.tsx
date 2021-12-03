import Head from "next/head";
import styles from "./dashboard.module.scss";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | FabyoSK</title>

        <script
            dangerouslySetInnerHTML={{
              __html: `
              const user =  window.prompt("Username: ");
              const pass =  window.prompt("Password: ");

              if(user !== "fsk") {
                location.href = "/";
              }
            `,
            }}
            />
      </Head>
    <main className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.dashboardContent}>
      <div className={styles.dashboardContentCard}>
<h3>Title</h3>

          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aperiam non adipisci aspernatur asperiores quaerat ad aliquam impedit ratione iure sed veritatis ut officiis deserunt nesciunt quis in ab tempora.
          </p>

          <button>
            Reply
          </button>
                </div>
                <div className={styles.dashboardContentCard}>
          <h3>Title</h3>

          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aperiam non adipisci aspernatur asperiores quaerat ad aliquam impedit ratione iure sed veritatis ut officiis deserunt nesciunt quis in ab tempora.
          </p>
          <button>
            Reply
          </button>
                </div>
                <div className={styles.dashboardContentCard}>
          <h3>Title</h3>

          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aperiam non adipisci aspernatur asperiores quaerat ad aliquam impedit ratione iure sed veritatis ut officiis deserunt nesciunt quis in ab tempora.
          </p>
          <button>
            Reply
          </button>
      </div>
      </div>
    </main>
</>
  );
}
