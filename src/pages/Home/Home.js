import { useHistory } from 'react-router';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import HomeHeader from '../../components/Headers/HomeHeader';
import styles from './styles.module.scss';

import spaceship from '../../assets/img/spaceship.svg';
import creditCard from '../../assets/img/credit-card.svg';
import box3D from '../../assets/img/box-3d.svg';
import customerSuport from '../../assets/img/customer-suport.svg';
import waveDown from '../../assets/img/wave-down.svg';
import waveUp from '../../assets/img/wave-up.svg';
import kalVisual from '../../assets/img/kal-visuals-square.jpg'
import people from '../../assets/img/people.jpg';
import illustrate from '../../assets/img/illustration/sign-up.png';
import theo from '../../assets/img/theo.jpg';
import Henrique from '../../assets/img/Henrique.jpg';

export default function Home() {
  const history = useHistory();


  return (
    <>
      <HomeHeader />
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <Row className="justify-content-center">
                <Col md="6">
                  <div>
                    <div className={`text-center ${styles.Icon}`}>
                      <img src={spaceship} alt="spaceship"/>
                    </div>
                    <h5>Plenamente Integrado</h5>
                    <p>Plataforma conectada as mais diversas redes empresariais</p>
                  </div>
                </Col>
                <Col md="6">
                  <div>
                    <div className={`text-center ${styles.Icon}`}>
                      <img src={creditCard} alt="spaceship"/>
                    </div>
                    <h5>Bolsa Dinâmica</h5>
                    <p>Bonificação dinâmica das bolsas durante sua evolução</p>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md="6">
                  <div>
                    <div className={`text-center ${styles.Icon}`}>
                      <img src={box3D} alt="spaceship"/>
                    </div>
                    <h5>Conhecimento Modular</h5>
                    <p>Integração dos conhecimentos acadêmicos e profissionais</p>
                  </div>
                </Col>
                <Col md="6">
                  <div>
                    <div className={`text-center ${styles.Icon}`}>
                      <img src={customerSuport} alt="spaceship"/>
                    </div>
                    <h5>Fórum Especializado</h5>
                    <p>Acesso ao fórum composto pelos maiores especialistas de cada área</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="4" className="ms-auto mt-lg-0 mt-4">
              <Card className={`shadow ${styles.Card}`}>
                <Card.Header className="p-0 mx-3 mt-3 position-relative z-index-1 border-0 mb-2">
                  <div className="d-block">
                    <img src={people} alt="people" className="img-fluid shadow"/>
                  </div>
                </Card.Header>
                <Card.Body>
                  <h5>Trabalhe com os melhores</h5>
                  <p>Faremos com que a sua experiência seja efetuada com os melhores especialistas de cada área, de modo a forma uma base solida para seu futuro.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`pt-sm-8 pb-5 position-relative bg-gradient-dark ${styles.Section}`}>
        <div className={`position-absolute w-100 top-0 ${styles['Wave-Down']}`}>
          <img src={waveDown} alt="wave-down"/>
        </div>
        <Container>
          <Row>
            <Col md="8" className="text-start mb-5 mt-5">
              <h3 className="text-white z-index-1 ">A Equipe Executiva</h3>
              <p className="text-white mb-0">Conheça um pouco sobre as mentes por trás do nosso brilhante projeto</p>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card className="card-profile overflow-hidden border-0" style={{borderRadius: '15px'}}>
                <Row>
                  <Col lg="4" md="6" className="pe-lg-0">
                    <div className="p-3 pe-md-0">
                      <img className="w-100 rounded-circle shadow" src={theo} alt="" />
                    </div>
                  </Col>
                  <Col lg="8" md="6" className="ps-lg-0 my-auto">
                    <Card.Body>
                      <h5 className="mb-0">Theo Victor</h5>
                      <h6 className="text-info">Software Developer</h6>
                      <a href="https://github.com/tzn-dev" className={styles.Link}>github.com/tzn-dev</a>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-profile mt-lg-0 mt-5 overflow-hidden border-0" style={{borderRadius: '15px'}}>
                <Row>
                  <Col lg="4" md="6" className="pe-lg-0">
                    <div className="p-3 pe-md-0">
                      <img className="w-100 rounded-circle shadow" src={Henrique} alt="" />
                    </div>
                  </Col>
                  <Col lg="8" md="6" className="ps-lg-0 my-auto">
                    <Card.Body>
                      <h5 className="mb-0">Henrique Anjos</h5>
                      <h6 className="text-info">Software Developer</h6>
                      <a href="https://github.com/Licaesar" className={styles.Link}>github.com/Licaesar</a>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg="6">
              <Card className="card-profile overflow-hidden z-index-2 border-0" style={{borderRadius: '15px'}}>
                <Row>
                  <Col lg="4" md="6" className="pe-lg-0">
                    <div className="p-3 pe-md-0">
                      <img className="w-100 rounded-circle shadow" src={kalVisual} alt="" />
                    </div>
                  </Col>
                  <Col lg="8" md="6" className="ps-lg-0 my-auto">
                    <Card.Body>
                      <h5 className="mb-0">Emma Roberts</h5>
                      <h6 className="text-info">UI Designer</h6>
                      <p className="mb-0">Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-profile overflow-hidden mt-lg-0 mt-5 z-index-2 border-0" style={{borderRadius: '15px'}}>
                <Row>
                  <Col lg="4" md="6" className="pe-lg-0">
                    <div className="p-3 pe-md-0">
                      <img className="w-100 rounded-circle shadow" src={kalVisual} alt=""/>
                    </div>
                  </Col>
                  <Col lg="8" md="6" className="ps-lg-0 my-auto">
                    <Card.Body>
                      <h5 className="mb-0">Emma Roberts</h5>
                      <h6 className="text-info">UI Designer</h6>
                      <p className="mb-0">Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="position-absolute w-100 bottom-0 mn-n1">
          <img src={waveUp} alt="wave-up"/>
        </div>
      </section>
      <section className="pt-2 pb-6 bg-gray-100" id="count-stats">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md="3">
              <h1 className="text-gradient text-info" id="state1">5234</h1>
              <h5>Contratos</h5>
              <p>Clientes que foram efetivados no mercado de trabalho</p>
            </Col>
            <Col md="3">
              <h1 className="text-gradient text-info"><span id="state2">3400</span>+</h1>
              <h5>Cursos</h5>
              <p>São cursos e novos lançamentos toda semana</p>
            </Col>
            <Col md="3">
              <h1 className="text-gradient text-info"><span id="state3">24</span>/7</h1>
              <h5>Suporte</h5>
              <p>Nosso time está disposição á qualquer hora</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-5 pt-5">
        <Container>
          <Row>
            <Col md="6" className="m-auto">
              <h4>Seja o primeiro a ver as novidades</h4>
              <p className="mb-4">
                Você pode não está no mercado,
                Porém, com nossa ajuda e seu esforço alcançaremos as alturas.
              </p>
              <Row>
                <div className="col-4 ps-0">
                  <Button className="bg-gradient-info mb-0 h-100 position-relative z-index-2 border-0" onClick={() => {history.push('/professionals')}}>Inscreva-se</Button>
                </div>
              </Row>
            </Col>
            <Col md="5" className="ms-auto">
              <div className="position-relative">
                <img className="max-width-50 w-100 position-relative z-index-2" src={illustrate} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}