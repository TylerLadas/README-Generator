// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license === "none") {
    return ""
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-<blue>)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {

};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}

## Description

## Table of Contents

## Installation

## Usage

## License

## Contributing

## Tests

## Questions

`;
}

module.exports = generateMarkdown;
