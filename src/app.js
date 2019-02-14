import React, { Component } from "react";
import Header from "../src/components/header/header.js";
import MainMenu from '../src/components/main-menu/main-menu.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Header clickBurger={this.handleClick} open={this.state.open} />
        <MainMenu show={this.state.open} />
      </React.Fragment>
    );
  }
}

export default App;
