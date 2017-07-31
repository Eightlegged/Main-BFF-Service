import React, { Component } from 'react';
import { Col, Row , Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs={{size: 10, offset: 1}}md={{size: 2, offset: 5}}>
            <h1> 로그인 </h1>
            <Form>
                <FormGroup row>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>

                <FormGroup row>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>

                <FormGroup check row>
                  <Button>Submit</Button>
                </FormGroup>
              </Form>
            </Col>
        </Row>
      </Container>
    );
  }

}

export default Login;
