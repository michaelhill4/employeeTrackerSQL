INSERT INTO department (name)
VALUES ("Sales Manager"), 
        ("District Manager"), 
        ("Operations Manager");

INSERT INTO roles (title, salary, department_id)
VALUE ("Store Manager", 50000.00, 1), 
        ("Assistant Store Manager", 45000.00, 2), 
        ("Sales Consultant", 40000.00, 1), 
        ("Sales intern", 20000.00, 2), 
        ("District Manager", 80000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUE ("Aaron", "Giancarlo", 1, null), 
        ("Josh", "Gleyber", 2, null), 
        ("Oswald", "Jose", 4, 2), 
        ("Kyle", "Anthony", 5, 2);