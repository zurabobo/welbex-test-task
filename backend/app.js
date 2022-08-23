require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knex = require('knex');
var connectionString = "postgres://mbjbpngwbtmcxj:81a003beaf1c763b47e850f0d95d768efb15495cb0db256ce41237736a080ae5@ec2-34-199-68-114.compute-1.amazonaws.com:5432/dd8hrerjqrq03a"

pg.connect(connectionString, function(err, client, done) {
   client.query('SELECT * FROM main', function(err, result) {
      done();
      if(err) return console.error(err);
      console.log(result.rows);
   });
});
// const db = knex({
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     ssl: true,
//     extra: {
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     },
// });
// const db = knex({
//     client: 'pg',
//     connection: {
//         host: process.env.DATABASE_HOST,
//         user: process.env.DATABASE_USERNAME,
//         password: process.env.DATABASE_PASSWORD,
//         database: process.env.DATABASE
//     },
// });
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