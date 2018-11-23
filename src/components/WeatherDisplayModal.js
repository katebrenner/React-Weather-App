import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

class WeatherDisplayModal extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggleModal}>
          <ModalHeader toggle={this.toggle}>Local Weather Forcast</ModalHeader>
          <h1 className="weatherModalText">
            Temperature:{this.props.weatherData.temp} {this.props.weatherMeasurement === 'imperial' ? 'F' : 'C'}{' '}
          </h1>
          <h1 className="weatherModalText">Humidity:{this.props.weatherData.humidity}%</h1>
          <h1 className="weatherModalText">Pressure: {this.props.weatherData.pressure} hPa</h1>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default WeatherDisplayModal;
