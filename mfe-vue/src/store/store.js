import { reactive } from 'vue';

export const todoStore = reactive({
  todos:[],
  todosPage:[],
  total:0,
  updateTime:new Date(),
  async get() {
    try{
      const response = await fetch('http://localhost:3000/todos');
      if(!response.ok){
        throw new Error('Network resCategories was not ok: ' + response.statusText);
      }
      this.todos = await response.json();
      this.updateTime =new Date();
    }catch (e) {
      console.log(e);
    }
  },
  async getPage(paramSort, paramOffset, paramLimit, paramFilter){
    const url = `http://localhost:3000/todos?${paramSort}&${paramOffset}&${paramLimit}&${paramFilter}`;
    console.log(`url: ${url}`);
    try{
      const response = await fetch(url, {
        headers: { Prefer: 'count=exact' }
      });
      if(!response.ok){
        throw new Error('Network resCategories was not ok: ' + response.statusText);
      }
      this.todosPage = await response.json();
      const range = response.headers.get('Content-Range');

      this.total = parseInt(range.split('/').pop());

    }catch (e) {
      console.log(e);
    }
  },
  async update(todo){
    try{
      const response = await fetch(`http://localhost:3000/todos?id=eq.${todo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      });
      if(!response.ok){
        throw new Error('Network resCategories was not ok: ' + response.statusText);
      }
      this.updateTime =new Date();
      this.todosPage.find(t => t.id === todo.id).completed = todo.completed;
    }catch (e) {
      console.log(e);
    }
  }
});

export const categoryStore = reactive({
  categories: [],
  updateTime:new Date(),
  async get() {
    try {
      const response = await fetch('http://localhost:3000/categories?order=id.asc');
      if(!response.ok){
        throw new Error('Network resCategories was not ok: ' + response.statusText);
      }
      this.categories = await response.json();
      this.updateTime =new Date();
    }catch (e) {
      console.log(e);
    }
  }
});

