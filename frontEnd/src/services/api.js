import React, { useState } from 'react';

const FormComponent = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/conferma-dati', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Dati confermati con successo');
      } else if (response.status === 404) {
        setMessage('Email non trovata nel database');
      } else {
        setMessage('Errore nel server');
      }
    } catch (error) {
      console.error('Errore durante la richiesta:', error);
      setMessage('Errore durante la richiesta al server');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Conferma Dati</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default FormComponent;
