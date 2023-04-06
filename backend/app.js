require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knex = require('knex');
const pg = require('pg');


const db = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL,
    // connection: {
    //     connectionString: process.env.DATABASE_URL,
    //     ssl: { rejectUnauthorized: false },
    //   },
    searchPath: ['knex', 'public'],
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    db.select('*')
        .from('main')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));