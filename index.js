const createCards = require('./src/page-template');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');
let teamarrey = [];
let htmldata = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is his ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is his email?'
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is his phone number?'
        }
    ]).then(answers => {

        teamarrey.push(new Manager(answers));
    })
        .catch(error =>
            console.log('ERROR-->', error))
};

const promptTeam = () => {

    return inquirer.prompt([

        {
            type: 'list',
            name: 'team',
            message: 'Who else do you have in your team',
            choices: ["Engineer", "Intern"]
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is his name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is his ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is his email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is his school name?',
            when: answer => {
                if (answer.team === "Intern") {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is his gitHub?',
            when: answer => {
                if (answer.team === "Engineer") {
                    return true;
                }
            }
        },

        {
            type: 'confirm',
            name: 'addmore',
            message: 'Would you like to add another team member?',
            default: false
        }

    ]).then(Data => {

        if (Data.team === 'Engineer') {
            delete Data.team;

            teamarrey.push(new Engineer(Data));

        }
        else {
            delete Data.team;
            teamarrey.push(new Intern(Data));
        }
        if (Data.addmore) {
            promptTeam();
        }
else{
        return createCards(htmldata, teamarrey), writeFile() ;
}
    })


}

const writeFile = () => {


    fs.writeFile('./dist/index.html', htmldata.join(""), err => {
        if (err) {
            console.log(err);
        }
    });
};


promptManager()
    .then(promptTeam)
    .then()
    




