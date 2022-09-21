const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const sql = require("./db/connect");
const helper = require("./lib/helper")

const newBusiness = async () => {
const business = await inquirer.prompt([
    {
        type:'input',
        name: 'name',
        message: 'what is the name of your business?',

},
]);
await sql.addBusiness(business);
chooseRequest();
};

const newEployee = async () => {
    const roleAdd = await helper.roleChoices();
    const mgmtAdd = await helper.managementChoices();
    const employee = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'what is the Employees first name?'
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'what is the employees role',
            Choices: roleAdd,
            loop: false,
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'who is the employees manager?',
            Choices: roleAdd,
            loop: false,
        }
    ]);
    await sql.addEmployee(employee);
    chooseRequest();
}