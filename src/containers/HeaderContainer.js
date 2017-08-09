import React, { Component } from 'react';
import Header from '../components/header/Header';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions/Authentication';


class HeaderContainer extends Component {
  constructor(props){
    super(props);
    console.log(this.props.authentication);
    console.log(this.props.logoutRequest);

  }

  render() {
    return (
        <div>
          <Header authentication={this.props.authentication} logoutRequest={this.props.logoutRequest} />
        </div>
    );
  }

}
const mapStateToProps = (state) => {
    return {
        authentication: state.authentication
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutRequest: () => {
            return dispatch(logoutRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
