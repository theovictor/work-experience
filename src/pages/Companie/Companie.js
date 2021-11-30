/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from 'formik';
import { useCompanie } from '../../hooks/companie/useCompanie';
import { useSelector } from 'react-redux';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import CompanieHeader from '../../components/Headers/CompanieHeader';
import { useEffect } from 'react';

export default function Companie() {
  const companie = useCompanie();
  const rd_companie = useSelector((state) => state.companieReducer);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      previous_description: '',
    },
  });

  const limpar = () => {
    // formik.values.name = '';
    // formik.values.email = '';
    // formik.values.previous_description = '';
    formik.setFieldValue('name', '');
    formik.setFieldValue('email', '');
    formik.setFieldValue('previous_description', '');
  }

  const addCompanie = (e) => {
    e.preventDefault();
    companie.postMsgCompanie(formik.values);
    limpar();
  }

  useEffect(() => {
    if (!rd_companie.index) {
      companie.getAllMsgCompanie();
    }
  }, [rd_companie.index])

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
                  <h4>Envie-nos sua Mensagem.</h4>
                  <p>é muito simples e fácil.</p>
                </div>
              </Col>
            </Row>
            <Row className="mt-4 justify-content-center">
              <Col md="6">
                <div>
                  <div className={`text-center`}>
                  </div>
                  <h5>Total de mensagems recebidas até o momento.</h5>
                  <h1 className="text-gradient text-info">{rd_companie?.index? rd_companie.index?.total : '0' }</h1>
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
                        <Form.Control type="email" placeholder="workexperience@gmail.com" {...formik.getFieldProps('email')} required/>
                      </Form.Group>
                      <Form.Group className="mb-2 text-start" controlId="formBasicEmail">
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control as="textarea" placeholder="Descreva sua mensagem." {...formik.getFieldProps('previous_description')} rows="5" required/>
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