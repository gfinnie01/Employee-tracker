const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const sql = require("./db/connect");
const helper = require("./lib/helper")


const newBusiness = async () => {
const business = await inquirer.prompt([
    {
        type:"input",
        name: "name",
        message: "what is the name of your business?",

    },
]);
await sql.addBusiness(business);
chooseRequest();
}

const newEployee = async () => {
    const roleAdd = await helper.roleChoices();
    const managementAdd = await helper.managementChoices();
    const employee = await inquirer.prompt([
        {
            type: 'input',
            name: 'enployee_first_name',
            message: 'what is the Employees first name?'
        },
        {
            type: 'input',
            name: 'enployee_last_name',
            message: 'what is the Employees last name?'
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'what is the employees role',
            Choices: roleAdd,
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'who is the employees manager?',
            Choices: roleAdd,
        }
    ]);
    await sql.addEmployee(employee);
    chooseRequest();
}
 const newRole = async ()=> {
    const choicesAdd = await helper.debtChoices();
    const role = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what is the role?',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'what is the salary?',
        },
        {
            type: 'list',
            name: 'business_id',
            message: 'what department is the role in?',
            Choices: choicesAdd,
        }
    ]);
    await sql.addRole(role);
    chooseRequest();
 }