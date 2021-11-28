import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Footer() {
  
  let ano = new Date().getFullYear();

  return (
    <>
      <footer className={`pt-5 mt-5 ${styles.footerContent}`}>
        <hr className="mb-5"/>
        <Container>
          <Row className="justify-content-center">
            <Col md="3" className="mb-4">
              <div>
                <h6 className={styles['text-gradient']}>Work Experience LTDA</h6>
              </div>
              <div>
                <h6>Social</h6>
                <a href="home"><i className="text-lg me-4"><FaFacebook/></i></a>
                <a href="home"><i className="text-lg me-4"><FaInstagram/></i></a>
                <a href="home"><i className="text-lg me-4"><FaTwitter/></i></a>
              </div>
            </Col>
            <Col md="2" sm="6" className="mb-4">
            <h6 className={styles['text-gradient']}>Company</h6>
              <div className="d-flex flex-column">
                <NavLink to="/home" className={isActive => `ml-2 ${styles.active}` + (!isActive ? "unselected" : '')}>Início</NavLink>
                <NavLink to="/about" className={isActive => styles.active + (!isActive ? "unselected" : '')}>Sobre nós</NavLink>
                <NavLink to="/contact" className={isActive => styles.active + (!isActive ? "unselected" : '')}>Contato</NavLink>
              </div>
            </Col>
            <Col md="2" sm="6" className="mb-4">
            <h6 className={styles['text-gradient']}>Ajuda e Suporte</h6>
              <div className="d-flex flex-column">
                <NavLink to="/home" className={isActive => `ml-2 ${styles.active}` + (!isActive ? "unselected" : '')}>Início</NavLink>
                <NavLink to="/about" className={isActive => styles.active + (!isActive ? "unselected" : '')}>Sobre nós</NavLink>
                <NavLink to="/contact" className={isActive => styles.active + (!isActive ? "unselected" : '')}>Contato</NavLink>
              </div>
            </Col>
            <Col md="2" sm="6" className="mb-4">
            <h6 className={styles['text-gradient']}>Legalidade</h6>
              <div className="d-flex flex-column">
                <NavLink to="/home" className={isActive => `ml-2 ${styles.active}` + (!isActive ? "unselected" : '')}>Início</NavLink>
                <NavLink to="/about" className={isActive => styles.active + (!isActive ? "unselected" : '')}>Sobre nós</NavLink>
                <NavLink to="/contact" className={isActive => styles.active + (!isActive ? "unselected" : '')}>Contato</NavLink>
              </div>
            </Col>
            <Col md="12">
              <div className="text-center">
                <p className="my-4 text-sm">
                  Todos os direitos reservados. Copyright ©
                  {ano}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}