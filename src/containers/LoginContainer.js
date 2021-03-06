import React, { Component } from 'react';
import Login from '../components/Login';
import { connect } from 'react-redux';
import { loginRequest } from '../actions/Authentication';

class LoginContainer extends Component {
  constructor(props){

    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(id, pw) {
      return this.props.loginRequest(id, pw).then(() => {
        if(this.props.status === "SUCCESS") {
          let loginData = {
                isLoggedIn: true,
                email: id,
                user_id: this.props.user_id
          };
          document.cookie = 'key=' + btoa(JSON.stringify(loginData));
          return true;
        } else {
          console.log('login failed');
          return false;
        }
      }
    );
  }

  render() {
    return (
      <div>
        <Login onLogin={this.handleLogin} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status,
        user_id: state.authentication.status.user_id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id,pw));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
