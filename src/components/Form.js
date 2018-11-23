import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// class Form extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={event => this.props.handleFormSubmit(event)}>
//           <input type="text" name="city" onChange={event => this.props.handleFormChange(event)} />
//           <select name="weatherMeasurement" onChange={event => this.props.handleFormChange(event)}>
//             <option value="imperial">Fahrenheit</option>
//             <option value="metric">Celcius</option>
//           </select>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;

export default class weatherForm extends React.Component {
  render() {
    return (
      <Form className="form" onSubmit={event => this.props.handleFormSubmit(event)}>
        <FormGroup>
          <Input
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
