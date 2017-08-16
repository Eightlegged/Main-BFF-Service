import React, { Component } from 'react';

import MeetingList from './MeetingList';
import MeetingAnalysis from './MeetingAnalysis';
import MeetingStart from './MeetingStart';


class Meeting extends Component {
  constructor(props) {
    super(props);
    this.props.meetingStatusNone();
    this.handleMeetingSave = this.handleMeetingSave.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    console.log('meetingList update');
    console.log(this.props.meetingList);
    console.log(this.props.currentMeeting);
  }

  handleMeetingSave(id, data, partName) {
      return this.props.meetingSaveRequest(id, data, partName).then(() => {
        if(true) {
          this.props.meetingStatusNone();
          return true;
        } else {
          console.log('meeting send fail');
          return false;
        }
      }
    );
  }

  renderMeetingInfo() {
    console.log(this.props.meetingStatus);
    if(this.props.meetingStatus != 'NONE'){
      if(this.props.meetingStatus == 'END'){
        return(<MeetingAnalysis data={this.props.currentMeeting.data}/>);
      }else{
        return(<MeetingStart onMeetingSave={this.handleMeetingSave} data={this.props.currentMeeting.data} />);

      }

    }
  }


  render() {
    return (
      <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            회의 보기 <small></small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> Dashboard
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="alert alert-info alert-dismissable">
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <i className="fa fa-info-circle"></i>  <strong>Like SB Admin?</strong> Try out <a href="http://startbootstrap.com/template-overviews/sb-admin-2" className="alert-link">SB Admin 2</a> for additional features!
                        </div>
                    </div>
                </div>

                <div className="row" style={{maxHeight: "600px"}}>
                    <div className="col-lg-6 col-md-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-comments fa-5x"></i>
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">종료된 회의</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ overflowY: "auto", maxHeight: "350px"}}>
                              <MeetingList status={'END'} meetingLoadRequest={this.props.meetingLoadRequest} meetings={this.props.meetingList.endMeetings}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" >
                        <div className="panel panel-green">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-tasks fa-5x"></i>
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">대기중 회의</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ overflowY: "auto", maxHeight: "350px"}}>
                              <MeetingList status={'WAIT'} meetingLoadRequest={this.props.meetingLoadRequest} meetings={this.props.meetingList.waitMeetings}/>
                            </div>
                        </div>
                    </div>
                </div>

                {this.renderMeetingInfo()}

            </div>
    );
  }

}

export default Meeting;
