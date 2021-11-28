import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export function MainNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" fixed="top" variant="dark" className={styles.active}>
        <Container>
          <Navbar.Brand>Work Experience</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Link to="/home">Início</Link>
              <Link to="/about">Sobre nós</Link>
              <Link to="/contact">Contato</Link>
            </Nav>
            <Nav>
              <Link to="/home">More deets</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
