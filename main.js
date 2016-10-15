import React, { Component } from 'react';
import Exponent from 'exponent';

import TaskList from './TaskList';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native',
        },
        {
          task: 'Learn Redux',
        },
      ],
    };
  }

  render() {
    return (
      <TaskList
          todos={this.state.todos}
      />
    );
  }
}

Exponent.registerRootComponent(App);
