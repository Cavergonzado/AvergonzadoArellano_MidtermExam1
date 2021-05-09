const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.get("/", (req,res)=>{
    res.send("Server has started on port 5000");
});

app.get('/AvergonzadoArellano-Midterm_2.1.1', async(req,res)=>{
    try{

       const q1 = `SELECT COUNT(*) AS "count" FROM public.film;`;

    const queryResult = await pool.query(q1);
    res.send(queryResult.rows);
    }
    catch(err){
        console.error(err.message);
        res.json({message: error.message});
    }
});

app.get("/", (req,res)=>{
    res.send("Server has started on port 5000");
});

app.get('/AvergonzadoArellano-Midterm_2.1.2', async(req,res)=>{
    try{

       const q1 = `SELECT rating, SUM(length) AS "sum"
       FROM public.film
       GROUP BY rating
       ORDER BY rating;`;

    const queryResult = await pool.query(q1);
    res.send(queryResult.rows);
    }
    catch(err){
        console.error(err.message);
        res.json({message: error.message});
    }
});


app.get("/", (req,res)=>{
    res.send("Server has started on port 5000");
});

app.get('/AvergonzadoArellano-Midterm_2.1.3', async(req,res)=>{
    try{

       const q1 = `SELECT film_id, title FROM public.film
       WHERE replacement_cost = replacement_cost();`;

    const queryResult = await pool.query(q1);
    res.send(queryResult.rows);
    }
    catch(err){
        console.error(err.message);
        res.json({message: error.message});
    }
});


app.get("/", (req,res)=>{
    res.send("Server has started on port 5000");
});

app.get('/AvergonzadoArellano-Midterm_2.2.1', async(req,res)=>{
    try{

       const q1 = `SELECT * FROM midterm_list_of_films `;

    const queryResult = await pool.query(q1);
    res.send(queryResult.rows);
    }
    catch(err){
        console.error(err.message);
        res.json({message: error.message});
    }
});

app.get("/", (req,res)=>{
    res.send("Server has started on port 5000");
});

app.get('/AvergonzadoArellano-Midterm_2.2.2', async(req,res)=>{
    try{

       const q1 = `select * from midterm_total_films_per_category; `;

    const queryResult = await pool.query(q1);
    res.send(queryResult.rows);
    }
    catch(err){
        console.error(err.message);
        res.json({message: error.message});
    }
});


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


app.get("/", (req,res)=>{
    res.send("Server has started on port 5000");
});

app.get('/AvergonzadoArellano-Midterm_2.4.1/:category', async(req,res)=>{
    try{
        const {category} = req.params;
       const q1 = `SELECT * FROM film_category($1);`;
       const data =[category];

    const queryResult = await pool.query(q1,data);
    res.send(queryResult.rows);
    }
    catch(err){
        console.error(err.message);
        res.json({message: error.message});
    }
});

app.get('/AvergonzadoArellano-Midterm_2.4.2', async(req,res)=>{
    try{

        const {country} = req.body;
       const q1 = `CALL add_country($1);`;
        const data = [country];

    const queryResult = await pool.query(q1,data);
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