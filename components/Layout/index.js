import styles from '../../styles/Index.module.scss';
import {Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import ToggleButton from "../ToggleModeButton";
import {BsLinkedin} from "react-icons/bs";

export default function Layout({children}) {
  return (
    <div className={`${styles.mainContainer} container`}>
      <header>
        <div className={styles.titleContainer}>
          <div className={styles.toggle}>
            <ToggleButton/>
          </div>
          <h1>Carlos Cifuentes</h1>
          <h4>Desarrollador Web</h4>
        </div>
        <div className={styles.navBar}>

          <a href='https://www.linkedin.com/in/cclaguia/'><BsLinkedin /></a>
        </div>
      </header>
      <main>
        <div className={styles.mainContent}>
          {children}
        </div>
      </main>
    </div>
  );
}
