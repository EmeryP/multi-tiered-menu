import React from 'react';
import './breadcrumb.css';

export default class Breadcrumb extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="breadcrumb">
          <span>Section > Page Title</span>
        </div>
      </React.Fragment>
    );
  }
}
