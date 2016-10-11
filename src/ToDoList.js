import React, { Component } from 'react';
import Item from './Item';

class ToDoList extends Component {
  removeItem(itemId) {
    this.props.removeItem(itemId);
  }

  toggleItem(itemId) {
    this.props.toggleItem(itemId);
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.items.map( item => {
            return (
              <Item
                key={item.id}
                itemId={item.id}
                task={item.task}
                complete={item.complete}
                removeItem={this.removeItem.bind(this)}
                toggleItem={this.toggleItem.bind(this)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
