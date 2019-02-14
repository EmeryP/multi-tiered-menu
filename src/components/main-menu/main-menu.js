import React from 'react';
import menu from '../../assets/menu.json';
import If from '../../lib/if.js';

import './main-menu.css';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let menuClasses = 'menu-normal';
    if (this.props.show) {
      menuClasses = 'menu-normal open';
    }

    // let menuTierOne = 'menu-tier-one-normal';
    // if (this.state.liOneState) {
    //   menuTierOne = 'menu-tier-one-normal open';
    // }
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
      <div className={menuClasses}>
        <ul>
          {menu.children.map((listItem, idx) => (
            <li key={idx} className="listButton">
              <div className="faded">
                <span className="listIcon">
                  <img src="" alt={listItem.name.slice(0, 1)} />
                </span>
                {listItem.name.toUpperCase()}
                <If condition={listItem.children}>
                  <a
                    className="subMenuArrow"
                    href={listItem.link}
                    onClick={this.handleClick}
                  >
                    {menuArrow}
                  </a>
                </If>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
