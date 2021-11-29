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

export default function Home() {


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
                    <h5>Fully integrated</h5>
                    <p>We get insulted by others, lose trust for those We get back freezes</p>
                  </div>
                </Col>
                <Col md="6">
                  <div>
                    <div className={`text-center ${styles.Icon}`}>
                      <img src={creditCard} alt="spaceship"/>
                    </div>
                    <h5>Payments functionality</h5>
                    <p>We get insulted by others, lose trust for those We get back freezes</p>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md="6">
                  <div>
                    <div className={`text-center ${styles.Icon}`}>
                      <img src={box3D} alt="spaceship"/>
                    </div>
                    <h5>Prebuilt components</h5>
                    <p>We get insulted by others, lose trust for those We get back freezes</p>
                  </div>
                </Col>
                <Col md="6">
                  <div>
                    <div className={`text-center ${styles.Icon}`}>
                      <img src={customerSuport} alt="spaceship"/>
                    </div>
                    <h5>Improved platform</h5>
                    <p>We get insulted by others, lose trust for those We get back freezes</p>
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
                  <h5>Get insights on Search</h5>
                  <p>Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards.</p>
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
              <h3 className="text-white z-index-1 ">The Executive Team</h3>
              <p className="text-white mb-0">There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill.</p>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card className="card-profile overflow-hidden border-0" style={{borderRadius: '15px'}}>
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
              <Card className="card-profile mt-lg-0 mt-5 overflow-hidden border-0" style={{borderRadius: '15px'}}>
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
          <div className="row justify-content-center text-center">
            <div className="col-md-3">
              <h1 className="text-gradient text-info" id="state1" countTo="5234">5234</h1>
              <h5>Projects</h5>
              <p>Of “high-performing” level are led by a certified project manager</p>
            </div>
            <div className="col-md-3">
              <h1 className="text-gradient text-info"><span id="state2" countTo="3400">3400</span>+</h1>
              <h5>Hours</h5>
              <p>That meets quality standards required by our users</p>
            </div>
            <div className="col-md-3">
              <h1 className="text-gradient text-info"><span id="state3" countTo="24">24</span>/7</h1>
              <h5>Support</h5>
              <p>Actively engage team members that finishes on time</p>
            </div>
          </div>
        </Container>
      </section>
      <section class="my-5 pt-5">
        <Container>
          <Row>
            <Col md="6" className="m-auto">
              <h4>Be the first to see the news</h4>
              <p className="mb-4">
                Your company may not be in the software business,
                but eventually, a software company will be in your business.
              </p>
              <Row>
                <div className="col-8">
                  <div className="input-group">
                    <input type="text" class="form-control mb-sm-0" placeholder="Email Aqui..."/>
                  </div>
                </div>
                <div className="col-4 ps-0">
                  <Button type="button" class="btn bg-gradient-info mb-0 h-100 position-relative z-index-2">Inscreva-se</Button>
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