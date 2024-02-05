import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [name, setName] = useState("");
  const [nameStd, setNameStd] = useState(true);
  const [allowEmail, setAllowEmail] = useState(false);
  const [emailStd, setEmailStd] = useState(false);
  const [allowPassword, setAllowPassword] = useState(false);
  const [passwordStd, setPasswordStd] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameStd(!nameStd);
    setEmailStd(!emailStd);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmationEmailChange = (e) => {
    setConfirmationEmail(e.target.value);
    setEmailStd(!emailStd);
    setPasswordStd(!passwordStd);
    if (e.target.value === email && e.target.value !== "") setAllowEmail(true);
    else setAllowEmail(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmationPasswordChange = (e) => {
    setConfirmationPassword(e.target.value);
    if (e.target.value === password) setAllowPassword(true);
    else setAllowPassword(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // Aggiungi qui la logica di gestione della registrazione o del login
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="mb-4">registrati con la tua email e password</h1>
          <div className="d-flex justify-content-center">
            <Container>
              <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                  <Form onSubmit={handleFormSubmit}>
                    {/* NOME */}
                    {nameStd ? (
                      <Form.Group controlId="formName">
                        {/* <Form.Label>Nome e Cognome</Form.Label> */}
                        <Form.Control
                          type="name"
                          placeholder="Inserisci il tuo nome e cognome"
                          value={name}
                          onChange={handleNameChange}
                        />
                      </Form.Group>
                    ) : (
                      <div></div>
                    )}
                    <>
                      {/* EMAIL */}
                      {emailStd ? (
                        <>
                          <Form.Group controlId="formEmail">
                            <Form.Label>{name}</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Inserisci la tua email"
                              value={email}
                              onChange={handleEmailChange}
                            />
                          </Form.Group>

                          <Form.Group controlId="formConfermationEmail">
                            <Form.Control
                              type="email"
                              placeholder="Conferma la tua email"
                              value={confirmationEmail}
                              onChange={handleConfirmationEmailChange}
                            />
                            <Form.Text
                              className={
                                allowEmail ? "text-success" : "text-danger"
                              }
                            >
                              {allowEmail
                                ? "email corrispondenti"
                                : "le due Emails non corrispondono"}
                            </Form.Text>
                          </Form.Group>
                        </>
                      ) : (
                        <></>
                      )}
                    </>

                    {/* PASSWORD */}
                    <Form.Group controlId="formPassword">
                      {/* <Form.Label>Password</Form.Label> */}
                      <Form.Control
                        type="password"
                        placeholder="Inserisci la tua password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formConfirmationPassword">
                      {/* <Form.Label>Conferma Password</Form.Label> */}
                      <Form.Control
                        className={
                          allowPassword ? "text-success" : "text-danger"
                        }
                        type="password"
                        placeholder="Conferma la tua password"
                        value={confirmationPassword}
                        onChange={handleConfirmationPasswordChange}
                      />
                      {allowPassword ? (
                        <Form.Text className="text-success">
                          Passwords corrispondenti
                        </Form.Text>
                      ) : (
                        <Form.Text className="text-danger">
                          passwords non corrispondenti
                        </Form.Text>
                      )}
                    </Form.Group>

                    {/* PROCEDI INVIO */}
                    {nameStd ? (
                      <Button variant="info" type="button">
                        prossimo
                      </Button>
                    ) : (
                      <></>
                    )}
                    {emailStd ? (
                      <Button variant="info" type="button">
                        prossimo
                      </Button>
                    ) : (
                      <></>
                    )}
                    {passwordStd ? (
                      <Button variant="primary" type="submit">
                        Invia
                      </Button>
                    ) : (
                      <></>
                    )}
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
