import React, { Component } from 'react';

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>
          Temperature:{this.props.weatherData.temp} {this.props.weatherMeasurement === 'imperial' ? 'F' : 'C'}
        </h1>
        <h1>Humidity:{this.props.weatherData.humidity}%</h1>
      </div>
    );
  }
}

export default WeatherDisplay;
