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

app.get('/AvergonzadoArellano-Midterm_2.2.2', async(req,res)=>{
    try{

       const q1 = `SELECT * FROM film_category('Horror');`;

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