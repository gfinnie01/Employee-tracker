const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const sql = require("./db/connect");
const helper = require("./lib/helper")
const cTable = require("console.table");

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
    const choicesAdd = await helper.businessChoices();
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

 const viewBusiness = () => {
    sql.getBusiness()
  
    .then(([rows]) => {
      console.log('\n');
      console.log(cTable.getTable(rows));
    })
  
    .then(()=> {
        chooseRequest();
    }) 
  }

  const viewRoles = () => {
    sql.getRoles()
  
    .then(([rows]) => {
      console.log('\n');
      console.log(cTable.getTable(rows));
    })
  
    .then(()=> {
        chooseRequest();
    }) 
  }

  const viewEmployees = () => {
    sql.getEmployees()
  
    .then(([rows]) => {
      console.log('\n');
      console.log(cTable.getTable(rows));
    })
  
    .then(()=> {
        chooseRequest();
    }) 
  }
  

 const chooseRequest = () => {
    inquirer.prompt([
        {
          type: 'list',
          name: 'request',
          message: 'What would you like to do?',
          choices: ['Add a Department', 
                    'Add an Employee', 
                    'Add a Role',
                    'Update Employees Role',
                    'View All Departments', 
                    'View All Employees', 
                    'View All Roles', 
                   ],
          loop: false,
        },
    ])
  
    .then((data) => {
        const {request} = data;
        console.log(request);
      switch (request) {
          case 'Add a Department':
            newBusiness();
            break;
          case 'Add a Role':
            newRole();
            break;
          case 'Add an Employee':
            newEployee();
            break;
          case 'Update Employees Role':
            updateEmployeesRole();
            break;
          case 'View All Departments':
            viewBusiness();
            break;
          case 'View All Employees':
            viewEmployees();
            break;
          case 'View All Roles':
            viewRoles();
            break;         
      
          default:
              break;
      }
    })
  }
  
  chooseRequest();