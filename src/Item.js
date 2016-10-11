import React,{ Component } from 'react';

class Item extends Component {
  removeItem() {
    this.props.removeItem(this.props.itemId);
  }

  toggleItem() {
    this.props.toggleItem(this.props.itemId);
  }

  render() {
    const classes = this.props.complete ? "list-group-item completed" : "list-group-item";
    return (
      <div>
        <li className={classes}>
          {this.props.task}
          <div className="pull-right" role="group">
          <button
            className="btn btn-success btn-xs"
            onClick={this.toggleItem.bind(this)}>
              <i className="fa fa-check" aria-hidden="true">
              </i>
          </button>
          <button
            className="btn btn-danger btn-xs"
            onClick={this.removeItem.bind(this)}>
              <i className="fa fa-trash-o" aria-hidden="true">
              </i>
          </button>
          </div>
        </li>
      </div>
    );
  }
}

export default Item;
