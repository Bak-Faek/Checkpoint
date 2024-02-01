import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import home from "../../assets/HomeMobile.svg";
import plus from "../../assets/Plus.svg";
import About from "../../assets/About.svg";

export default function Navbar() {
  return (
    <nav className={styles.menumobile}>
      <ul>
        <li className={styles.iconMobile}>
          <Link to="/">
            <img className={styles.Navbaricon} src={home} alt="home" />
          </Link>
        </li>
        <li>
          <Link to="/admin">
            <img className={styles.naviconplus} src={plus} alt="icon plus" />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <img
              className={styles.Navbaricon}
              src={About}
              alt="logo of application"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
