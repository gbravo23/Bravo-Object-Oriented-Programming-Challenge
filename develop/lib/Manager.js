const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, officeNumber, email) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"
    }

    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber
    }
}
module.exports = Manager