import React from 'react';
// import menu from '../../assets/menu.json';
import If from '../../lib/if.js';

import './sub-menu.css';

export default class SubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (i, liItem) => {
    this.setState(prevState => ({
      subMenuOpen: !prevState.subMenuOpen
    }));
    // console.log(this.state.menuToOpen)
  };

  render() {
    // console.log(this.props.subOpen, 'opensub');
    let subMenuClass = 'sub-menu-normal';
    // console.log(this.props.show, 'show');

    if (this.props.subOpen) {
      subMenuClass = 'sub-menu-normal open';
    }
    const menuArrow = (
      <span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 320 512"
          attr="[object Object]"
          data="[object Object]"
          height="1em"
          width="1em"
        >
          <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
        </svg>
      </span>
    );

    return (
      <React.Fragment>
        <div className={subMenuClass}>
          <ul>
            <li className="subMenuList">{this.props.liOpened.name}</li>
            {this.props.liOpened.children &&
              this.props.liOpened.children.map((listItem, idx) => (
                <li key={idx} className="subMenuList">
                  <span className="subMenuTitle">{listItem.name}</span>
                  <If condition={listItem.children}>
                    <a
                      className="subMenuArrow"
                      href={this.props.liOpened.link}
                      onClick={this.handleClick}
                    >
                      {menuArrow}
                    </a>
                  </If>
                </li>
              ))}
          </ul>
          <div className="filler" />
        </div>
      </React.Fragment>
    );
  }
}
