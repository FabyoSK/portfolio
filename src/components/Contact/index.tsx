import React, { useState } from "react";

import { Section } from "../Section";

import styles from "./contact.module.scss";

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        if (res.status === 200) {
            setName('')
            setEmail('')
            setMessage('')
            alert("Thanks for the contact :)")
        }
    })
  }

  return (
    <Section background={false}>
      <div className={styles.contact}>
        <h1>Contact me</h1>

        <form>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className={styles.button} onClick={e => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
}
