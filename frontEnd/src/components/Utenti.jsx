import { useEffect, useState } from "react";

function Utenti() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:8081/signup")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Controlla se i dati sono corretti qui
        setData(data); // Imposta lo stato con i dati
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }, []);

  return (
    <div>
      {typeof data === "undefined" ? (
        <h4>Loading...</h4>
      ) : (
        <ul>
          <h2>Lista Utenti</h2>
          {data.map((utente, i) => (
            <li key={i}>
              <p>id: {utente.id}</p>
              <p>Nome: {utente.nome}</p>
              <p>Cognome: {utente.cognome}</p>
              <p>Email: {utente.email}</p>
              <p>password: {utente.passwort}</p>
              <p>azienda: {utente.nome_azienda}</p>
              <p>Telefono: {utente.telefono}</p>
              <p>data creazione: {utente.creato}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Utenti;
