import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.text}>
        I'm a recent graduate and full-stack developer with a strong foundation
        in <strong>React, JavaScript, Node.js, Express.js, and CSS.</strong> I'm
        eager to apply my skills in real-world projects and am currently seeking
        internship or freelance opportunities where I can contribute to building
        modern, responsive, and scalable web applications.
      </p>
      <p className={styles.text}>
        Outside of coding, I enjoy watching movies, reading romance novels, and
        playing word puzzle games. I'm also passionate about learning new
        phrases in different languages, especially from cultures I admire like
        Thailand. Let's collaborate and create something amazing together!
      </p>
    </section>
  );
};

export default About;
