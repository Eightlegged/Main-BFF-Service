import React, { Component } from 'react';
//import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Table } from 'reactstrap';

class MeetingList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>No</th>
            <th>회의 날짜</th>
            <th>회의 주최자</th>
            <th>기타</th>
          </tr>
        </thead>
        <tbody>
          {this.props.ListData.map((data, i) => {
            return (
              <tr style={{textAlign : 'left'}}>
                <th scope="row">{i}</th>
                <td>{data.date}</td>
                <td>{data.name}</td>
                <td>{data.etc}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default MeetingList;
