// TODO: Create a function that returns a license based on which license is passed in
function renderLicense(license) {}



// TODO: Create a function to generate markdown for README
function Mdgenerator(data) {
  return `# ${data.titleprompt}

  ## License:

  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://opensource.org/)

  
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

  ## Contribution:
  ${data.contributionprompt}

  ## Testing:
  ${data.testingprompt}

  ## Contact Information:
  - Github: [${data.githubuser}](https://github.com/${data.githubuser})
  - Email: ${data.emailprompt} `;

}


module.exports = Mdgenerator;
