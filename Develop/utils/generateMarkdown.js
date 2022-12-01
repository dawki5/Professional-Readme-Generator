// TODO: Create a function that returns a license based on which license is passed in
function renderLicense(license) {
  if (license === 'MIT')
  return '![License : MIT](https://img.shields.io/badge/License-MIT-blue)(https://opensource.org/licenses/MIT)'
 }

 if (license === 'Apache') {
  return '![License : Apache](https://img.shields.io/badge/License-Apache-blue)(https://opensource.org/licenses/Apache-2.0)'
 }
 if (license === 'Mozilla-Public') {
  return '![License : Mozilla-Public](https://img.shields.io/badge/License-Mozilla-blue)(https://opensource.org/licenses/MPL-2.0)'
 }
 if (license === 'None') {
 return '![License : None](https://img.shields.io/badge/License-None-red)(https://opensource.org/)'
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:

${renderLicense(data.license)}

  
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
