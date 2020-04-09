import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    )
    return (
      <h1>Hi There!</h1>
    );
  }
}

export default App;
