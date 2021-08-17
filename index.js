const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.listen(3000, () =>{
    console.log("server has started");
});

app.get("/inventario", async (req, res) => {
    try {
      const allProds = await pool.query("SELECT * FROM producto");
      res.json(allProds.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
