import React, { Component } from 'react';
import Form from './components/weatherForm';
import WeatherDisplayModal from './components/WeatherDisplayModal';
import SearchFail from './components/SearchFail';
import './App.css';

const axios = require('axios');

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      weatherMeasurement: 'imperial',
      weatherData: '',
      modal: false,
      searchFail: false,
    };
  }
  handleFormChange = event => {
    const newState = { ...this.state[event.target.name] };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };
  handleFormSubmit = event => {
    event.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},us&units=${
          this.state.weatherMeasurement
        }&appid=d4a2cc67f7630a31cb669829cb6ee6f0`
      )
      .then(data => {
        this.setState({ weatherData: data.data.main, searchFail: false });
        this.toggleModal();
      })
      .catch(err => {
        this.setState({ searchFail: true });
      });
  };
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  closePopover = () => {
    this.setState({
      searchFail: false,
    });
  };
  render = () => {
    return (
      <div className="App">
        <h1>Local Weather Forecast</h1>
        <Form
          handleFormChange={this.handleFormChange}
          handleFormSubmit={this.handleFormSubmit}
          weatherMeasurement={this.state.weatherMeasurement}
        />
        <SearchFail searchFail={this.state.searchFail} closePopover={this.closePopover} />
        <WeatherDisplayModal
          weatherData={this.state.weatherData}
          weatherMeasurement={this.state.weatherMeasurement}
          modal={this.state.modal}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  };
}

export default App;
