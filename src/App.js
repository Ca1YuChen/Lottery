import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MyAwesomeReactComponent />
      </MuiThemeProvider>
    );
  }
}

export default App;
