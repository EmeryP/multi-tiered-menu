import React from 'react';

import './welcome.css';

export default class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="welcome">
          {/* <img src="../../assets/bluesky.jpg" alt="" /> */}
          <p>Hello Emery Parks</p>
        </div>
      </React.Fragment>
    );
  }
}
