import { useSpring, useTrail, animated } from "@react-spring/web";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import styles from "./Hero.module.css";
import Socials from "../Socials/Socials";

const Hero = () => {
  const items = [
    <h1 key="title" className={styles["hero-title"]}>
      Hi, I'm Precious Onome Afere
    </h1>,
    <p key="subtitle" className={styles["hero-subtitle"]}>
      <Typewriter
        words={[
          "Full-Stack Developer",
          "React & Node.js Enthusiast",
          "Open to Internships & Freelance",
          "Lifelong Learner",
          "Tech Problem Solver",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1200}
      />
    </p>,
    <div key="buttons" className={styles["hero-buttons"]}>
      <a href="#projects" className={`${styles.btn} ${styles["primary-btn"]}`}>
        View Projects
      </a>
      <a href="#contact" className={`${styles.btn} ${styles["secondary-btn"]}`}>
        Contact Me
      </a>
    </div>,
    <div key="cv" className={styles["cv-btn"]}>
      <a
        href="/PreciousCV.pdf"
        className={styles["resume-link"]}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume <FaArrowRight className={styles["arrow-icon"]} />
      </a>
    </div>,
  ];

  const imageSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px) scale(0.95)" },
    to: { opacity: 1, transform: "translateY(0) scale(1)" },
    delay: 500,
    reset: false,
  });

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 700,
    reset: false,
  });

  return (
    <section className={styles.hero} id="hero">
      <animated.div
        className={styles["hero-image-wrapper"]}
        style={imageSpring}
      >
        <img
          src="/images/portfolioImg.png"
          alt="Hero"
          className={styles["hero-image"]}
        />
        <div className={styles["image-shadow"]}></div>
      </animated.div>

      <div className={styles["hero-text"]}>
        {trail.map((style, index) => (
          <animated.div key={index} style={style}>
            {items[index]}
          </animated.div>
        ))}

        <div className={styles["socials-mobile"]}>
          <Socials />
        </div>
      </div>

      <div className={styles["scroll-indicator"]}>
        <span>Scroll Down</span>
        <div className={styles["arrow-down"]}></div>
      </div>
    </section>
  );
};

export default Hero;
