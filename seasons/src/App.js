import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errMsg: '',
      loading: true
    }

    navigator.geolocation.getCurrentPosition(
      position => { this.setState({ lat: position.coords.latitude, loading: false }) },
      err => this.setState({ errMsg: err.message, loading: false })
    )
  }

  render() {
    if (this.state.loading) {
      return (
        <h1>loading...</h1>
      );
    }
    return (
      <h1>{!!this.state.lat ? `Latitude : ${this.state.lat}` : this.state.errMsg}</h1>
    );
  }
}

export default App;
