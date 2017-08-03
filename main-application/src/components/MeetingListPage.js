import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import MeetingList from './MeetingList';
import Analysis from './Analysis';

class MeetingListPage extends Component {
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
      <Container>
        <Row >
          <Col xs="12" md="8" >
            <MeetingList ListData={this.state.data} />
          </Col>
          <Col xs="12" md="4" style={{textAlign: 'center'}}>
            <div style={{height : 15}}/>
            <Button color="success" style={{width: 160, height: 60}}>시작</Button>
            <div style={{height : 30}}/>
            <Button color="success" style={{width: 160, height: 60}}>끝내기</Button>
            <div style={{height : 30}}/>
            <Button color="success" style={{width: 160, height: 60}}>분석</Button>
            <div style={{height : 30}}/>
            <Button color="success" style={{width: 160, height: 60}}>ㅁㄴ</Button>
            <div/>
          </Col>
        </Row>
        <Row style={{height: '60'}}>
        </Row>
        <Row>
          <Col>
            <Analysis/>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default MeetingListPage;
