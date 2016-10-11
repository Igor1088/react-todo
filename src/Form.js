import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var { text } = this.state;
    if(!text) {
      return;
    }
    this.props.addTask(text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.text}
                placeholder="new task..."
                className="form-control"
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-info">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
              </span>
            </div>

          </div>
        </form>
      </div>
    );
  }
}

export default Form;
