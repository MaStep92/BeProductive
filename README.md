## Task Manager with time tracker

This application has been uploaded to the GitHub Pages.
You can test it by clicking on [this link.](https://mastep92.github.io/)

### Manual setting:

#### Installation

1 - Clone project
```
$ mkdir BeProductive
$ cd BeProductive
$ git clone https://github.com/MaStep92/BeProductive.git
```

2 - Install dependencies
```
$ cd BeProductive
$ npm i
```

3 - Run dev server
```
$ cd ../BeProductive
$ npm run start
```
Go to [http://localhost:4000/](http://localhost:4000/) and see what happens 😉.

Technologies used:
- React.js
- Redux.js
- React router(v3)
- CSS Modules
- Webpack(v2)
- ESlint
- Stylelint

Front-end Architecture:
* actions
  * index.js - redux actions
* assets
  * main.css - global styles
* components
  * FilterLink
  * Footer
  * TodoApp
* containers
  * AddTodo - add todo
  * CompleteAllTodos - button to complete all tasks
  * Todo - todo - display
  * TodoList - a task list display
* middleware
  * localStorageMiddleware - localStorage middleware
  * timerMiddleware - timer middleware
* reducers
  * filter - reducer for filters
  * index - reducers entry point
  * todos - reducer for todos
* store
  * index
* utils
  * index - all auxiliary functions
  * localstorage - localstorage utility
main.js - entry point.
