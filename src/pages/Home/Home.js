import { Card, Col, Container, Row } from 'react-bootstrap';
import HomeHeader from '../../components/Headers/HomeHeader';
import styles from './styles.module.scss';

import spaceship from '../../assets/img/spaceship.svg';
import creditCard from '../../assets/img/credit-card.svg';
import box3D from '../../assets/img/box-3d.svg';
import customerSuport from '../../assets/img/customer-suport.svg';
import people from '../../assets/img/people.jpg';

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
              <Card className={`shadow-lg ${styles.Card}`}>
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
    </>
  )
}