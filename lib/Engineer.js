const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(answers){
        super(answers)
this.gitHubaccount = answers.github;
    };

    getOptional(){
        return  'gitHub: <a href="https://github.com/'+ this.gitHubaccount +'";>'+ this.gitHubaccount +'</a>'
    };

    getRole(){
        return "Engineer";
    };
};

module.exports = Engineer;
