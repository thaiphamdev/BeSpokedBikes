--DROP TABLE table_name;

CREATE TABLE Product (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    manufacturer VARCHAR(50) NOT NULL,
    style VARCHAR(50) NOT NULL,
    purchase_price DECIMAL(10, 2) NOT NULL,
    sale_price DECIMAL(10, 2) NOT NULL,
    qty_on_hand INT NOT NULL,
    commission_percentage DECIMAL(5, 2) NOT NULL
);

INSERT INTO Product (name, manufacturer, style, purchase_price, sale_price, qty_on_hand, commission_percentage)
VALUES ('Road Bike', 'Trek', 'Casual', 200.00, 250.00, 10, 10.00);
INSERT INTO Product (name, manufacturer, style, purchase_price, sale_price, qty_on_hand, commission_percentage)
VALUES ('Road Bike', 'Trek', 'Sport', 300.00, 400.00, 15, 15.00);
INSERT INTO Product (name, manufacturer, style, purchase_price, sale_price, qty_on_hand, commission_percentage)
VALUES ('Mountain Bike', 'Trek', 'Sport', 400.00, 550.00, 5, 12.00);

CREATE TABLE Salesperson (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    start_date DATE NOT NULL,
    termination_date DATE,
    manager VARCHAR(50)
);

INSERT INTO Salesperson (first_name, last_name, address, phone, start_date, termination_date, manager)
VALUES ('Steve', 'Doe', '123 Main St, Alpharetta, GA', '678-555-1234', '2022-10-01', NULL, 'Matt Smith');
VALUES ('Samantha', 'Jang', '777 Main St, Duluth, GA', '770-555-1234', '2020-07-21', NULL, 'Matt Smith');

CREATE TABLE Customer (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    start_date DATE NOT NULL
);

INSERT INTO Customer (first_name, last_name, address, phone, start_date)
VALUES ('Alice', 'Johnson', '456 Elm St, Springfield, IL', '226-555-9876', '2024-10-31');
VALUES ('Bob', 'Jing', '2303 Road St, Springfield, CA', '222-555-9876', '2024-10-31');
VALUES ('Charles', 'Yang', '1202 Washington St, Springfield, CO', '346-555-9876', '2024-10-31');

CREATE TABLE Sales (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT NOT NULL,
    salesperson_id BIGINT NOT NULL,
    customer_id BIGINT NOT NULL,
    sales_date DATE NOT NULL,
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (salesperson_id) REFERENCES Salesperson(id),
    FOREIGN KEY (customer_id) REFERENCES Customer(id)
);

INSERT INTO Sales (product_id, salesperson_id, customer_id, sales_date)
VALUES (1, 1, 1, '2024-10-31');
VALUES (2, 1, 2, '2024-09-22');
VALUES (3, 1, 3, '2024-09-27');
VALUES (3, 2, 1, '2024-10-31');
VALUES (1, 2, 2, '2024-10-09');
VALUES (3, 2, 3, '2024-10-27');



CREATE TABLE Discount (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT NOT NULL,
    begin_date DATE NOT NULL,
    end_date DATE NOT NULL,
    discount_percentage DECIMAL(5, 2) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES Product(id)
);

INSERT INTO Discount (product_id, begin_date, end_date, discount_percentage)
VALUES (1, '2024-11-01', '2024-12-01', 15.00);

