import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class HeaderButton extends Component {
  render() {
    return (
      <Button color="info">
        <Link to={this.props.to}>
          {this.props.name}
        </Link>
      </Button>
    );
  }
}

export default HeaderButton;
