import Zoom from "react-reveal/Zoom";

import { Section } from "../Section";

import styles from "./about.module.scss";

export function About() {
  return (
    <Section background={true}>
      <Zoom duration={1000}>
        <section className={styles.about}>
          <h1 id="about">About me</h1>
          <p>
            I'm completely in love with tech, learning at the speed of light,
            surfing lines of code to overcome challenges, with lots of energy
            and fun, to this day I remember my first "hello world", when the
            program compiled and "hello world" appeared on the screen I thought
            "Wow I am a hacker", one of the best sensation of my life.
          </p>
        </section>
      </Zoom>
    </Section>
  );
}
