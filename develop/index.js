const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRender");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");


var createdEmployees = []
const createEmployee = function () {
    const questions = inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is this employee's role?",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: "input",
            name: "name",
            message: "What is this employee's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is this employee's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is this employee's email?",
        },
    ]).then(answer => {
        if (answer.role === "Manager") {
            inquirer.prompt([{
                type: "input",
                name: "number",
                message: "What is this employee's office number?",
            }]).then(response => {
                const newManager = new Manager(answer.name, answer.id, response.number, answer.email);
                createdEmployees.push(newManager);
                addToHtml();
            });
        }
        else if (answer.role === "Engineer") {
            inquirer.prompt([{
                type: "input",
                name: "github",
                message: "What is this employee's github?",
            }]).then(response => {
                const newEngineer = new Engineer(answer.name, answer.id, response.github, answer.email);
                createdEmployees.push(newEngineer);
                addToHtml();
            });
        }
        else if (answer.role === "Intern") {
            inquirer.prompt([{
                type: "input",
                name: "school",
                message: "What is this intern's school?",
            }]).then(response => {
                const newIntern = new Intern(answer.name, answer.id, response.school, answer.email);
                createdEmployees.push(newIntern);
                addToHtml();
            });
        }
    });
}

const addToHtml = function () {
    inquirer.prompt([{
        type: "input",
        name: "more",
        message: "Would you like to add another employee? (Y/N)",
    }]).then(more_answer => {
        if (more_answer.more === "Y") {
            createEmployee();
        }
        else {
            const htmlFile = render(createdEmployees);
            fs.writeFile(outputPath, htmlFile, function (err) {
                if (err) {
                    console.log("err")
                }
                console.log("file created")
            })
        }
    })
}
createEmployee();