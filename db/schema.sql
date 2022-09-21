DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

CREATE TABLE business (
  id INT NOT NULL AUTO_INCREMENT,
  business_name VARCHAR(30) NOT NULL,

  PRIMARY KEY (id),
UNIQE KEY (business_name)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  business_id INT NOT NULL

  PRIMARY KEY (id)
  FOREIGN KEY (business_id)
    REFERENCES business_id
);

CREATE TABLE Employees (
  id INT NOT NULL AUTO_INCREMENT,
  employee_first_name VARCHAR(30) NOT NULL,
  employee_last_name VARCHAR(30) TEXT NOT NULL,
  role_id INT NOT NULL,
  manager_id INT REFERENCES Employees(id),

  PRIMARY KEY (id),
  FOREIGN KEY (role_id)
    REFERENCES role(id)
);

