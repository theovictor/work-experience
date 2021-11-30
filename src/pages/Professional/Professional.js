/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from 'formik';
import { useProfessional } from '../../hooks/professional/useProfessional';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import ProfessinalHeader from '../../components/Headers/ProfessinalHeader';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Professional() {
  const profissional = useProfessional();
  const rd_professional = useSelector((state) => state.professinalReducer);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      birth_date: '',
      occupation_area: '',
    },
  });

  const limpar = () => {
    formik.values.name = '';
    formik.values.email = '';
    formik.values.birth_date = '';
    formik.values.occupation_area = '';
  }

  const addProfessinal = (e) => {
    e.preventDefault();
    profissional.postProfessinal({
      name: formik.values.name,
      email: formik.values.email,
      birth_date: new Date(formik.values.birth_date),
      occupation_area: formik.values.occupation_area,
    });
    limpar();
  }

  useEffect(() => {
    if (!rd_professional.index) {
      profissional.getTotalProfessinal();
    }
  }, [rd_professional.index])

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
                <h1 className="text-gradient text-info">{rd_professional?.index? rd_professional.index?.total : '0' }</h1>
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