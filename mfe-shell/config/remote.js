

const RemoteApps =[
  {
    name: "Htmx",
    display: "Htmx",
    pathURL:"/htmx/main",
    remoteURL:"/todosx/main",
    type:"htmx"
  },
  {
    name: "Todo",
    display: "Todo",
    pathURL:"/htmx/todo",
    remoteURL:"/todosx/list",
    type:"htmx"
  },
  {
    name: "Register",
    display: "Register",
    pathURL:"/htmx/register",
    remoteURL:"/todosx/register",
    type:"htmx"
  },
  {
    name: "Category",
    display: "Category",
    pathURL:"/htmx/category",
    remoteURL:"/todosx/category/summary",
    type:"htmx"
  },
  {
    name: "todos",
    display: "Todos",
    pathURL:"/todos/main",
    remoteURL:"http://localhost:9002/bundle.js",
    type:"vue"
  },
  {
    name: "todos-category",
    display: "Todos",
    pathURL:"/todos/category",
    remoteURL:"http://localhost:9002/bundle.js",
    type:"vue"
  },
  {
    name: "todos-todos",
    display: "Todos",
    pathURL:"/todos/todos",
    remoteURL:"http://localhost:9002/bundle.js",
    type:"vue"
  },
  {
    name: "todos-register",
    display: "Todos",
    pathURL:"/todos/register",
    remoteURL:"http://localhost:9002/bundle.js",
    type:"vue"
  }
  // {
  //   name: "todos",
  //   display: "Todos",
  //   pathURL:"/todos/main",
  //   remoteURL:"http://localhost:9002/src/main.js",
  //   type:"vue"
  // }
  
];
export {RemoteApps};