INSERT INTO departments (department_name)
VALUES
('Accounting'),
('IT'),
('Sales and Marketing'),
('Call Center');

INSERT INTO roles (title, salary, department_id)
VALUES
('Accountant', 70000, 1),
('CFO', 400000, 1),
('Full Stack Developer', 85000, 2),
('CIO', 180000, 2),
('Marketing Coordinator', 75000, 3),
('Sales Lead', 100000, 3),
('Representative', 40000, 4),
('Call Center Manager', 60000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Juniper', 'Roads', 8, null),
('Ashley', 'Tipton', 7, 1),
('Rebekka', 'Rom', 7, 1),
('Feb', 'Rurary', 6, null),
('Jane', 'Doevanofski', 5, 4),
('Larry', 'Lobster', 4, null),
('John', 'Snov', 3, 6),
('Sandy', 'Pitts', 2, null),
('Seril', 'Figgis', 1, 8);