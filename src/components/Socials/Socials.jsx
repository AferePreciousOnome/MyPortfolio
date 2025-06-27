import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <a
        href="https://github.com/AferePreciousOnome"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/afere-precious-3929a0306/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=preciousafere@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiMail />
      </a>
    </div>
  );
};
export default Socials;
