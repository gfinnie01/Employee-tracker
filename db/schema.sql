DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

CREATE TABLE business (
  id INT NOT NULL AUTO_INCROMENT,
  business_name VARCHAR(30) NOT NULL,

  PRIMARY KEY (id),
UNIQE KEY (business_name)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCROMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  business_id INT NOT NULL

  PRIMARY KEY (id)
  FOREIGN KEY (business_id)
    REFERENCES business_id
);

CREATE TABLE Employees (
  role_id INT NOT NULL AUTO_INCROMENT,
  employee_first_name VARCHAR(30) NOT NULL,
  employee_last_role VARCHAR(30) TEXT NOT NULL,
  department BOOLEAN NOT NULL,
  manager_id TEXT NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (role_id)
    REFERENCES role(id)
);

