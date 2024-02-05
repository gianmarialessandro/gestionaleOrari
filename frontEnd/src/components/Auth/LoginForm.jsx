// Importa le librerie necessarie
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// Componente principale
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aggiungi qui la logica di gestione della registrazione o del login
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="mb-4">fai il login con la tua email e password</h1>
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci la tua email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Inserisci la tua password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Invia
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
    </div>
  );
};

export default LoginForm;
