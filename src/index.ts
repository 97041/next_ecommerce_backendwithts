import express, { Request, Response } from "express";
import { Pool } from "pg";


const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "fashion_ecommerce",
  password: "1234",
  port: 5432,
});

const app = express();
const port = 3000;


app.get("/", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "DB Connected Successfully",
      time: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Database connection failed");
  }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});