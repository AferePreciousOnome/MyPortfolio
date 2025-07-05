import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.text}>
        I'm a recent graduate and full-stack developer with a strong foundation
        in <strong>React, JavaScript, Node.js, Express.js, and CSS.</strong> I'm
        actively seeking internship or freelance opportunities where I can
        contribute to the development of modern, responsive, and scalable web
        applications.
      </p>
      <p className={styles.text}>
        I’ve recently begun deepening my understanding of object-oriented
        programming (OOP) and exploring TypeScript. While I haven't had hands-on
        experience with TypeScript in production yet, I’m eager and fully
        prepared to learn and apply it in a professional setting.
      </p>
      <p className={styles.text}>
        Outside of development, I enjoy movies, romance novels, and word puzzle
        games. I'm also passionate about languages and culture—especially
        learning phrases from regions I admire, like Thailand. I'm enthusiastic
        about collaborating with innovative teams and contributing to impactful
        projects.
      </p>
    </section>
  );
};

export default About;
