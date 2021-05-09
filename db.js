const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "621501831",
    host: "localhost",
    port: 5433,
    database: "AvergonzadoArellano_Midterm"
});

module.exports = pool;