const Employee = require('./Employee');

class Manager extends Employee {
    constructor(answers) {
        super(answers)
        this.officeNumber = answers.number;
    }

    getOptional() {
        return this.officeNumber;
    };
    getRole() {
        return 'Manager';
        // Returns 'Manager'
    }

};



module.exports = Manager;