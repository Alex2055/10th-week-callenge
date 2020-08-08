const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(answers){
        super(answers)
this.gitHubaccount = answers.github;
    };

    getOptional(){
        return this.gitHubaccount;
    };

    getRole(){
        return "Engineer";
    };
};

module.exports = Engineer;
