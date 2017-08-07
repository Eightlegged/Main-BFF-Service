import React, { Component } from 'react';
import { Col, Row , Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.test);
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
        let id = this.state.username;
        let pw = this.state.password;

        this.props.onLogin(id, pw).then(
            (success) => {
                if(!success) {
                    this.setState({
                        password: ''
                    });
                }
            }
        );
    }


  render() {
    return (
      <Container fluid={true} style={{textAlign: 'center'}}>
        <Row>
          <Col xs={{size: 10, offset: 1}}md={{size: 2, offset: 5}}>
            <h1> 로그인 </h1>
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
            </Col>
        </Row>
      </Container>
    );
  }

}

Login.propTypes = {
    onLogin: React.PropTypes.func
};


export default Login;
