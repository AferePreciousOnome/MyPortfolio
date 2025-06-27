import styles from "./Projects.module.css";

const projects = [
  {
    title: "Smart Cv Path-folio",
    description:
      "AI-powered resume builder for non-traditional tech professionals.",
    tech: [
      "React",
      "CSS Modules",
      "Serverless functions ",
      " Netlify",
      " Google Gemini AI (for generating CV content)",
    ],
    link: "https://github.com/SyedArslanHaider/smart-cv-builder",
  },
  {
    title: "Task Tracker",
    description:
      "Full-stack Task Tracker with JWT authentication and bcrypt security.",
    tech: ["Postresql", "Express", "React", "Node.js"],
    link: "https://github.com/AferePreciousOnome/task-tracker",
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.card}>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.techList}>
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
