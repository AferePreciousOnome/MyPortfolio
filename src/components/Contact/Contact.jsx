// src/components/Contact.js
import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "preciousafere@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.description}>
        I'm currently looking for new opportunities! Whether you have a question
        or just want to say hi, I'll try my best to get back to you.
      </p>
      <div className={styles.emailBlock}>
        <span className={styles.email}>{email}</span>
        <button className={styles.copyBtn} onClick={copyEmail}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </section>
  );
}
