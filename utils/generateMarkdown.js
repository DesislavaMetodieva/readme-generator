const licenseBadges = {
  'MIT License': 'https://img.shields.io/badge/license-MIT-brightgreen',
  'Mozilla Public License 2.0': 'https://img.shields.io/badge/license-MPL%202.0-brightgreen',
  'Apache License 2.0': 'https://img.shields.io/badge/license-Apache%202.0-brightgreen',
  'GNU General Public License v3.0': 'https://img.shields.io/badge/license-GPLv3-blue',
};

// function to generate markdown for README
function generateMarkdown(answers) {
  const { projectTitle, projectDescription, installation, usage, contributing, tests, license, username, email } = answers;

  const licenseBadgeUrl = licenseBadges[answers.license[0]];
  const licenseSelection = answers.license[0];

   licenseBadgeMarkdown = `[![${licenseSelection}](${licenseBadgeUrl})](${licenseBadgeUrl})`;


  
console.log(licenseBadgeUrl);
console.log(licenseSelection);
console.log(licenseBadgeMarkdown);
  
  return `#  ${licenseBadgeMarkdown}
  

  #   ${projectTitle}



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
