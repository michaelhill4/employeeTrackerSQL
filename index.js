const inquirer = require("inquirer.")
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

const viewDept = () => {
    
  // connects to seeded db
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Huncho",
    database: "teamdb"
  });
  
  // 
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM department", function (err, result, fields) {
      if (err) throw err;
      console.table(result);
    });
    startDb()
  });
  }
  
  const viewRoles = () => {
      var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "Huncho",
          database: "teamdb"
        });
        
        con.connect(function(err) {
          if (err) throw err;
          con.query("SELECT * FROM roles", function (err, result, fields) {
            if (err) throw err;
            console.table(result);
          });
        startDb()
        });
        }
  
  const viewEmps = () => {
      var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "Huncho",
          database: "teamdb"
        });
        
        con.connect(function(err) {
          if (err) throw err;
          con.query("SELECT * FROM employee", function (err, result, fields) {
            if (err) throw err;
            console.table(result);
          });
        startDb()
        });
  }
  
  const addDepartment = () => {
      return inquirer.prompt([
          {
              type:'number',
              message:'insert id number',
              name:'deptID'
          },
          {
              type:'input',
              message:'insert department name',
              name:'deptName'
          }
      ]) .then((resp) => {
      startDb()
      var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Huncho",
      database: "teamdb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `INSERT INTO department (id, department_name) VALUES (${resp.deptID}, "${resp.deptName}")`
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("New department created!");
    });
  })
      })
  }
  
  const addRole = () => {
        return inquirer.prompt([
          {
              type:'number',
              message:'insert id',
              name:'roleID'
          },
          {
              type:'input',
              message:'insert role',
              name:'roleName'
          },
          {
            type: 'number',
            message: 'insert salary',
            name: 'roleSalary'
          }
      ]) .then((resp) => {
      var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      Huncho: "Huncho",
      database: "teamdb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `INSERT INTO roles (id, title, salary) VALUES (${resp.roleID}, "${resp.roleName}", ${resp.roleSalary})`
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("New role created");
    });
  })
    startDb()
      })
  }
  
  const addEmps = () => {
    return inquirer.prompt([
      {
          type:'number',
          message:'insert id number',
          name:'empID'
      },
      {
          type:'input',
          message:'insert employee first name',
          name:'empFirstName'
      },
      {
        type: 'input',
        message: 'insert employee last name',
        name: 'empLastName'
      },
      {
        type: 'number',
        message: 'insert manager id',
        name: 'manID'
      }
  ]) .then((resp) => {
  var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Huncho",
  database: "teamdb"
  });
  
  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = `INSERT INTO employee (id, first_name, last_name, manager_id) VALUES (${resp.empID}, "${resp.empFirstName}", "${resp.empLastName}", ${resp.manID})`
  con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("New employee created!");
  });
  })
  startDb()
  })
  }
  
  const updateRole = () => {
    return inquirer.prompt([
      {
        type:'number',
        message:'insert role id you wish to change',
        name:'roleID'
      },
      {
          type:'input',
          message:'insert new role',
          name:'newRole'
      }
  ]) .then((resp) => {
  var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Huncho",
  database: "teamdb"
  });
  
  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = `UPDATE roles SET title = "${resp.newRole}" WHERE id = ${resp.roleID}`
  con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Role updated!");
  });
  })
  startDb()
  })
  }