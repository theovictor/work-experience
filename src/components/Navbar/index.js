import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import styles from "./styles.module.scss";

export function MainNavbar() {

  return (
    <>
      <Navbar collapseOnSelect expand="sm" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand>Work Experience</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavLink to="/home" className={isActive => styles.active + (!isActive ? "unselected" : '')}>Início</NavLink>
              <NavLink to="/about" className={isActive => styles.active + (!isActive ? "unselected" : '')}>Sobre nós</NavLink>
              <NavLink to="/contact" className={isActive => styles.active + (!isActive ? "unselected" : '')}>Contato</NavLink>
            </Nav>
            <Nav>
              <Button className={`${styles.btn} bg-white text-dark`}>Entrar</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
