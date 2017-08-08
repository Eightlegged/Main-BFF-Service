import React, { Component } from 'react';
//
import { Table } from 'reactstrap';

import MeetingCreate from './MeetingCreate';

class MeetingList extends Component {


  render() {
    return (
      <div style={{ border: "1px solid #eceeef"}}>
        <Table bordered>
          <thead>
            <tr>
              <th>회의/세미나</th>
            </tr>
          </thead>
        </Table>
        <div style={{height: 650, overflow: "auto", borderBottom: "1px solid #eceeef"}}>
          <Table bordered>
            <tbody>
              {this.props.ListData.map((data, i) => {
                return (
                  <tr style={{textAlign : 'left'}} key={i}>
                    <td><div>{data.date}</div><div>{data.name}</div></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <MeetingCreate className={""}/>
      </div>
    );
  }
}

export default MeetingList;
