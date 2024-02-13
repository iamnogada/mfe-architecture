CREATE TABLE api.categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255), -- or another length limit as required
);

INSERT INTO api.categories(name) VALUES ('House');
INSERT INTO api.categories(name) VALUES ('Work');
INSERT INTO api.categories(name) VALUES ('Leisure');
INSERT INTO api.categories(name) VALUES ('Health');
INSERT INTO api.categories(name) VALUES ('Shopping');
INSERT INTO api.categories(name) VALUES ('Other');
