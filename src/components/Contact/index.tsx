import React from "react";

import { Section } from "../Section";

import styles from "./contact.module.scss";

export function Contact() {
  return (
    <Section background={false}>
      <div className={styles.contact}>
        <h1>Contact me</h1>

        <form>
          <input
            type="text"
            placeholder="Your name"
            // value={name}
            // onChange={(e) => name(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your email"
            // value={subject}
            // onChange={(e) => setSub(e.target.value)}
          />
          <textarea
            placeholder="Your message"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
}
