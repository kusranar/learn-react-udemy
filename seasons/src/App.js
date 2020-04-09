import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null
    }

    navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => console.log(err)
    )
  }
  render() {
    return (
      <h1>Latitude : {this.state.lat}</h1>
    );
  }
}

export default App;
