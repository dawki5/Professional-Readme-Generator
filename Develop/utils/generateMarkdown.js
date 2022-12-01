// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:

  [![license](https://img.shields.io/badge/License-${data.license}-blue)](https://shields.io)
  
  ## Table of Contents 

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact Information](#Contact-Information)

  ## Description:
  ${data.descriptionprompt}

  ## Installation:
  ${data.installationprompt}

  ## Usage:
  ${data.usageprompt}

  ## License:
  ${data.licensingprompt}

  ## Contribution:
  ${data.contributionprompt}

  ## Testing:
  ${data.testingprompt}

  ## Contact Information:
  - Github: [${data.githubuser}](https://github.com/${data.githubuser})
  - Email: ${data.emailprompt} `;

}


module.exports = generateMarkdown;
