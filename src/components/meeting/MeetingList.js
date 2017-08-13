import React, { Component } from 'react';
//


class MeetingList extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 'done'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
          <ul className="list-group" id="DoneList" style={{overflow: "auto"}}>
          {this.props.meetings.map((data, i) => {
            return (
              <li className="list-group-item" key={i}>
                <div>{data.title}</div><div>{data.date}</div><div className="text-right"> <button className="btn-info btn btn-xs">상세보기</button></div>
              </li>
            );
          })}
          </ul>
    );
  }
}

export default MeetingList;
