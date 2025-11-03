import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Boilerplate to get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read employees.json
const employees = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data/employees.json"), "utf-8")
);

// 1️⃣ GET /
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// 2️⃣ GET /employees
app.get("/employees", (req, res) => {
  res.json(employees);
});

// 3️⃣ GET /employees/random
app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
});

// 4️⃣ GET /employees/:id
app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const employee = employees.find((emp) => emp.id === id);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send(`Employee with id ${id} not found.`);
  }
});

export default app;


// TODO: this file!
