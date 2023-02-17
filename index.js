const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const myREADME = 'newREADME.md';

const init = () => {
    const questions = [
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'projectDescription',
      },
      {
        type: 'input',
        message: 'Please enter installation instructions:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please enter usage information:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please enter contribution guidelines:',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Please enter test instructions:',
        name: 'tests',
      },
      {
        type: 'checkbox',
        message: 'Choose a license:',
        name: 'license',
        choices: [
          'MIT License',
          'Mozilla Public License 2.0',
          'Apache License 2.0',
          'GNU General Public License v3.0',
        ],
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
        validate: function (email) {
          const re = /\S+@\S+\.\S+/;
          return re.test(email) || 'Please enter a valid email address';
        },
      },
    ];
  
    inquirer.prompt(questions).then((answers) => {
      // use the answers to generate the README file

      console.log(answers);
      writeToFile(myREADME, answers);


      // answers object returned by node
    //   {
    //     projectTitle: 'Title',
    //     projectDescription: 'Project name',
    //     installation: 'No isntall',
    //     usage: 'Usage',
    //     contributing: 'No collab',
    //     tests: 'tests still in progress',
    //     license: [ 'MIT License' ],
    //     username: 'DesislavaMetodieva',
    //     email: 'metodieva.desislava@gmail.com'
    //   }

    });
  };

// // function to write README file
 function writeToFile(myREADME, answers) {
    const answersData = JSON.stringify(answers);
    fs.appendFile(myREADME, answersData + '\n', (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Data saved to readme file');
        }
      });
}

// // function call to initialize program
 init();
