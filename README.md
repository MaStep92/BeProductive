## Task Manager with time tracker

This application has been uploaded to the Heroku.
You can test it by clicking on [this link.](https://github.com/airbnb/javascript)

I also made a small demonstration of the application.
You can watch it by clicking on the Youtube logo below.

[![Foo](https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/youtube-128.png)](https://youtu.be/uzz_XT7FRo0)

### Manual setting:

#### Installation

1 - Clone project
```
$ mkdir BeProductive
$ cd BeProductive
$ git clone BeProductive
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


Technologies used:
- React.js
- Redux.js
- React router(v3)
- CSS Modules
- Webpack(v2)
- ESlint
- Stylelint
