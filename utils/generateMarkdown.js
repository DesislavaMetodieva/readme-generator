// function to generate markdown for README
function generateMarkdown(answers) {
  const { projectTitle, projectDescription, installation, usage, contributing, tests, license, username, email } = answers;

  return `# ${projectTitle}

${projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests

${tests}

## License

${license.join(', ')}

## Questions

If you have any questions, please contact me:

- 💬 GitHub: https://github.com/${username}
- 📫 Email: ${email}
`;
}


module.exports = generateMarkdown;
