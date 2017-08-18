import React, { Component } from 'react';
//


class MeetingList extends Component {
  constructor(props) {
    super(props);
    this.callMeeting = this.callMeeting.bind(this);
  }



  callMeeting(id){
    console.log(id);
    var arr = this.props.meetings;
    var data;
    for(var i in arr){
      console.log(arr[i]);
      if(arr[i].id == id){
        data = arr[i];
      }
    }
    this.props.meetingLoadRequest(data, this.props.status);
    return;
  }

  render() {
    return (
          <ul className="list-group" id="DoneList" style={{overflowY: "auto", maxHeight: "350px"}}>
          {this.props.meetings.map((data, i) => {
            return (
              <li className="list-group-item" key={i}>
                <div><h4>{data.title}<span className="pull-right"><button className="btn-info btn btn-xs" onClick={() => this.callMeeting(data.id)}>상세보기</button></span></h4></div><div>{data.date}</div>
              </li>
            );
          })}
          </ul>
    );
  }
}

export default MeetingList;
