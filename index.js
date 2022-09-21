const inquirer = require("inquirer");
const sql = require("./db/connect");
const helper = require("./lib/helper")

const newBusiness = async () => {
const business = await inquirer.prompt([
    {
        type:'input',
        name: 'name',
        message: 'what is the name of your business?',
        validate: (name) =>{
            if (name) {
              return true;
            } else {
              console.log(" Please Enter a business Name")
              return false;
            }
    },
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

        }
    ])
}