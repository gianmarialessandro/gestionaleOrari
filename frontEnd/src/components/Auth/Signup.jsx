import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [utente, setUtente] = useState({
    name: "",
    cognome: "",
    email: "",
    password: "",
    azienda: "",
    telefono: "",
  });
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [allowEmail, setAllowEmail] = useState(false);
  const [allowPassword, setAllowPassword] = useState(false);
  const [tasks, setTasks] = useState({
    name: true,
    email: false,
    password: false,
    azienda: false,
    telefono: false,
    loader: false,
  });

  const handleNameChange = (e) => {
    setUtente({ ...utente, name: e.target.value.split(" ")[0], cognome: e.target.value.split(" ")[1],});
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
      setTasks({
        ...tasks,
        name: !tasks.name,
        email: !tasks.email,
      });
    }, 300);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setTasks({
        ...tasks,
        email: !tasks.email,
        password: !tasks.password,
      });
    }, 300);
  };

  const handlePasswordClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setTasks({
        ...tasks,
        password: !tasks.password,
        azienda: !tasks.azienda,
      });
    }, 300);
  };

  const handleAziendaClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setTasks({
        ...tasks,
        azienda: !tasks.azienda,
        telefono: !tasks.telefono,
      });
    }, 300);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    fetch('http://localhost:8081/utenti', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(utente)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Gestisci la risposta qui
      console.log(data);
    })
    .catch(error => {
      console.error('Errore durante la richiesta:', error);
    }); 
// 
    console.log(utente);
    // try {
    //   const response = await fetch('http://localhost:8081/signup', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(utente)
    //   });

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }

    //   const responseData = await response.text();
    //   alert(responseData);
    // } catch (error) {
    //   alert('Si è verificato un errore durante l\'invio dei dati', {error});
    // }

    // navigate("/");

  };

  const [titolo] = useState({
    nome: "inserisci il tuoi dati",
    email: "inserisci la tua email",
    password: "inserisci la tua password",
    azienda: "inserisci il nome della tua azienda",
    telefono: "inserisci il tuo numero di telefono",
  })
  
  return (
    <div>
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="text-center">
            <h1 className="mb-4">{titolo.nome}</h1>
            <div className="d-flex justify-content-center">
              <Container>
                <Row className="justify-content-md-center">
                  <Col xs={12} md={12}>
                    <Form onSubmit={handleFormSubmit}>
                      {/* NOME */}
                      {tasks.name ? (
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
                        {tasks.email ? (
                          <>
                            <Form.Group
                              controlId="formEmail"
                              className="p-1 m-1"
                            >
                              <Form.Label>{utente.name},{utente.cognome}</Form.Label>
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
                      {tasks.password ? (
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
                      {tasks.azienda ? (
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
                      {tasks.telefono ? (
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
                      {tasks.name ? (
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
                      {tasks.email ? (
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
                      {tasks.password ? (
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
                      {tasks.azienda ? (
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
                      {tasks.telefono ? (
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
