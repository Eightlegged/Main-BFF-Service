import React, { Component } from 'react';
import { Col , Row , Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { withRouter } from 'react-router'

class CreateMeeting extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            date: "",
            user: "",
            startTime: "",
            comment: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCreateMeeting = this.handleCreateMeeting.bind(this);

      }

      handleChange(e) {
          let nextState = {};
          nextState[e.target.name] = e.target.value;
          this.setState(nextState);
      }

      handleCreateMeeting() {
            let title = this.state.title;
            let content = this.state.content;
            let date = this.state.date;
            let user = this.state.user;
            let startTime = this.state.startTime;
            let comment = this.state.comment;
            let partName = "default";

            let splitArray = user.split(", ");
            let userList = [];
            for(var i in splitArray){
              let obj = {
                "userName": i
              }
              userList.push(obj);
            }

            this.props.onCreateMeeting(title, content, date, userList, startTime, comment, partName).then(
                (success) => {
                    if(!success) {
                        alert('회의 생성 실패');

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
                                회의 만들기 <small>2</small>
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
                            <Label>주제</Label>
                            <Input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                          </FormGroup>

                          <FormGroup row>
                            <Label>목적</Label>
                              <Input type="text" name="content" onChange={this.handleChange} value={this.state.content} />
                          </FormGroup>

                          <FormGroup row>
                            <Label>날짜</Label>
                            <Input type="date" name="date" onChange={this.handleChange} value={this.state.date} />
                          </FormGroup>

                          <FormGroup row>
                            <Label>참석자</Label>
                            <Input type="text" name="user" onChange={this.handleChange} value={this.state.user} />
                          </FormGroup>

                          <FormGroup row>
                            <Label>시간</Label>
                            <Input type="time" name="startTime" onChange={this.handleChange} value={this.state.starTime} />
                          </FormGroup>

                          <FormGroup row>
                            <Label>개요</Label>
                            <Input type="text" name="comment" onChange={this.handleChange} value={this.state.comment} />
                          </FormGroup>

                          <FormGroup>
                            <Col>
                              <Button onClick={this.handleCreateMeeting}>Submit</Button>
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

export default withRouter(CreateMeeting);
