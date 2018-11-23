import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class weatherForm extends Component {
  render() {
    return (
      <Form className="form" onSubmit={event => this.props.handleFormSubmit(event)}>
        <FormGroup>
          <Input
            id="searchBar"
            type="text"
            name="city"
            placeholder="US city name or zipcode"
            onChange={event => this.props.handleFormChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="select"
            name="weatherMeasurement"
            onChange={event => this.props.handleFormChange(event)}
            className="dropDown"
          >
            <option name="weatherMeasurement" value="imperial">
              Fahrenheit
            </option>
            <option name="weatherMeasurement" value="metric">
              Celcius
            </option>
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default weatherForm;
