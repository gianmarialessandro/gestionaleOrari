const express = require('express');
const mysql =require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})

app.get('/', (req, res) => {
    return res.json("ciao del Server");
})

app.get('/orari', (req, res) => {
    const sql = "SELECT * FROM orari";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.listen(8081, () => {
    console.log('in ascolto dalla porta 8081')
})