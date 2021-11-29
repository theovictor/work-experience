import { useFormik } from 'formik';
import { useProfessional } from '../../hooks/professional/useProfessional';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import ProfessinalHeader from '../../components/Headers/ProfessinalHeader';

export default function Professional() {
  const profissional = useProfessional();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      birth_date: '',
      occupation_area: '',
    },
  });

  const addProfessinal = (e) => {
    e.preventDefault();
    profissional.postProfessinal(formik.values);
  }

  return (
    <>
      <ProfessinalHeader />
      <Container className="pt-2 pb-6">
        <Row className="justify-content-center text-center">
          <Col md="6">
            <Row className="justify-content-center">
              <Col md="6">
                <h4>Profissionais cadastrados</h4>
                <p>Atualmente a Work Experience contem um total de profissionais cadastrados de...</p>
                <h1 className="text-gradient text-info">0</h1>
              </Col>
            </Row>
            <Row className="mt-4 justify-content-center">
              <Col md="6">
                <div>
                  <div className={`text-center`}>
                  </div>
                  <h5>Faça seu pre-cadastro.</h5>
                  <p>é muito simples e fácil.</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-4">
            <Card className={`shadow`}>
              <Card.Body>
                <Form onSubmit={addProfessinal} className="text-center mt-4">
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
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control type="date" {...formik.getFieldProps('birth_date')} required/>
                      </Form.Group>
                      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label>Aréa de Atuação</Form.Label>
                        <Form.Control type="text" {...formik.getFieldProps('occupation_area')} required/>
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