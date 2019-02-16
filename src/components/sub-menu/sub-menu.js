import React from 'react';
import If from '../../lib/if.js';
// import SubDropdown from '../sub-dropdown/sub-dropdown.js';

import './sub-menu.css';

export default class SubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDd: false,
      openDdId: '',
      openDdItem: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (i, liItem) => {
    this.setState(prevState => ({
      openDd: !prevState.openDd,
      openDdId: i,
      openDdItem: liItem,
    }));
    // console.log(i, liItem);
  };

  render() {
    let subMenuClass = 'sub-menu-normal';
    let subDdClass = 'sub-dropdown-normal';
    let arrowClass = 'arrowSub';

    if (this.props.openSub) {
      subMenuClass = 'sub-menu-normal open';
    }
    if (this.state.openDd) {
      subDdClass = 'sub-dropdown-normal open';
      arrowClass = 'arrowSubClick';
    }

    const menuArrow = (
      <span className={arrowClass}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 320 512"
          attr="[object Object]"
          data="[object Object]"
          height="1em"
          width="1em"
          className={arrowClass}
        >
          <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
        </svg>
      </span>
    );

    return (
      <React.Fragment>
        <div className={subMenuClass}>
          <ul>
            <li className="subMenuList heading">
              {this.props.openSubItem.name}
              <button
              onClick={() => this.props.toggleSub()}
              >X</button>
            </li>

            {this.props.openSubItem.children &&
              this.props.openSubItem.children.map((listItem, idx) => (
                <li key={idx} className="subMenuList">
                  <span className="subMenuTitle">{listItem.name}</span>
                  <span className="newArrow" />
                  <If condition={listItem.children}>
                    <button
                      className="subMenuArrow"
                      onClick={() => this.handleClick(idx, listItem)}
                    >
                      {menuArrow}
                    </button>
                    {/* <If condition={this.state.openDd}> */}
                    <ul className={subDdClass}>
                      {this.state.openDdItem.children &&
                        this.state.openDdItem.children.map((listItem, idx) => (
                          <li key={idx} className="subDropdownMain">
                            {listItem.name}
                          </li>
                        ))}
                    </ul>
                  </If>
                  {/* </If> */}
                </li>
              ))}
            {/* <li className={"subMenuList slider-normal " + (this.state.openDd ? 'open' : '')}>TestOne</li>
              <li className={"subMenuList slider-normal " + (this.state.openDd ? 'open' : '')}>TestTwo</li> */}
            {/* <If condition={this.state.openDd}>
              <SubDropdown
                openDd={this.state.openDd}
                openDdId={this.state.openDdId}
                openDdItem={this.state.openDdItem}
              />
            </If> */}
          </ul>
          <div className="filler" />
        </div>
      </React.Fragment>
    );
  }
}
