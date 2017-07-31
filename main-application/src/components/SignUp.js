import React, { Component } from 'react';
import { Col , Row , Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';


class SignUp extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
        <Col md={{size: 4, offset: 4}}>
          <div>
            <h1> 회원가입</h1>
          </div>
          <Form>
            <FormGroup row>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>

            <FormGroup row>
              <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>

            <FormGroup row>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect" />
            </FormGroup>

            <FormGroup row>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>


          <FormGroup row>
            <Col>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Check me out
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col>
              <Button>Submit</Button>
            </Col>
          </FormGroup>

        </Form>
        </Col>
        </Row>
      </Container>
    );
  }

}

export default SignUp;
