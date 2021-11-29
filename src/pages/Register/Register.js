import { useFormik } from 'formik';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';

import styles from './styles.module.scss';
import shape from '../../assets/img/shapes/pattern-lines.svg'
import imgSingUp from '../../assets/img/illustration/sign-up.png'

export default function Register() {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  
  const login = (e) => {
    e.preventDefault();
    // console.log(formik.values)
  }

  return (
    <>
      <section>
        <div className={styles.pageContent}>
          <Container className={styles.Container}>
            <Row>
              <Col xl="4" lg="5" md="7" className="d-flex flex-column mx-lg-0 mx-auto">
                <Card className={styles['card-plain']}>
                  <Card.Body>
                    <Card.Title className={`${styles.Title}`}>Cadastrar</Card.Title>
                    <Card.Text className={`mb-1 ${styles.Text}`}>
                      Digite seus dados para efetuar o cadastro.
                    </Card.Text>
                    <Form onSubmit={login} className="text-center mt-4">
                      <Row>
                          <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control type="text" {...formik.getFieldProps('name')} required/>
                          </Form.Group>
                          <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" {...formik.getFieldProps('email')} required/>
                          </Form.Group>
                          <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" {...formik.getFieldProps('password')} required/>
                          </Form.Group>
                          <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                            <Form.Label>Confirmar Senha</Form.Label>
                            <Form.Control type="password" {...formik.getFieldProps('confirmPassword')} required/>
                          </Form.Group>
                      </Row>
                      <div className="d-grid gap-2">
                        <Button type="submit" size="lg" className="bg-gradient-secondary mt-4 mb-0">Entrar</Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" className="d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                <div className={`position-relative bg-gradient-secondary h-100 m-3 px-7 d-flex flex-column justify-content-center ${styles.backShape}`}>
                  <img src={shape} alt="shape" className={`position-absolute ${styles.Shape} start-0`}/>
                  <div className="position-relative">
                    <img src={imgSingUp} alt="" className={`max-width-500 w-100 position-relative ${styles.Illustration}`}/>
                  </div>
                  <h4 className="mt-5 text-white font-weight-bolder">"O sábio nunca diz tudo o que pensa, mas pensa sempre tudo o que diz."</h4>
                  <p className="text-white">- Aristóteles</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}