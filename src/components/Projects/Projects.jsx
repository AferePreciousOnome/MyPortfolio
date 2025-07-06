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
    liveDemo: "https://deploy-preview-103--smart-cv-migracode.netlify.app",
    image: "/images/cvPathfolio.png",
  },
  {
    title: "TinyThought",
    description:
      "Sentiment-aware journaling app with mood tracking and authentication.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Recharts",
      "CSS Modules",
      "Sentiment (npm)",
      "Yup",
    ],
    link: "https://github.com/AferePreciousOnome/TinyThought_website",
    image: "/images/tinyThought.png",
  },
  {
    title: "Egg Timer App",
    description:
      "An intuitive and fun egg timer app that helps you perfectly cook different types of eggs , soft-boiled, hard-boiled, scrambled, or fried.",
    tech: ["React", "CSS Modules", "JavaScript", "HTML5 Audio API"],
    link: "https://github.com/AferePreciousOnome/eggTimer",
    liveDemo: "https://eggtimerbyprecious.vercel.app/",
    image: "/images/eggTimer.png",
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.techList}>
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className={styles.links}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub →
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
