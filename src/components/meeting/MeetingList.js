import React, { Component } from 'react';
//


class MeetingList extends Component {
  constructor(props) {
    super(props);
    this.callMeeting = this.callMeeting.bind(this);
  }



  callMeeting(id){
    console.log(id);
    this.props.meetingLoadRequest(id, this.props.status);
    return;
  }

  render() {
    return (
          <ul className="list-group" id="DoneList" style={{overflow: "auto"}}>
          {this.props.meetings.map((data, i) => {
            return (
              <li className="list-group-item" key={i}>
                <div>{data.title}</div><div>{data.date}</div><div className="text-right"> <button className="btn-info btn btn-xs" onClick={() => this.callMeeting(data.id)}>상세보기</button></div>
              </li>
            );
          })}
          </ul>
    );
  }
}

export default MeetingList;
