import { Link, Outlet } from "react-router-dom";
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

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
           by Cody Ivy - Oct,2023
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
