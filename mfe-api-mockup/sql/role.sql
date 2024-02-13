create schema zmp;
create role web_anon nologin;
-- create table: todos, categories

grant usage on schema api to web_anon;
grant select on zmp.todos to web_anon;
grant insert on zmp.todos to web_anon;
grant update on zmp.todos to web_anon;
grant delete on zmp.todos to web_anon;
grant select on zmp.todos to admin;
grant insert on zmp.todos to admin;
grant update on zmp.todos to admin;
grant delete on zmp.todos to admin;

grant web_anon to admin;

set search_path to zmp, public;