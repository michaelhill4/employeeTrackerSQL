const inquirer = require("inquirer")
const fs = require("fs")
const cTable = require('console.table');
var mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Huncho',
      database: 'teamdb'
    },
    console.log("Connected to the teamdb database")
  );

// main screen options to select and navigate what you wanna do
const startDb = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Select from the following options:",
            name: "mainPrompt",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
        }
    ]) .then((choose) => {
        if(choose.mainPrompt === "view all departments"){
            return viewDept()
        } else if(choose.mainPrompt === "view all roles"){
            return viewRoles()
        } else if(choose.mainPrompt === "view all employees"){
            return viewEmps()
        } else if(choose.mainPrompt === "add a department"){
            return addDept()
        } else if(choose.mainPrompt === "add a role"){
            return addRole()
        } else if(choose.mainPrompt === "add an employee"){
            return addEmps()
        } else if(choose.mainPrompt === "update an employee role"){
            return updateRole()
        }
    })
}

startDb()

