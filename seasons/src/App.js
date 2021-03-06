import React from 'react';
import logo from './logo.svg';
import './App.css';
import useLocation from './useLocation';
import SeasonDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

const App = () => {
  const { errMsg, lat } = useLocation();

  let content;
  if (errMsg) {
    content = <div>Error : {errMsg}</div>
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Spinner message="Please accept location request" />
  }

  return (
    <div className="border red">
      {content}
    </div>
  )
}

// class App extends React.Component {
//   state = {
//     lat: null,
//     errMsg: '',
//     loading: true
//   }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       position => this.setState({ lat: position.coords.latitude, loading: false }),
//       err => this.setState({ errMsg: err.message, loading: false })
//     )
//   }

//   renderContent() {
//     if (this.state.loading) {
//       return (
//         <Spinner message="Please accept location request" />
//       );
//     }
//     return (
//       <div>{!!this.state.lat ? <SeasonDisplay lat={this.state.lat} /> : this.state.errMsg}</div>
//     );
//   }

//   render() {
//     return (
//       <div>
//         {this.renderContent()}
//       </div>
//     )
//   }
// }

export default App;
