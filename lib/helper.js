const sql = require('../db/query_lib');
const deptChoices = async () => {
    const tempAdd =await sql.getDepths();
    const choices = tempAdd[0];
    let choicesAdd = [];
    choices.array.forEach(element => {
        let valueObj = {
            name: element.department_name,
            value: element.id
        }
        choicesAdd.push(valueObj);
    });
    return choicesAdd;
}