// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs'; 
import { type } from 'os';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'name',
        message: colors.bgBlue('What is the name of your project?'),
    },
    {
        type: 'input',
        name: 'description',
        message: colors.bgRed('Please provide a description of your project.'),
    },
    {
        type: 'input',
        name: 'installation',
        message: colors.green('Please provide installation instructions.'),
    },
    {
        type: 'input',
        name: 'usage',
        message: colors.bgWhite('Please provide usage information.'),
    },
    {
        type: 'input',
        name: 'contribution',
        message: colors.bgCyan('Please provide contribution guidelines.'),
    },
    {
        type: 'input',
        name: 'test',
        message: colors.bgMagenta('Please provide test instructions.'),
    },
    {
        type: 'input',
        name: 'license',
        message: colors.bgYellow('Please provide license information.'),
    },
    {
        type: 'input',
        name: 'github',
        message: colors.bgBlue('Please provide your GitHub username.'),
    },
    {
        type: 'input',
        name: 'email',
        message: colors.bgRed('Please provide your email address.'),

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('File written successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readme = `
        # ${answers.name}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contribution}

## Tests
${answers.test}

## License
${answers.license}

## Questions
If you have any questions, feel free to reach out to me:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
        `;
        writeToFile('README.md', readme);
    })
    .catch((error) => {
        console.error('Error prompting for input:', error);
    });
}

// Function call to initialize app
init();