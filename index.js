//packages needed for application

const fs = require('fs');
const inquirer = require('inquirer');

const generateREADME = ({title, description, installation, usage, contributing, tests, license, username, email }) =>
`README.md

# Repository Title: ${title}
## Description: ${description}
## Table of Contents: 
1. [Repsitory Title] (https://github.com/${username}/${title}/blob/main/assets/js/README.md#repository-name)
2. [Description] (https://github.com/${username}/${title}/blob/main/assets/js/README.md#repository-description)
3. [Installation] (https://github.com/${username}/${title}/blob/main/assets/js/README.md#installation)
4. [Usage] (https://github.com/${username}/${title}/blob/main/assets/js/README.md#usage)
5. [License] (https://github.com/${username}/${title}/blob/main/assets/js/README.md#license)
6. [Contributing] (https://github.com/${username}/${title}/blob/main/assets/js/README.md#contributing)
7. [Tests] (https://github.com/${username}/${title}/blob/main/assets/js/README.md#tests)
8. [Questions] (https://github.com/${username}/${title}/blob/main/assets/js/README.md#questions)
## Installation: ${installation}
## Usage: ${usage}
## License: ${license}
## Contributing: ${contributing}
## Tests: ${tests}
## Questions: Have questions? Feel free to contact me at ${email}.
`;

//array of questions for user input
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

  .then((answers) => {
    const readMeContent = generateREADME(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
  
