import React, { Component } from 'react';
import { Col , Row , Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <Container>
        <Row><div><h1> 회원가입 (초안) </h1></div></Row>
        <Row>
          <Form>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>Email</Label>
                <Col sm={10}>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="examplePassword" sm={2}>Password</Label>
                <Col sm={10}>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </Col>
              </FormGroup>
              
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button>Submit</Button>
                </Col>
              </FormGroup>
            </Form>
        </Row>
      </Container>
    );
  }

}

export default Login;

