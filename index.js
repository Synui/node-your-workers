// const db = require('./db');
const inquirer = require('inquirer');
const cTable = require('console.table');

const promptUser = () => {
  console.log('begin')
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'goToPrompt',
        message: 'What would you like to do? (Required)',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role'
        ],
        validate: goToPrompt => {
          if (goToPrompt) {
            return true;
          }
          else {
            console.log('Please make a decision!');
          }
        }
      }
    ])
    .then(answer => {
      if (answer.goToPrompt == 'View all Departments') {
        return viewAllDepartments();
      }
      else if (answer.goToPrompt == 'View all roles') {
        return viewAllRoles();
      }
      else if (answer.goToPrompt == 'View all employees') {
        return viewAllEmployees();
      }
      else if (answer.goToPrompt == 'Add a department') {
        return addADepartment();
      }
      else if (answer.goToPrompt == 'Add a role') {
        return addARole();
      }
      else if (answer.goToPrompt == 'Add an employee') {
        return addAnEmployee();
      }
      else if (answer.goToPrompt == 'Update an employee role') {
        return updateAnEmployeeRole();
      }
    })
};

// function viewAllDepartments() {

// }

promptUser();