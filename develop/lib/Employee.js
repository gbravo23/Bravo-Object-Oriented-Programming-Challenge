class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName(name) {
        return this.name
        console.log(name)
    };

    getId(id) {
        return this.id
        console.log(id)
    };

    getEmail(email) {
        return this.email
        console.log(email)
    };

    getRole() {
        return "employee"
    };
}

module.exports = Employee