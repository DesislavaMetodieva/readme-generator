const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'What is the discription of your project?',
        name: 'projectDiscription',
      },
      {
        type: 'input',
        message: 'Please enter installation instruction:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please enter usage information:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please enter contribution guidelines?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Please enter test instrutions?',
        name: 'tests',
      },
      {
        type: 'checkbox',
        message: 'Choose a license:',
        name: 'license',
        choices: ['MIT License', 'Mozilla Public License 2.0', 'Apache License 2.0', `GNU General Public License v3.0`]
      },
      {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
      },

];

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'What is the discription of your project?',
        name: 'projectDiscription',
      },
      {
        type: 'input',
        message: 'Please enter installation instruction:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please enter usage information:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please enter contribution guidelines?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Please enter test instrutions?',
        name: 'tests',
      },
      {
        type: 'checkbox',
        message: 'Choose a license:',
        name: 'license',
        choices: ['MIT License', 'Mozilla Public License 2.0', 'Apache License 2.0', `GNU General Public License v3.0`]
      },
      {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
      },
  ])
  .then((response) => {
   

      console.log('Success!');

  });

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
