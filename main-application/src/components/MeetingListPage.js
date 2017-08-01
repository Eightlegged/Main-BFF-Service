import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import MeetingList from './MeetingList';

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
    var arr = [];
    for(var i=0; i<Data.length/5; i++){
      arr.push(Data.slice(5*i,5*i+5));
    }
    this.state = {
      data: arr
    };

  }

  render() {




    return (
      <Container>
        <Row>
          <Col xs="12" md="5">
            <MeetingList ListData={this.state.data[1]} />
            <Pagination>
              <PaginationItem>
                <PaginationLink previous href="#" />
              </PaginationItem>
              {this.state.data.map((arr, i) => {
                return(
                  <PaginationItem>
                    <PaginationLink>
                      {i+1}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
            </Pagination>
          </Col>
          <Col xs="12" md="1"/>
          <Col xs="12" md="5">
            <MeetingList ListData={this.state.data[1]} />
            <Pagination>
              <PaginationItem>
                <PaginationLink previous href="#" />
              </PaginationItem>
              {this.state.data.map((arr, i) => {
                return(
                  <PaginationItem>
                    <PaginationLink>
                      {i+1}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
            </Pagination>
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
