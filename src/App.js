import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js'

// fetch()
//   .then(function(response) {
//     return response;
// })
// .then(function(myJson) {
//   console.log(myJson);
// });

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
