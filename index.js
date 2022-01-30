const connection = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

const promptUser = () => {
  inquirer
    .prompt({
      type: 'list',
      name: 'goToPrompt',
      message: 'Which database would you like to access?',
      choices: ['Departments', 'Roles', 'Employees', 'QUIT']
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
        return connection.end()
      }
    })
};

// Departments functions BEGIN
function departments() {
  inquirer
    .prompt({
      type: 'list',
      name: 'departmentsOptions',
      message: 'What would you like to do to the departments database?',
      choices: ['View', 'Add', 'Delete', 'QUIT']
    })
    .then(answer => {
      if (answer.departmentsOptions == 'View') {
        return viewDepartments();
      }
      else if (answer.departmentsOptions == 'Add') {
        return addDepartments();
      }
      else if (answer.departmentsOptions == 'Delete') {
        return deleteDepartments();
      }
      else {
        return connection.end()
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
// Departments functions ENDS

// Roles functions BEGIN
function roles() {
  inquirer
    .prompt({
      type: 'list',
      name: 'rolesOptions',
      message: 'What would you like to do to the roles database?',
      choices: ['View', 'Add', 'Delete', 'Update', 'QUIT']
    })
    .then(answer => {
      if (answer.rolesOptions == 'View') {
        return viewRoles();
      }
      else if (answer.rolesOptions == 'Add') {
        return addRoles();
      }
      else if (answer.rolesOptions == 'Delete') {
        return deleteRoles();
      }
      else if (answer.rolesOptions == 'Update') {
        return updateRoles();
      }
      else {
        return connection.end()
      }
    });
};

function viewRoles() {
  connection.query(`SELECT * FROM roles`, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
};

function addRoles() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'rolesTitle',
        message: 'What is the role title?'
      },
      {
        type: 'input',
        name: 'rolesSalary',
        message: 'What is the role salary?'
      },
      {
        type: 'input',
        name: 'rolesDepartmentId',
        message: 'What is the role department id?'
      }
    ])
    .then(answer => {
      const rolesTitle = answer.rolesTitle;
      const rolesSalary = answer.rolesSalary;
      const rolesDepartmentId = answer.rolesDepartmentId;
      console.log('New role added')

      connection.query(
        `INSERT INTO roles SET ?`,
        {
          title: rolesTitle,
          salary: rolesSalary,
          department_id: rolesDepartmentId
        },
        (err, result) => {
          if (err) throw err;
        });
      promptUser();
    });
};

function deleteRoles() {
  inquirer
    .prompt({
      type: 'input',
      name: 'roleTitle',
      message: 'What role would you like to delete?'
    })
    .then(answer => {
      const roleTitle = answer.roleTitle;
      console.log('Role deleted')

      connection.query(
        `DELETE FROM roles WHERE ?`,
        {
          title: roleTitle
        },
        (err, result) => {
          if (err) throw err;
        });
      promptUser();
    });
};


// Roles functions ENDS

// Employees functions BEGIN

// Employees functions ENDS

promptUser();
