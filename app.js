import express from "express";

const app = express();

//Returns hello employees on the home page
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

//Retieves list of all employees from the /employees route 
app.get("/employees", (req, res) => {
  res.json(employees);
});

// Retrieves random employee
app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
});

// Retrieves the employee using the id number placed in the route
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
