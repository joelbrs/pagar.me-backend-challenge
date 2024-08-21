CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL,
    description VARCHAR(255) NOT NULL,
    payment_method VARCHAR(20) CHECK (payment_method IN ('debit_card', 'credit_card')) NOT NULL,
    card_number VARCHAR(4) NOT NULL,
    card_holder_name VARCHAR(100) NOT NULL,
    card_expiration_date DATE NOT NULL,
    card_cvv VARCHAR(3) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payables (
    id SERIAL PRIMARY KEY,
    transaction_id INT REFERENCES transactions(id),
    status VARCHAR(20) CHECK (status IN ('paid', 'waiting_funds')) NOT NULL,
    payment_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    fee DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
