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
  
const mainPrompt = () => {
    return inquirer.prompt([
        {
        type: "list",
        message: "Hello, what can I help you with?"
        choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit"
        ],
        name: "addEmployee",

        }
    ]).then((newThing))
}