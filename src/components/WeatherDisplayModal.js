import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class WeatherDisplayModal extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Local Weather Forcast</ModalHeader>
          <h1>
            Temperature:{this.props.weatherData.temp} {this.props.weatherMeasurement === 'imperial' ? 'F' : 'C'}{' '}
          </h1>
          <h1>Humidity:{this.props.weatherData.humidity}%</h1>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggleModal}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={this.props.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default WeatherDisplayModal;
