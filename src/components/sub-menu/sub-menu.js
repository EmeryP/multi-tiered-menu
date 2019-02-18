import React from 'react';
import If from '../../lib/if.js';
import './sub-menu.css';

export default class SubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDd: false,
      openDdId: '',
      openDdItem: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (idx, liItem) => {
    this.setState(prevState => ({
      openDd: !prevState.openDd,
      openDdId: idx,
      openDdItem: liItem
    }));
  };

  render() {
    let subMenuClass = 'sub-menu-normal';
    let subDdClass = 'sub-dropdown-normal';

    if (this.props.openSub) {
      subMenuClass = 'sub-menu-normal open';
    }
    if (this.state.openDd) {
      subDdClass = 'sub-dropdown-normal open';
    }

    let subMenuOptions =
      this.props.openSubItem.children &&
      this.props.openSubItem.children.map((listItem, idx) => {
        const subMenu = (
          <React.Fragment>
            <span className="subMenuTitle">{listItem.name}</span>
            <span className="newArrow" />
            <If condition={listItem.children}>
              <button
                className={
                  'subMenuArrow ' +
                  (this.state.openDd && this.state.openDdId === idx
                    ? 'colorChangeSubArrow'
                    : '')
                }
                onClick={() => this.handleClick(idx, listItem)}
              >
                <span className="arrowSub">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    attr="[object Object]"
                    data="[object Object]"
                    height="2em"
                    width="1em"
                    className={
                      'arrowSub ' +
                      (this.props.openSub &&
                      idx === this.state.openDdId &&
                      this.state.openDd
                        ? 'arrowSubUp'
                        : '')
                    }
                  >
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                </span>
              </button>
              <If condition={idx === this.state.openDdItem.id}>
                <ul className={subDdClass}>
                  {this.state.openDdItem.children &&
                    this.state.openDdItem.children.map((listItem, idx) => (
                      <li key={idx} className="subDropdownMain">
                        {listItem.name}
                      </li>
                    ))}
                </ul>
              </If>
            </If>
          </React.Fragment>
        );

        // let subDropdown; recursive option (ref)
        // if (listItem.children && idx === this.state.openDd) {
        //   subDropdown = this.subMenuOptions(listItem);
        // }

        return (
          <li
            key={idx}
            className={
              'subMenuList ' +
              (this.state.openDd && this.state.openDdId === idx
                ? 'colorChangeMenuList'
                : '')
            }
          >
            {subMenu}
          </li>
        );
      });

    return (
      <React.Fragment>
        <div className={subMenuClass}>
          <ul className="subUlMaster">
            <li className="subMenuList heading">
              <span className="menuNameAtSub">
                {this.props.openSubItem.name}
              </span>
              <button
                className="subMenuCloseBtn"
                onClick={() => this.props.toggleSub()}
              >
                &#10005;
              </button>
            </li>
            {subMenuOptions}
          </ul>
          <div className="filler" />
        </div>
      </React.Fragment>
    );
  }
}
