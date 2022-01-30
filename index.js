const connection = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

const promptUser = () => {
  console.log('begin')
  inquirer
    .prompt({
      type: 'list',
      name: 'goToPrompt',
      message: 'Which database would you like to access?',
      choices: [
        'Departments',
        'Roles',
        'Employees',
      ]
    })
    .then(answer => {
      if (answer.goToPrompt == 'Departments') {
        return departments();
      }
      else if (answer.goToPrompt == 'Roles') {
        return roles();
      }
      else if (answer.goToPrompt == 'Employees') {
        return employees();
      }
      else {
        connect.end();
      }
    })
};

function departments() {
  inquirer
    .prompt({
      type: 'list',
      name: 'departmentOptions',
      message: 'What would you like to do to the departments database?',
      choices: ['View', 'Add', 'Delete']
    })
    .then(answer => {
      if (answer.departmentOptions == 'View') {
        return viewDepartments();
      }
      else if (answer.departmentOptions == 'Add') {
        return addDepartments();
      }
      else if (answer.departmentOptions == 'Delete') {
        return deleteDepartments();
      }
      else {
        connect.end();
      }
    });
};

function viewDepartments() {
  connection.query(`SELECT * FROM departments`, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
};

function addDepartments() {
  inquirer
    .prompt({
      type: 'input',
      name: 'departmentName',
      message: 'What is the name of the department?'
    })
    .then(answer => {
      const departmentName = answer.departmentName;
      console.log('New department added')

      connection.query(
        `INSERT INTO departments SET ?`,
      {
        department_name: departmentName
      },
      (err, result) => {
        if (err) throw err;
      });
      promptUser();
    })
};

function deleteDepartments() {
  inquirer
    .prompt({
      type: 'input',
      name: 'departmentName',
      message: 'What department would you like to delete?'
    })
    .then(answer => {
      const departmentName = answer.departmentName;
      console.log('Department deleted')

      connection.query(
        `DELETE FROM departments WHERE ?`,
      {
        department_name: departmentName
      },
      (err, result) => {
        if (err) throw err;
      });
      promptUser();
    });
};

promptUser();
