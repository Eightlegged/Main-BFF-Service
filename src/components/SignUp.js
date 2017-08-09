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
      <Container fluid={true} style={{textAlign: 'center'}}>
        <Row>
        <Col md={{size: 4, offset: 4}}>
          <div>
            <h1> 회원가입 </h1>
          </div>
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
        </Col>
        </Row>
      </Container>
    );
  }

}

export default withRouter(SignUp);
