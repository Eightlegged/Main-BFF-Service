import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import MeetingList from './MeetingList';
import MeetingAnalysis from './MeetingAnalysis';
import MeetingCreate from './MeetingCreate';

class Meeting extends Component {
  constructor(props) {
    let DoneMeetings;
    let TodoMeetings;

    DoneMeetings = [
      {date : "2017-07-01", name : "ksd", etc: "...."},
      {date : "2017-07-02", name : "hyj", etc: "...."},
      {date : "2017-07-03", name : "asd", etc: "...."},
      {date : "2017-07-04", name : "wer", etc: "...."}

    ];

    TodoMeetings = [
      {date : "2017-08-09", name : "qwe", etc: "...."},
      {date : "2017-08-10", name : "hbf", etc: "...."},
      {date : "2017-08-11", name : "lui", etc: "...."},
      {date : "2017-08-12", name : "mvc", etc: "...."}

    ];


    super(props);
    this.state = {
      doneMeetings: DoneMeetings,
      todoMeetings: TodoMeetings
    };

  }

  render() {
    return (
      <Container fluid={true} style={{height: "100%", overflow: "auto"}}>
        <Row style={{height: "98%"}}>
          <Col xs="12" md="4" >
            <MeetingList doneMeetings={this.state.doneMeetings} todoMeetings={this.state.todoMeetings} />
            <MeetingCreate/>
          </Col>
          <Col xs="12" md="8">
            <MeetingAnalysis/>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default Meeting;
