const fs = require('fs');
const inquirer = require('inquirer');

var inquirer = require("inquirer");
inquirer
  .prompt([
      {
        name: "title",
        message: "Repository Name: ",
        type: "input",
      },
      {
        name: "description",
        message: "Repository Description: ",
        type: "input",
      },
      {
        name: "installation",
        message: "Installation Instructions: ",
        type: "input",
      },
      {
        name: "usage",
        message: "Usage Information: ",
        type: "input",
      },
      {
        name: "contributing",
        message: "Contributing Guidelines: ",
        type: "input",
      },
      {
        name: "tests",
        message: "Tests: ",
        type: "input",
      },
      {
        name: "license",
        message: "Select license inforamtion: ",
        type: "list",
        choices: [
            "BSD",
            "MIT",
            "GPL",
        ]
      },
      {
        name: "username",
        message: "GitHub Username: ",
        type: "input",
      },
      {
        name: "email",
        message: "Email Address: ",
        type: "input",
      },
  ])
  
  .then((resp)) => {
      
  }