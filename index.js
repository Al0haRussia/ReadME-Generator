const inquirer = require('inquirer');
const fs = require('fs');
const { animationFrame } = require('rxjs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter title of README.',
    } , {
        type: 'input',
        name: 'description',
        message: 'Enter short description for README.',
    } , {
        type: 'input',
        name: 'tablecontent',
        message: 'Enter list of Table of contents for README.',
    } , {
        type: 'input',
        name: 'installation',
        message: 'Enter how to install README Generator',
    } , {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use code in README.',
    } , {
        type: 'input',
        name: 'license',
        message: 'Enter license for README.',
    } , {
        type: 'input',
        name: 'contributing',
        message: 'Enter names of those who contributed to the code, enter "N/A" if there is none.',
    } , {
        type: 'input',
        name: 'test',
        message: 'Enter test results/picture of README.',
    } , {
        type: 'input',
        name: 'questions',
        message: 'Enter frequently asked questions about README. enter "N/A" if none exist.',
    }
];

function readmeGen(answers) {
fs.writeFile('README.md', 
`<h1>${answers.title}</h1> <br>\n
<h2>${answers.description}</h2> <br>\n
____________________________________________\n
### Table of Contents\n
${answers.tablecontent} <br>\n
____________________________________________\n
### Installation\n 
${answers.installation} <br>\n 
____________________________________________\n
### Usage\n 
${answers.usage} <br>\n
____________________________________________\n 
### License\n 
${answers.license} <br>\n
____________________________________________\n 
### Contributing\n 
${answers.contributing} <br>\n
____________________________________________\n 
### Test\n 
${answers.test} <br>\n
____________________________________________\n 
### Questions\n 
${answers.questions}`, (err) => err ? console.error(err) : console.log('Successfully saved to file!')
    );
};

inquirer.prompt(questions).then(readmeGen);