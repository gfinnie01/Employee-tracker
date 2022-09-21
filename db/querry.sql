const db = require('./connection');

class GNTQuery {
constroctor(db){
    this.db =db;
}
addDept(data) {
    const values = [data.name];
    return this.db
    .promise()
    .query(
        INSERT INTO business (business_name) VALUES(?),
        values
    );
}
addRole(data) {
    consr values = [data.title, data.salary, data.business_id]
    return this.db
    .promise()
    .query(
        INSERT INTO role (title, salary, business_id) VALUES(?,?,?) ,
        values
    );
}
addEmployee(data) {
    const values = [data.employee_first_name, data.employee_last_name, data.role_id, data.manager_id];
    return this.db
    .promise()
    .query(
        INSERT INTO Employee (employee_first_name, employee_last_name, role_id, manager_id)
        VALUES(?,?,?,?)
    )
}
updateEmployeesRoleById(data) {
    const values = [data.role_id, data.Employee_id];
    return this.db
    .promise()
    .query(
        UPDATE employee SET manager_id = ? WHERE id = ?, 
        values
    );
}
}