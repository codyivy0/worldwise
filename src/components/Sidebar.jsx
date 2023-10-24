import { Link } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo.jsx";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link to="/">
        <Logo />
      </Link>
      <AppNav />

      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Cody Ivy
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
