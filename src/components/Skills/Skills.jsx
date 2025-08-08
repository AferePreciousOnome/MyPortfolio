import styles from "./Skills.module.css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiPostgresql, SiExpress } from "react-icons/si";
import { useSprings, animated } from "@react-spring/web";
import { useState } from "react";

const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#e34c26" />, level: 90 },
  { name: "CSS3", icon: <FaCss3Alt color="#264de4" />, level: 85 },
  { name: "JavaScript", icon: <SiJavascript color="#f7df1e" />, level: 80 },
  { name: "React", icon: <FaReact color="#61dafb" />, level: 75 },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" />, level: 70 },
  { name: "Express.js", icon: <SiExpress color="#ffffff" />, level: 65 },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" />, level: 60 },
  { name: "Git", icon: <FaGitAlt color="#f05032" />, level: 85 },
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const springs = useSprings(
    skills.length,
    skills.map((_, i) => ({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      delay: i * 100 + 300,
      config: { mass: 1, tension: 200, friction: 20 },
      reset: false,
    }))
  );

  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.heading}>My Skills</h2>
      <div className={styles.grid}>
        {springs.map((style, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <animated.div
              key={skills[index].name}
              style={style}
              className={`${styles.card} ${isHovered ? styles.active : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={styles.icon}>{skills[index].icon}</div>
              <p>{skills[index].name}</p>
              {isHovered && (
                <div className={styles.percentage}>{skills[index].level}%</div>
              )}
            </animated.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
