import e from "express";
import "dotenv/config";
import "./config/db.js";

const app = e();

app.use(e.json());

app.listen(process.env.API_PORT, () => console.log(`Server running at ${process.env.API_PORT}.`));
