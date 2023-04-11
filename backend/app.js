require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knex = require('knex');
const pg = require('pg');

const options = {
    origin: [
      "http://localhost:8080",
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
  "https://welbex-testtask.netlify.app"
      // 'https://movies-explorer-api-yv7u.onrender.com',
    //   "https://movies-explorer-frontend.netlify.app",
      // 'https://movies-explorer.zb.nomoredomains.rocks',
      // 'https://api.movies-explorer.zb.nomoredomains.rocks',
    ],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type", "origin", "Authorization"],
    credentials: true,
  };
  
const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
      },
    searchPath: ['knex', 'public'],
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(cors());
app.use("*", cors(options));

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