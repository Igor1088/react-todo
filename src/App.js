import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addTask = this.addTask.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
  }

  addTask(task) {
    var newItem = {
      id: Date.now(),
      task: task,
      complete: false
    }
    this.setState({ items: this.state.items.concat(newItem) });
  }

  removeItem(itemId) {
    let { items } = this.state;
    items = items.filter(i => i.id !== itemId);
    this.setState({ items });
  }

  toggleItem(itemId) {
    let { items } = this.state;
    for(let i=0; i<items.length; i++) {
      if(items[i].id === itemId) {
        items[i].complete = items[i].complete === true ? false : true;
      }
    }
    this.setState({items});
  }

  render() {
    return (
      <div className="container">
        <h3>ToDo:</h3>
        <ToDoList
          items={this.state.items}
          removeItem={this.removeItem}
          toggleItem={this.toggleItem}
        />
        <Form addTask={this.addTask} />

      </div>
    );
  }
}

export default App;
