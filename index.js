// Multiple consts to make the generator work
const inquirer = require('inquirer');
const fs = require('fs');
const { animationFrame } = require('rxjs');

// Generates Answers based off of user input
const questions = [
    {
        // Generates title
        type: 'input',
        name: 'title',
        message: 'Enter title of README.',
    } , {
        // Generates description text
        type: 'input',
        name: 'description',
        message: 'Enter short description for README.',
    } , {
        // Will be user in later functions to generate the badge amd
        type: 'list',
        name: 'license',
        message: 'What license do you wish to use?',
        choices: ["MIT", "BSD", "GNU"],
    } , {
        // Will generate text for installation
        type: 'input',
        name: 'installation',
        message: 'Enter how to install README Generator',
    } , {
        // Will generate explaination text
        type: 'input',
        name: 'usage',
        message: 'Explain how to use code in README.',
    } , {
        // Will generate names of those who contributed
        type: 'input',
        name: 'contributing',
        message: 'Enter names of those who contributed to the code, enter "N/A" if there is none.',
    } , {
        // Will generate text or pictues of test results
        type: 'input',
        name: 'test',
        message: 'Enter test results/picture of README.',
    } , {
        // Will put profile link in href
        type: 'input',
        name: 'profileLink',
        message: 'Enter Github profile link',
    } , {
        // Will generate your profile name to create hyperlink to profile
        type: 'input',
        name: 'profileName',
        message: 'Enter Github profile name',
    } , {
        // Will generate hyperlink for your email
        type: 'input',
        name: 'email',
        message: 'Enter Email',
    } , {
        // Will input year for license
        type: "input",
        name: "year",
        message: "Enter the current year for license.",
    },  {
        // Will input full name for license
        type: "input",
        name: "name",
        message: "Enter your full name for license.",
    },
];


// Generates README file
function readmeGen(answers) {

    // Generates Lincense Badge based off of answers
    function licenseBdg(answers) {
        if (answers.license === "MIT")
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  
        if (answers.license === "GNU")
            return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  
        if (answers.license === "BSD")
            return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    };

    // Generates License Text based off of answers
    function licenseTxt(answers) {
        // Will generate this text is license chosen is MIT
        if (answers.license === "MIT")
            return `Copyright (c) ${answers.year} ${answers.name}
        
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
        
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
        
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.`;
        
        // Will generate this text is license chosen is GNU
        if (answers.license === "GNU")
            return `Copyright (C) ${answers.year}  ${answers.name}
      
            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU General Public License as published by
            the Free Software Foundation, either version 3 of the License, or
            (at your option) any later version.
      
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU General Public License for more details.
      
            You should have received a copy of the GNU General Public License
            along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
        
        // Will generate this text is license chosen is BSD
        if (answers.license === "BSD")
            return `Copyright 1992-${answers.year} The FreeBSD Project.

            Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
            Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
            Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
            THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      
            The views and conclusions contained in the software and documentation are those of the authors and should not be interpreted as representing official policies, either expressed or implied, of the FreeBSD Project.`
    };

// Writes the README files
fs.writeFile('README.md', 

`# ${answers.title}\n

${licenseBdg(answers)}\n

## Description\n

### ${answers.description}\n
____________________________________________\n
### Table of Contents\n
1. [Installation](#installation)\n
2. [Usage](#usage)\n
3. [Contributing](#contributing)\n
4. [Tests](#tests)\n
5. [Questions](#questions)\n
6. [License](#license)\n
____________________________________________\n
### Installation\n 
${answers.installation} <br>\n 
____________________________________________\n
### Usage\n 
${answers.usage} <br>\n
____________________________________________\n 
### Contributing\n 
${answers.contributing} <br>\n
____________________________________________\n 
### Tests\n 
${answers.test} <br>\n
____________________________________________\n 
### Questions\n
You can reach me for questions at:\n 
Github Profile: <a href="${answers.profileLink}">${answers.profileName}</a>\n
Email: ${answers.email}
____________________________________________\n 
### License\n 
${licenseTxt(answers)}`, (err) => err ? console.error(err) : console.log('Successfully saved to file!')
    );
};

// Runs the readme Generator based off of the user answers to the questions
inquirer.prompt(questions).then(readmeGen);