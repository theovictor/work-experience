import { useFormik } from 'formik';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import CompanieHeader from '../../components/Headers/CompanieHeader';

export default function Companie() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      previous_description: '',
    },
  });

  const addCompanie = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <CompanieHeader />
      <Container>
        <Row className="justify-content-center text-center">
          <Col md="6">
            <Row className="mt-4 justify-content-center">
              <Col md="6">
                <div>
                  <div className={`text-center`}>
                  </div>
                  <h5>Envie-nos sua Mensagem.</h5>
                  <p>é muito simples e fácil.</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <Card className={`shadow`}>
              <Card.Body>
                <Form onSubmit={addCompanie} className="text-center mt-4">
                  <Row>
                      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label>Nome da Empresa</Form.Label>
                        <Form.Control type="text" {...formik.getFieldProps('name')} required/>
                      </Form.Group>
                      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label>Email da Empresa</Form.Label>
                        <Form.Control type="email" {...formik.getFieldProps('email')} required/>
                      </Form.Group>
                      <Form.Group className="mb-2 text-start" controlId="formBasicEmail">
                        <Form.Label>Aréa de Atuação</Form.Label>
                        <Form.Control as="textarea" {...formik.getFieldProps('previous_description')} rows="5" required/>
                      </Form.Group>
                  </Row>
                  <div className="d-grid gap-2">
                    <Button type="submit" size="lg" className="bg-gradient-secondary mt-4 mb-0 border-0">Enviar</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}