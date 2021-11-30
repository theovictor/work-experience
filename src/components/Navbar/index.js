import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import styles from "./styles.module.scss";

export function MainNavbar() {

  const history = useHistory();

  return (
    <>
      <div className={styles.navContent}>
        <Navbar collapseOnSelect expand="lg" className="shadow">
          <Container fluid>
            <Navbar.Brand className={styles.navBrand}>Work Experience</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <NavLink to="/home" className={isActive => `ml-2 ${styles.active}` + (!isActive ? "unselected" : '')}>Início</NavLink>
                <NavLink to="/professionals" className={isActive => styles.active + (!isActive ? "unselected" : '')}>Profissionais</NavLink>
                <NavLink to="/companies" className={isActive => styles.active + (!isActive ? "unselected" : '')}>Empresas</NavLink>
                <NavLink to="/contact" className={isActive => styles.active + (!isActive ? "unselected" : '')}>Contato</NavLink>
              </Nav>
              <Nav>
                <Button className="bg-gradient-info text-white" onClick={() => {history.push('/professionals')}}>Inscreva-se</Button>
                <div></div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
