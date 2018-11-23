import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <form onSubmit={event => this.props.handleFormSubmit(event)}>
          <input type="text" name="city" onChange={event => this.props.handleFormChange(event)} />
          <select name="weatherMeasurement" onChange={event => this.props.handleFormChange(event)}>
            <option value="imperial">Fahrenheit</option>
            <option value="metric">Celcius</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;
