import { useSpring, animated } from "@react-spring/web";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import styles from "./Hero.module.css";
import Socials from "../Socials/Socials";

const Hero = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 120, friction: 20 },
    delay: 300,
  });

  return (
    <section className={styles.hero} id="hero">
      <animated.div className={styles["hero-inner"]} style={fadeIn}>
        <h1 className={styles["hero-title"]}>Hi, I'm Precious Onome Afere</h1>

        <p className={styles["hero-subtitle"]}>
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
        </p>

        <div className={styles["socials-mobile"]}>
          <Socials />
        </div>

        <div className={styles["hero-buttons"]}>
          <a
            href="#projects"
            className={`${styles.btn} ${styles["primary-btn"]}`}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={`${styles.btn} ${styles["secondary-btn"]}`}
          >
            Contact Me
          </a>
        </div>

        <div className={styles["cv-btn"]}>
          <a
            href="/PreciousPortfolio.pdf"
            className={styles["resume-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume <FaArrowRight className={styles["arrow-icon"]} />
          </a>
        </div>
      </animated.div>

      <div className={styles["scroll-indicator"]}>
        <span>Scroll Down</span>
        <div className={styles["arrow-down"]}></div>
      </div>
    </section>
  );
};

export default Hero;
