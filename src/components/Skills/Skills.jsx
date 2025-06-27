import styles from "./Skills.module.css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiPostgresql, SiExpress } from "react-icons/si";
import { useTrail, animated } from "@react-spring/web";

const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Git", icon: <FaGitAlt color="#f05032" /> },
];

const Skills = () => {
  const trail = useTrail(skills.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 300,
  });

  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.heading}>My Skills</h2>
      <div className={styles.grid}>
        {trail.map((style, index) => (
          <animated.div
            key={skills[index].name}
            style={style}
            className={styles.card}
          >
            <div className={styles.icon}>{skills[index].icon}</div>
            <p>{skills[index].name}</p>
          </animated.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
