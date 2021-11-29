import { useHistory } from 'react-router';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './styles.module.scss';

import officeimg from '../../assets/img/office-dark.jpg';

export default function HomeHeader() {
  const history = useHistory();

  return (
    <>
      <header className="bg-gradient-dark">
        <div className={`align-items-center d-flex p-0 ${styles.headerContent}`} style={{backgroundImage: `url(${officeimg})`}}>
          <span className={`bg-gradient-info ${styles.mask} ${styles['opacity-8']}`}/>
          <Container className={styles['header-container']}>
            <Row className="justify-content-center">
              <Col className="text-center mx-auto my-auto" lg="8">
                <h1 className="text-white">Work Experience</h1>
                <p className={`lead mb-4 text-white ${styles['opacity-8']}`}>
                  Especialista em recrutamento de Recursos Humanos
                </p>
                <Button className={`${styles.btn} bg-white text-dark`} onClick={() => {history.push('/register')}}>Criar Conta</Button>
                <h6 className="text-white mb-2 mt-5">Encontre-nos em</h6>
                <div className="d-flex justify-content-center">
                  <a href="home"><i className="text-lg text-white me-4"><FaFacebook/></i></a>
                  <a href="home"><i className="text-lg text-white me-4"><FaInstagram/></i></a>
                  <a href="home"><i className="text-lg text-white me-4"><FaTwitter/></i></a>
                </div>
              </Col>
            </Row>
          </Container>
          <div className={`position-absolute w-100 bottom-0 ${styles['wave-index']}`}>
            <svg className={styles.waves} viewBox="0 24 150 40" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className={`${styles['moving-waves']}`}>
                <use href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" />
                <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
                <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
                <use href="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
                <use href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
                <use href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1" />
              </g>
            </svg>
          </div>
        </div>
      </header>
    </>
  );
}