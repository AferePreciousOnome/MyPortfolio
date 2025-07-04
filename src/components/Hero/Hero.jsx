import { useSpring, animated } from "@react-spring/web";
import styles from "./Hero.module.css";
import { FaArrowRight } from "react-icons/fa";
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
          A full-stack developer passionate about building responsive web apps
          and collaborating on meaningful projects.
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
    </section>
  );
};

export default Hero;
