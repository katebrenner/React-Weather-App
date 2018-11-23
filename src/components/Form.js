import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class weatherForm extends Component {
  render() {
    return (
      <Form className="form" onSubmit={event => this.props.handleFormSubmit(event)}>
        <FormGroup>
          <Input
            id="searchBar"
            type="text"
            name="city"
            placeholder="city name or zipcode"
            onChange={event => this.props.handleFormChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="weatherMeasurement"
                value="imperial"
                onChange={event => this.props.handleFormChange(event)}
              />
              Fahrenheit
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="weatherMeasurement"
                value="metric"
                onChange={event => this.props.handleFormChange(event)}
              />{' '}
              Celcius
            </Label>
          </FormGroup>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
