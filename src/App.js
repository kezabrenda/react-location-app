import React from "react";
import './App.css';
import Spinner from "./Spinner";
//import LocationDisplay from "./LocationDisplay";

class App extends React.Component {

  state = {lat: null, errorMessage: ""};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (error) => this.setState({errorMessage: error.message})
    );
  }

  renderContent() {
    if(this.state.errorMessage && !this.state.lat) {
//      return <div>Error: {this.state.errorMessage}</div>
      console.log(this.state.errorMessage)
    }

    if(this.state.errorMessage && this.state.lat) {
      //return <div>lat: {this.state.lat}</div>
      //return <LocationDisplay lat = {this.state.lat} />
      console.log(this.state.errorMessage)
    }
    return <Spinner message="Loading, waiting location...." />
  }

  render () {
    return (
      <React.Fragment>
        {this.renderContent()}
      </React.Fragment>
    )
  }

}

export default App;