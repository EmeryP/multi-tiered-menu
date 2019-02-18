import React from 'react';
import './welcome.css';

export default class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="welcome">
          <p>Hello Friend!</p>
        </div>
      </React.Fragment>
    );
  }
}
