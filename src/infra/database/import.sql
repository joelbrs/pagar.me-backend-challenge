CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL,
    description VARCHAR(255) NOT NULL,
    payment_method VARCHAR(20) CHECK (payment_method IN ('debit_card', 'credit_card')) NOT NULL,
    card_number VARCHAR(4) NOT NULL,
    card_holder_name VARCHAR(100) NOT NULL,
    card_expiration_date DATE NOT NULL,
    card_cvv VARCHAR(3) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    clientId INTEGER NOT NULL,

    FOREIGN KEY (clientId) REFERENCES clients(id)
);

CREATE TABLE payables (
    id SERIAL PRIMARY KEY,
    status VARCHAR(20) CHECK (status IN ('paid', 'waiting_funds')) NOT NULL,
    payment_date DATE NOT NULL,
    fee DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    clientId INTEGER NOT NULL,
    transactionId INTEGER NOT NULL,

    FOREIGN KEY (clientId) REFERENCES clients(id),
    FOREIGN KEY (transactionId) REFERENCES transactions(id)
);

INSERT INTO clients (name) VALUES ('John Doe'), ('Bob Brown'), ('Maria Green');

INSERT INTO transactions (amount, description, payment_method, card_number, card_holder_name, card_expiration_date, card_cvv, clientId)
VALUES 
(100.50, 'Compra de eletrônicos', 'credit_card', '1234', 'John Doe', '2024-12-31', '123', 1),
(250.75, 'Compra de roupas', 'debit_card', '5678', 'Bob Brown', '2025-06-30', '456', 2),
(75.00, 'Compra de livros', 'credit_card', '9101', 'Maria Green', '2023-11-30', '789', 3);

INSERT INTO payables (status, payment_date, fee, clientId, transactionId)
VALUES 
('paid', '2024-08-01', 0.03, 1, 1),
('waiting_funds', '2024-08-15', 0.05, 2, 2),
('paid', '2024-08-10', 0.03, 3, 3);