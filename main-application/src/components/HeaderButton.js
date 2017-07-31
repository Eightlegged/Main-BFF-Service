import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class HeaderButton extends Component {
  render() {
    return (
      <Button color="secondary">
        <Link to={this.props.to} style={{color: '#404040'}}>
          {this.props.name}
        </Link>
      </Button>
    );
  }
}

export default HeaderButton;
