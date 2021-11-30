import { useFormik } from 'formik';
import { useContact } from '../../hooks/contact/useContact';
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap';

import styles from './styles.module.scss';
import imgCurved from '../../assets/img/curved8.jpg';

export default function Contact() {
  const contact = useContact();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  
  const limpar = () => {
    formik.setFieldValue('name', '');
    formik.setFieldValue('email', '');
    formik.setFieldValue('message', '');
  }

  const sendMsg = (e) => {
    e.preventDefault();
    contact.postContact(formik.values);
    limpar();
  }

  return (
    <>
      <div className={styles.headerContent}>
        <div>
          <img className={`${styles.headerImage} position-absolute fixed-top ms-auto w-50 h-100 d-none d-sm-none d-md-block`} 
            src={imgCurved} alt="curved"/>
        </div>
        <Container className={styles.Container} fluid>
          <Row className={styles.Row}>
            <Col lg="7" className="d-flex justify-content-center flex-column">
              <Card className={`d-flex justify-content-center p-4 shadow-lg my-sm-0 my-sm-6 mt-8 mb-5 ${styles.Card}`}>
                <Card.Body>
                  <Card.Title className={`text-center ${styles.Title}`}>Contate Nos</Card.Title>
                  <Card.Text className={`text-center mb-1 ${styles.Text}`}>
                    Para mais perguntas, incluindo oportunidades de parceria, envie um e-mail para workexperience@gmail.com ou entre em contato usando nosso formulário de contato.
                  </Card.Text>
                  <Form onSubmit={sendMsg} className="text-center mt-4">
                    <Row>
                      <Col>
                        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                          <Form.Label>Nome Completo</Form.Label>
                          <Form.Control type="text" placeholder="Nome Completo" {...formik.getFieldProps('name')} required/>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="workexperience@gmail.com" {...formik.getFieldProps('email')} required/>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                      <Form.Label>Mensagem</Form.Label>
                      <Form.Control as="textarea" placeholder="Descreva sua mensagem em pelo menos 250 caracteres." rows="7" {...formik.getFieldProps('message')} required/>
                    </Form.Group>
                    <Button type="submit">Enviar Mensagem</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}