const express = require('express');
const mysql = require('mysql2');
const inquirer = require("inquirer")

const port = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Huncho',
      database: 'teamdb'
    },
    console.log("Connected to the teamdb database")
  );

  const topPrompt = () => {
    return inquirer.prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "Update Employee's Manager",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit"
        ],
        name: "employeeAdd",
        
      }]