const todos = require('./data/todos.json');
const categories = require('./data/categories.json');
// Something more

module.exports = () => ({
  todos: todos,
  categories: categories
});