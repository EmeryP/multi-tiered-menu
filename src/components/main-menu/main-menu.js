import React from 'react';
import menu from '../../assets/menu.json';
import If from '../../lib/if.js';
import Welcome from '../welcome/welcome.js';
import SubMenu from '../sub-menu/sub-menu.js';

import './main-menu.css';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSub: false,
      openSubId: '',
      openSubItem: false
    };
  }

  handleClick = (i, liItem) => {
    this.setState(prevState => ({
      openSub: !prevState.openSub,
      openSubId: i,
      openSubItem: liItem
    }));
  };

  render() {
    let menuClass = 'menu-normal';

    if (this.props.show) {
      menuClass = 'menu-normal open';
    }
    // console.log(this.props.show, 'main');

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
        <div className={menuClass}>
          <Welcome />
          <ul>
            {menu.children.map((listItem, idx) => (
              <li
                key={idx}
                onClick={() => this.handleClick(idx, listItem)}
                className="mainMenuList"
              >
                <span className="listIcon">
                  <img src="" alt={listItem.name.slice(0, 1)} />
                </span>
                {listItem.name.toUpperCase()}
                <If condition={listItem.children}>
                  <a className="menuArrow" href={menu.children.link}>
                    {menuArrow}
                  </a>
                </If>
              </li>
            ))}
            <If condition={this.state.openSub || this.props.show}>
              <SubMenu
                openSubId={this.state.openSubId}
                openSub={this.state.openSub}
                openSubItem={this.state.openSubItem}
              />
            </If>
          </ul>
          <div className="fillerMain" />
        </div>
      </React.Fragment>
    );
  }
}
