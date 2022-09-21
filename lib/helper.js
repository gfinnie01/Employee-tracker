const sql = require('../db/connect');
const businessChoices = async () => {
  const tempArr = await sql.getDepts();
  const choice = tempArr[0];
  let choicesArr = [];
  choice.forEach(element => {
    let valueObj = {
      name: element.business_name,
      value: element.id
    }
    choicesArr.push(valueObj);
  });
  return choicesArr;
}
const managementChoices = async () => {
  const tempArr = await sql.getManagers();
  const choice = tempArr[0];
  let choiceArr = [];
  choice.forEach(element => {
    let valueObj = {
      name: element.manager_name,
      value: element.id
    }
    choiceArr.push(valueObj);
  });
  return choiceArr;
}

const notmanagementChoices = async () => {
  const tempArr = await sql.getNonManagers();
  const choice = tempArr[0];
  let choiceArr = [];
  choice.forEach(element => {
    let valueObj = {
      name: element.employee_name,
      value: element.id
    }
    choiceArr.push(valueObj);
  });

  return choiceArr;
}
const roleChoices = async () => {
  const tempArr = await sql.getRoleIds();
  const choices = tempArr[0];
  let choicesArr = [];
  choices.forEach(element => {
    let valueObj = {
      name: element.title,
      value: element.id
    }
    choicesArr.push(valueObj);
  });
  return choicesArr;
}
const employeeChoices = async () => {
  const tempArr = await sql.getEmpRaw();
  const choices = tempArr[0];
  let choicesArr = [];
  choices.forEach(element => {
    let valueObj = {
      name: element.employee_first_name + ' ' + element.employee_last_name,
      value: element.id
    }
    choicesArr.push(valueObj);
  });
  return choicesArr;
}
module.exports = { businessChoices, managementChoices, roleChoices, employeeChoices, notmanagementChoices };