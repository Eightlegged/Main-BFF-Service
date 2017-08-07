import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import MeetingList from './MeetingList';
import MeetingAnalysis from './MeetingAnalysis';

class Meeting extends Component {
  constructor(props) {
    let Data = [
      {date : "2017-07-01", name : "ksd", etc: "...."},
      {date : "2017-07-02", name : "hyj", etc: "...."},
      {date : "2017-07-03", name : "asd", etc: "...."},
      {date : "2017-07-04", name : "wer", etc: "...."},
      {date : "2017-07-05", name : "ghv", etc: "...."},
      {date : "2017-07-06", name : "rtf", etc: "...."},
      {date : "2017-07-07", name : "vfd", etc: "...."},
      {date : "2017-07-08", name : "sdf", etc: "...."},
      {date : "2017-07-09", name : "fgr", etc: "...."},
      {date : "2017-07-10", name : "mgh", etc: "...."},
      {date : "2017-07-11", name : "eer", etc: "...."}
    ];

    super(props);
    /*
    var arr = [];
    for(var i=0; i<Data.length/5; i++){
      arr.push(Data.slice(5*i,5*i+5));
    }*/
    this.state = {
      data: Data
    };

  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs="12" md="4" >
            <MeetingList ListData={this.state.data} />
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
