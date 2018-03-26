import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar color="primary" light expand="md">
          <img className="logo-photo" src="images/logo.svg" />
        <NavbarBrand className="logo-title">
        PAST 90 DAYS EOD STOCKS FOR {this.props.keyword}
        </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
