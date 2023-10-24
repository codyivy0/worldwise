import { NavLink } from "react-router-dom";
import styles from './PageNav.module.css'

const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default PageNav;