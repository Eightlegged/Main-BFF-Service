import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

import MeetingList from './MeetingList';

class MeetingListPage extends Component {

  render() {
    let Data = [
    	{date : "2017-07-01", name : "ksd", etc: "...."},
    	{date : "2017-07-02", name : "hyj", etc: "...."},
    	{date : "2017-07-03", name : "asd", etc: "...."},
    	{date : "2017-07-04", name : "wer", etc: "...."},
    	{date : "2017-07-05", name : "ghv", etc: "...."},
    	{date : "2017-07-06", name : "rtf", etc: "...."}
    ];

    return (
      <Container>
        <Row>
          <Col xs="12" md="5">
            <MeetingList ListData={Data} />
          </Col>
          <Col xs="12" md="1"/>
          <Col xs="12" md="5">
            <MeetingList ListData={Data} />
          </Col>
          <Col xs="12" md="1">
            <Button color="success">만들기</Button>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default MeetingListPage;
