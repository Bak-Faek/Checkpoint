import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.jpg";
import profile from "../../assets/connexion.png";

export default function Header() {
  // const { logout, userData } = useUserContext();
  // const logOutFromSession = () => {
  //   logout();
  // };

  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Link className={styles.svgLink} to="/">
          <img className={styles.svgLogo} src={logo} alt="logo" />
        </Link>
      </div>

      <h1>Candle Light</h1>

      <div className={styles.favoris}>
        <Link className={styles.svgLink} to="/login">
          <img className={styles.svgProfil} src={profile} alt="profile" />
        </Link>
      </div>
    </div>
  );
}
