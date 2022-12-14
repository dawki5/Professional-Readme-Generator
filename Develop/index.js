// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const Mdgenerator = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [

//Project prompt
 {
    type: 'input',
    name: 'titleprompt',
    message: 'Please enter a title for this project',
    validate: projectInput => {
        if (projectInput) {
            return true;
        } else {
            console.log('A project title is needed.');
            return false;
        }
    }
},
//Description prompt
{
    type: 'input',
    name: 'descriptionprompt',
    message: 'Please provide a description for this project',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('A description needs to be provided');
            return false;
        }
    }
},
//Installation prompt
{
    type: 'input',
    name: 'installationprompt',
    message: 'How is this project installed?',
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('An installation guide needs to be provided');
            return false;
        }
    }
},
//Usage prompt
{
    type: 'input',
    name: 'usageprompt',
    message: 'How is this project used?',
    validate: usagePrompt => {
        if (usagePrompt) {
            return true;
        } else {
            console.log('Please provide information on how to use this project');
            return false;
        }
    }
},
//Contribution prompt
{
    type: 'input',
    name: 'contributionprompt',
    message: 'How can users contribute to this project?',
    validate: contributionPrompt => {
        if (contributionPrompt) {
            return true;
        } else {
            console.log('Please provide information on how to contribute to this project');
            return false;
        }
    }
},
//Test prompt
{
    type: 'input',
    name: 'testingprompt',
    message: 'How do you test this project?',
    validate: testPrompt => {
        if (testPrompt) {
            return true;
        } else {
            console.log('Please describe how to test this project');
            return false;
        }
    }
},
// License prompt
{
    type: 'list',
    name: 'license',
    message: 'Select a license for your project',
    choices: ['Apache', 'MIT', 'Mozilla-Public', 'None'],
    validate: licensePrompt => {
        if (licensePrompt) {
            return true;
        } else {
            console.log('Please select a license');
            return false;
        }
    }
},
//GitHub User Prompt
{
    type: 'input',
    name: 'githubuser',
    message: 'Enter your GitHub Username',
    validate: githubuserPrompt => {
        if (githubuserPrompt) {
            return true;
        } else {
            console.log('Please enter your GitHub username');
            return false;
        }
    }
},
// Email Prompt
{
    type: 'input',
    name: 'emailprompt',
    message: 'Please input an Email address?',
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {  fs.writeFile(fileName, data, (err) => {
    if (err)
        throw err;
    console.log('Information has been updated to the readme file')
});
};
    

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        console.log(data)
        writeToFile("README.md", Mdgenerator(data));
    });
};



// Function call to initialize app
init();
