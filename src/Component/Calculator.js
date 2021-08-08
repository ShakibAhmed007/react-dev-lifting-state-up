import BoilingVerdict from './BoilingVerdict';
import React from 'react';
import TemperatureInput from './TemparatureInput';

class Calculator extends React.Component {
  state = {
    temperature: ''
  };

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

export default Calculator;
