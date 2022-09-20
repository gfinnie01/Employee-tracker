INSERT INTO role (title, salary, business_id)
VALUES
("Sales Person", 11000, 1),
("Sales Manager", 12000, 1),
("Lead Engineer", 13000, 2),
("Software Engineer", 13000, 2),
("Accountant", 13000, 3),
("Account Manager", 13000, 3),
("legal Team Lead", 13000, 4),
("Lawyer", 13000, 4);

INSERT INTO business (business_name)
VALUES 
    ("Sales"),
    ("Engineer"),
    ("Finance"),
    ("leagal");

INSERT INTO Employees (employee_first_name, employee_last_name, role_id,manager_id)
VALUES 
    ("Aaminah","Terry", 1, NULL)
    ("Miller","Cullen", 2, 1),
    ("Haleemah","O'Moore", 3, NULL),
    ("Jayda","Cunningham", 4, 2),
    ("Tilly-Mae","Campbell", 5, NULL),
    ("Willow","Hopkins", 6, 3),
    ("Nida","Cooley", 7, NULL),
    ("Fox","Donovan", 8, 4);
