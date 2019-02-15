import React from 'react';
import logo from '../../assets/alaska-airlines-logo.png';

import HamburgerMenu from 'react-hamburger-menu';

import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <span>
            <img src={logo} />
          </span>
          <div className="hamburgerMenu">
            <HamburgerMenu
              menuClicked={this.props.clickBurger}
              isOpen={this.props.open}
              width={44}
              height={25}
              strokeWidth={3}
              color="white"
              rotate={0}
              borderRadius={5}
              animationDuration={0.4}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
