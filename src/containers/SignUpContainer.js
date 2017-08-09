import React, { Component } from 'react';
import SignUp from '../components/SignUp';
import { connect } from 'react-redux';
import { signUpRequest } from '../actions/Register';

class SignUpContainer extends Component {
  constructor(props){

    super(props);

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(id, pw, username) {
      return this.props.signUpRequest(id, pw, username).then(() => {
        if(this.props.status === "SUCCESS") {
          return true;
        } else {
          console.log('signUp failed');
          return false;
        }
      }
    );
  }

  render() {
    return (
      <div>
        <SignUp onSignUp={this.handleSignUp} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        status: state.register.signUp.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUpRequest: (id, pw, username) => {
            return dispatch(signUpRequest(id,pw,username));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
