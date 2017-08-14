import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
  }

  handleLogin() {
        let id = this.state.email;
        let pw = this.state.password;

        this.props.onLogin(id, pw).then(
            (success) => {
                if(!success) {
                    alert('login failed');
                    this.setState({
                        password: ''
                    });
                }
                else{

                  this.props.history.push('/');
                }
            }
        );
    }


  render() {
    return (
      <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            로그인 <small>2</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> Dashboard
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="Row">
                  <div className="col-md-4">
                  </div>
                  <div className="col-md-4">
                    <Form>
                        <FormGroup row>
                          <Label for="exampleEmail">Email</Label>
                          <Input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
                        </FormGroup>

                        <FormGroup row>
                          <Label for="examplePassword">Password</Label>
                          <Input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                        </FormGroup>

                        <FormGroup check row>
                          <Button onClick={this.handleLogin}>Submit</Button>
                        </FormGroup>
                    </Form>
                  </div>
                  <div className="col-md-4">
                  </div>
                </div>
      </div>

    );
  }

}

export default withRouter(Login);
