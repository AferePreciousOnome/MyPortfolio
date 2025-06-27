// Sidebar.jsx
import styles from "./Sidebar.module.css";
import Socials from "../Socials/Socials";
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Fullstack Developer</div>
      <nav className={styles.nav}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#skills">Skills</a>
      </nav>
      <Socials />
    </aside>
  );
};

export default Sidebar;
