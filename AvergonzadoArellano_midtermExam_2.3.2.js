const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//Middleware
app.use(cors());
app.use(express.json());


//Routes
app.get("/", (req,res)=>{
    res.send("Server has started on port 5000");
});

app.get('/AvergonzadoArellano-Midterm_2.3.2', async(req,res)=>{
    try{

       const q1 = `SELECT a.actor_id,
       CONCAT(a.first_name, ' ', a.last_name) AS "Actor Fullname",
       b.address,
       b.phone,
       c.city,
       d.country
       FROM actor AS "a"
       JOIN address AS "b"
       ON  a.actor_id = b.address_id
       JOIN city AS "c"
       ON b.address_id = c.city_id
       Join country AS "d"
       ON c.city_id = d.country_id;`;

    const queryResult = await pool.query(q1);
    res.send(queryResult.rows);
    }
    catch(err){
        console.error(err.message);
        res.json({message: error.message});
    }
});


app.listen(5000, ()=>{
    console.log("Server has started on port http://localhost: 5000");
});