import React, { Component } from 'react';
import { Col , Row , Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { withRouter } from 'react-router'


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        username: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

  }

  handleChange(e) {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
  }

  handleSignUp() {
        let id = this.state.email;
        let pw = this.state.password;
        let username = this.state.username;

        this.props.onSignUp(id, pw, username).then(
            (success) => {
                if(!success) {
                    alert('회원가입 실패');
                    this.setState({
                        email: '',
                        password: '',
                        username: ''
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
                            회원 가입 <small>2</small>
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
                        <Label for="examplePassword">비밀번호</Label>
                          <Input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                      </FormGroup>

                      <FormGroup row>
                        <Label for="exampleText">사용자 이름</Label>
                        <Input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                      </FormGroup>


                      <FormGroup>
                        <Col>
                          <Button onClick={this.handleSignUp}>Submit</Button>
                        </Col>
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

export default withRouter(SignUp);
