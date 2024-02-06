import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Signup = () => {

  const navigate = useNavigate();

  const [utente, setUtente] = useState({
    name: "",
    email: "",
    password: "",
    azienda: "",
    telefono: "",
  });
  // const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  // const [name, setName] = useState("");
  const [nameStd, setNameStd] = useState(true);
  const [allowEmail, setAllowEmail] = useState(false);
  const [emailStd, setEmailStd] = useState(false);
  const [allowPassword, setAllowPassword] = useState(false);
  const [passwordStd, setPasswordStd] = useState(false);
  const [aziendaStd, setAziendaStd] = useState(false);
  const [telefonoStd, setTelefonoStd] = useState(false);

  const handleNameChange = (e) => {
    setUtente({
      ...utente,
      name: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setUtente({
      ...utente,
      email: e.target.value,
    });
  };

  const handleConfirmationEmailChange = (e) => {
    setConfirmationEmail(e.target.value);
    if (e.target.value === utente.email && e.target.value !== "")
      setAllowEmail(true);
    else setAllowEmail(false);
  };

  const handlePasswordChange = (e) => {
    setUtente({
      ...utente,
      password: e.target.value,
    });
  };

  const handleConfirmationPasswordChange = (e) => {
    setConfirmationPassword(e.target.value);
    if (e.target.value === utente.password) setAllowPassword(true);
    else setAllowPassword(false);
  };

  const handleAziendaChange = (e) => {
    setUtente({
      ...utente,
      azienda: e.target.value,
    });
  };

  const handleTelefonoChange = (e) => {
    setUtente({
      ...utente,
      telefono: e.target.value,
    });
  };

  const handleNameClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setNameStd(!nameStd);
      setEmailStd(!emailStd);
    }, 300);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setEmailStd(!emailStd);
      setPasswordStd(!passwordStd);
    }, 300);
  };

  const handlePasswordClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setPasswordStd(!passwordStd);
      setAziendaStd(!aziendaStd);
    }, 300);
  };

  const handleAziendaClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setAziendaStd(!aziendaStd);
      setTelefonoStd(!telefonoStd);
    }, 300);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(utente);
    navigate("/")

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
                      <Form.Group controlId="formName" className="p-1 m-1">
                        <Form.Control
                          type="name"
                          placeholder="Inserisci il tuo nome e cognome"
                          value={utente.name}
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
                          <Form.Group controlId="formEmail" className="p-1 m-1">
                            <Form.Label>{utente.name}</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Inserisci la tua email"
                              value={utente.email}
                              onChange={handleEmailChange}
                            />
                          </Form.Group>

                          <Form.Group
                            controlId="formConfermationEmail"
                            className="p-1 m-1"
                          >
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
                    {passwordStd ? (
                      <>
                        <Form.Group
                          controlId="formPassword"
                          className="p-1 m-1"
                        >
                          {/* <Form.Label>Password</Form.Label> */}
                          <Form.Control
                            type="password"
                            placeholder="Inserisci la tua password"
                            value={utente.password}
                            onChange={handlePasswordChange}
                          />
                        </Form.Group>

                        <Form.Group
                          controlId="formConfirmationPassword"
                          className="p-1 m-1"
                        >
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
                      </>
                    ) : (
                      <></>
                    )}

                    {/* AZIENDA */}
                    {aziendaStd ? (
                      <Form.Group controlId="formName" className="p-1 m-1">
                        <Form.Control
                          type="name"
                          placeholder="nome dell'azienda"
                          value={utente.azienda}
                          onChange={handleAziendaChange}
                        />
                      </Form.Group>
                    ) : (
                      <></>
                    )}

                    {/* TELEFONO */}
                    {telefonoStd ? (
                      <Form.Group controlId="formName" className="p-1 m-1">
                        <Form.Control
                          type="name"
                          placeholder="telefono per comunicazioni"
                          value={utente.telefono}
                          onChange={handleTelefonoChange}
                        />
                      </Form.Group>
                    ) : (
                      <></>
                    )}

                    {/* PROCEDI INVIO */}
                    {nameStd ? (
                      <Button
                        variant="primary"
                        type="button"
                        onClick={handleNameClick}
                      >
                        Invia
                      </Button>
                    ) : (
                      <></>
                    )}
                    {emailStd ? (
                      <Button
                        variant="primary"
                        type="button"
                        onClick={handleEmailClick}
                      >
                        Invia
                      </Button>
                    ) : (
                      <></>
                    )}
                    {passwordStd ? (
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handlePasswordClick}
                      >
                        Invia
                      </Button>
                    ) : (
                      <></>
                    )}
                    {aziendaStd ? (
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleAziendaClick}
                      >
                        Invia
                      </Button>
                    ) : (
                      <></>
                    )}
                    {telefonoStd ? (
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleFormSubmit}
                      >
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
          <div>
            {Object.values(utente).map((e, i) => (
              <p key={i}>{e}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
