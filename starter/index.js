const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Array to store team members
const teamMembers = [];

// Prompt to gather information for the team manager
function promptManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the team manager's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter the team manager's ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the team manager's email:",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the team manager's office number:",
      }
    ])
    .then((answers) => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      teamMembers.push(manager);
      displayMenu();
    });
}

// Prompt to display the menu options
function displayMenu() {
  inquirer
    .prompt({
      type: 'list',
      name: 'menuOption',
      message: 'Select an option:',
      choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
    })
    .then((choice) => {
      if (choice.menuOption === 'Add an engineer') {
        promptEngineer();
      } else if (choice.menuOption === 'Add an intern') {
        promptIntern();
      } else {
        finishBuildingTeam();
      }
    });
}

// Prompt to gather information for adding an engineer
function promptEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the engineer's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email:",
      },
      {
        type: 'input',
        name: 'github',
        message: "Enter the engineer's GitHub username:",
      }
    ])
    .then((answers) => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      teamMembers.push(engineer);
      displayMenu();
    });
}

// Prompt to gather information for adding an intern
function promptIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the intern's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter the intern's ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email:",
      },
      {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school:",
      }
    ])
    .then((answers) => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      teamMembers.push(intern);
      displayMenu();
    });
}

// Function to finish building the team, generate HTML, and write to file
function finishBuildingTeam() {
  const generatedHTML = render(teamMembers);
  const outputPath = 'output/team.html';

  fs.writeFile(outputPath, generatedHTML, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Team HTML file has been successfully generated and saved!');
    }
  });
}

// Start the application by prompting for the team manager's information
promptManager();
