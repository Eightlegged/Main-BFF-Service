import React, { Component } from 'react';
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router'
import $ from "jquery";

class CreateMeeting extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            date: "",
            user: "",
            startTime: "",
            comment: "",
            check: "",
            checkList: [],
            partName: "Communication"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCreateMeeting = this.handleCreateMeeting.bind(this);
        this.addCheckList = this.addCheckList.bind(this);
      }

      handleChange(e) {
          let nextState = {};
          nextState[e.target.name] = e.target.value;
          this.setState(nextState);
      }

      addCheckList() {
          let arr = this.state.checkList;
          arr.push(this.state.check);
          this.setState({
            checkList: arr
          });
          var str = '<label><input type="checkbox" disabled>';
          str += this.state.check;
          str += '</label><br>';
          $('#checkBox').append(
             str
          );
          this.setState({
            check: ''
          });
      }

      handleCreateMeeting() {
            let title = this.state.title;
            let content = this.state.content;
            let date = this.state.date;
            let user = this.state.user;
            let startTime = this.state.startTime;
            let comment = this.state.comment;
            let partName = this.state.partName;
            let checkList = [];
            let splitArray = user.split(", ");
            let userList = [];
            console.log(user);
            console.log(splitArray);
            for(var i in splitArray){
              console.log(splitArray[i]);
              let obj = {
                "userName": splitArray[i]
              }
              userList.push(obj);
            }

            for(var i in this.state.checkList){
              checkList.push(
                {
                  "item": this.state.checkList[i],
                  "checked": false
                }
              )
            }
            console.log(partName);
            this.props.onCreateMeeting(title, content, date, userList, startTime, comment, partName, checkList).then(
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
                                회의 만들기 <small></small>
                            </h1>
                            <ol className="breadcrumb">
                                <li className="active">
                                    <i className="fa fa-edit"></i> NewMeeting
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
                            <Label>파트</Label>
                            <Input type="select" name="partName" onChange={this.handleChange} value={this.state.partName}>
                              <option value="Communication">Communication</option>
                              <option value="Distribution">Distribution</option>
                              <option value="Manufactoring">Manufactoring</option>
                              <option value="VDI">VDI</option>
                            </Input>
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
                            <Input type="textarea" name="comment" onChange={this.handleChange} value={this.state.comment} style={{resize: "none", overflowY: "auto", height: "200"}} />
                          </FormGroup>

                        </Form>

                        <Form>
                          <FormGroup row>
                            <Label>체크리스트</Label>
                            <Input type="text" name="check" onChange={this.handleChange} value={this.state.check} />
                            <br/>
                            <Button color="primary" block onClick={this.addCheckList}>추가</Button>
                          </FormGroup>
                        </Form>

                        <Form>
                          <FormGroup row>
                            <div className="checkbox" id="checkBox">
                            </div>
                          </FormGroup>
                          <FormGroup check row>
                              <Button color="primary" block onClick={this.handleCreateMeeting}>Submit</Button>
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
