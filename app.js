import express from "express";

const app = express();


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
