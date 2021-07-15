// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license === "none") {
    return "";
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-<blue>)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license === "none") {
    return "";
  } else {
    return `\n* [License](#license)\n`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license === "none") {
    return "";
  } else {
    return `## License
    
    Licensed for use with the ${data.license} license.`;
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install program please run:
${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

To test, please run:
${data.test}

## Questions

To view my other work, go to: 
[${data.github}](https://github.com/${data.github})

For questions and inquiries contact me at:
${data.email}

`;
}

module.exports = generateMarkdown;
