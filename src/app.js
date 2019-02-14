import React, { Component } from "react";
import Header from "../src/components/header/header.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
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
      </React.Fragment>
    );
  }
}

export default App;
