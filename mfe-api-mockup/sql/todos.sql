CREATE TABLE api.todos (
    id SERIAL PRIMARY KEY,
    todo VARCHAR(255), -- or another length limit as required
    categoryId INTEGER,
    completed BOOLEAN DEFAULT FALSE
);

INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Nam ultrices, libero non mattis pulvinar, nulla ped',6,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Fusce consequat. Nulla nisl. Nunc nisl.',4,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Nullam sit amet turpis elementum ligula vehicula co',5,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Mauris enim leo, rhoncus sed, vestibulum sit amet,',4,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Aliquam quis turpis eget elit sodales scelerisque.',3,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Vestibulum ac est lacinia nisi venenatis tristique.',2,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Phasellus sit amet erat. Nulla tempus. Vivamus in f',1,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Aenean fermentum. Donec ut mauris eget massa tempor',6,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Vestibulum ac est lacinia nisi venenatis tristique.',5,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Proin interdum mauris non ligula pellentesque ultri',5,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Maecenas ut massa quis augue luctus tincidunt. Null',6,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Fusce consequat. Nulla nisl. Nunc nisl.Duis biben',1,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Phasellus in felis. Donec semper sapien a libero. N',5,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Maecenas tristique, est et tempus semper, est quam',4,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Fusce consequat. Nulla nisl. Nunc nisl.Duis biben',5,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('In quis justo. Maecenas rhoncus aliquam lacus. Morb',3,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Aliquam quis turpis eget elit sodales scelerisque.',3,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Sed ante. Vivamus tortor. Duis mattis egestas metus',3,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('In hac habitasse platea dictumst. Morbi vestibulum,',2,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Cum sociis natoque penatibus et magnis dis parturie',4,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Curabitur gravida nisi at nibh. In hac habitasse pl',6,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Sed ante. Vivamus tortor. Duis mattis egestas metus',6,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Curabitur gravida nisi at nibh. In hac habitasse pl',1,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Curabitur in libero ut massa volutpat convallis. Mo',3,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Duis bibendum. Morbi non quam nec dui luctus rutrum',4,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Duis bibendum. Morbi non quam nec dui luctus rutrum',5,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Fusce posuere felis sed lacus. Morbi sem mauris, la',6,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Duis bibendum. Morbi non quam nec dui luctus rutrum',6,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('In quis justo. Maecenas rhoncus aliquam lacus. Morb',5,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Etiam vel augue. Vestibulum rutrum rutrum neque. Ae',3,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Proin eu mi. Nulla ac enim. In tempor, turpis nec e',2,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Aenean lectus. Pellentesque eget nunc. Donec quis o',1,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Quisque id justo sit amet sapien dignissim vestibul',6,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Lorem ipsum dolor sit amet, consectetuer adipiscing',4,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Cras non velit nec nisi vulputate nonummy. Maecenas',6,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Duis bibendum. Morbi non quam nec dui luctus rutrum',3,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Nam ultrices, libero non mattis pulvinar, nulla ped',5,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Duis consequat dui nec nisi volutpat eleifend. Done',1,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Cras mi pede, malesuada in, imperdiet et, commodo v',2,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Etiam vel augue. Vestibulum rutrum rutrum neque. Ae',2,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Maecenas leo odio, condimentum id, luctus nec, mole',6,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('In hac habitasse platea dictumst. Morbi vestibulum,',5,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Phasellus in felis. Donec semper sapien a libero. N',3,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Proin interdum mauris non ligula pellentesque ultri',5,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Duis bibendum. Morbi non quam nec dui luctus rutrum',6,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Proin leo odio, porttitor id, consequat in, consequ',2,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('In sagittis dui vel nisl. Duis ac nibh. Fusce lacus',2,'true');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Curabitur gravida nisi at nibh. In hac habitasse pl',4,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Vestibulum ac est lacinia nisi venenatis tristique.',5,'false');
INSERT INTO api.todos(todo,categoryId,completed) VALUES ('Maecenas tristique, est et tempus semper, est quam',5,'true');


