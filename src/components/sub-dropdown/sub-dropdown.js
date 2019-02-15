import React from 'react';

import './sub-dropdown.css';

export default class SubDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.openDdItem.children);
    let subDdClass = 'sub-dropdown-normal';
    // console.log(this.props.show, 'show');

    if (this.props.openSub) {
      subDdClass = 'sub-dropdown-normal open';
    }

    return (
      <React.Fragment>
        <ul className={subDdClass}>
          {this.props.openDdItem.children &&
            this.props.openDdItem.children.map((listItem, idx) => (
              <li
                key={idx}
                className="subDropdownMain"
                onClick={this.handleClick}
              >
                <span className="subDdTitle">{listItem.name}</span>
              </li>
            ))}
        </ul>
      </React.Fragment>
    );
  }
}
