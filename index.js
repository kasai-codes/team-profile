const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];


function Questions() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'projectTitle',
        },

        {
            type: 'input',
            message: 'Please write a description of your project:',
            name: 'description',
        },


        {
            type: 'input',
            message: 'Please provide installation instructions if any:',
            name: 'installation',
        },

    ])
}