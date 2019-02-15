import React from 'react';
// import menu from '../../assets/menu.json';
// import If from '../../lib/if.js';

import './sub-dropdown.css';

export default class SubDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.openDdItem.children);
    return (
      <React.Fragment>
        <div className="subDropdownMain">
          <ul>
            {this.props.openDdItem.children &&
              this.props.openDdItem.children.map((listItem, idx) => (
                <li
                  key={idx}
                  className="subMenuList"
                  onClick={this.handleClick}
                >
                  <span className="subMenuTitle">{listItem.name}</span>
                </li>
              ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
