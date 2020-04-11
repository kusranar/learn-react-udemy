import React from 'react';
import logo from './logo.svg';
import './App.css';
import SeasonDisplay from './SeasonsDisplay';

class App extends React.Component {
  state = {
    lat: null,
    errMsg: '',
    loading: true
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude, loading: false }),
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
      <div>{!!this.state.lat ? <SeasonDisplay lat={this.state.lat} /> : this.state.errMsg}</div>
    );
  }
}

export default App;
