

// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const app = express();
// const port = 3001;

// // Configura la connessione al database MySQL
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'nome_database',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Errore di connessione al database:', err);
//   } else {
//     console.log('Connesso al database MySQL');
//   }
// });

// // Middleware per parsare il corpo delle richieste
// // Parsing del corpo incorporato in Express
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Endpoint per la conferma dei dati del form
// app.post('/conferma-dati', (req, res) => {
//   const email = req.body.email;

//   // Esegui la query per verificare se l'email esiste nel database
//   const query = 'SELECT * FROM utenti WHERE email = ?';
//   db.query(query, [email], (err, results) => {
//     if (err) {
//       console.error('Errore nella query:', err);
//       res.status(500).send('Errore nel server');
//     } else {
//       if (results.length > 0) {
//         // Email trovata nel database
//         res.status(200).send('Dati confermati con successo');
//       } else {
//         // Email non trovata nel database
//         res.status(404).send('Email non trovata nel database');
//       }
//     }
//   });
// });

// // Avvia il server
// app.listen(port, () => {
//   console.log(`Server in ascolto sulla porta ${port}`);
// });
