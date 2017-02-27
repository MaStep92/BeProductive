import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Todo from './Todo.jsx';

class TodoList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            time={todo.time}
                            intervalID={todo.intervalID}
                            isOn={todo.isOn}
                        />
                    )
                }
            </div>
        );
    }
}

function getVisibleTodos(todos, filter) {
    switch (filter) {
      case 'all':
        return todos;

      case 'completed':
        return todos.filter(todo => todo.completed);

      case 'new':
        return todos.filter(todo => !todo.completed);

      default: {
        return todos;
      }
    }
}

function mapStateToProps(state, ownProps) {
  return {
      todos: getVisibleTodos(state.todos, ownProps.location.query.filter),
  };
}

export default withRouter(connect(mapStateToProps)(TodoList));
