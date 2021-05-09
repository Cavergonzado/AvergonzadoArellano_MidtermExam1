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

app.get('/AvergonzadoArellano-Midterm_2.3.1', async(req,res)=>{
    try{

       const q1 = `select f.film_id,
       CONCAT(a.first_name, ' ', a.last_name) AS "Actor Fullname",
       c.name
       FROM film AS "f"
       JOIN actor AS "a" 
       ON f.film_id = a.actor_id
       JOIN category AS "c"
       ON c.category_id = a.actor_id `;

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