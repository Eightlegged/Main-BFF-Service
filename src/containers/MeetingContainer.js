import React, { Component } from 'react';
import Meeting from '../components/meeting/Meeting';
import { connect } from 'react-redux';
import { meetingListLoadRequest, meetingLoadRequest, meetingSaveRequest  } from '../actions/Meeting';

class CreateMeetingContainer extends Component {
  constructor(props){
    super(props);

    console.log(this.props.meetingList);
    console.log(this.props.meetingListLoadStatus);

  }

  componentDidMount(){
    if(this.props.meetingListLoadStatus.status == 'INIT'){
      console.log('get meeting list');
      this.props.meetingListLoadRequest(this.props.userid);
    }
  }

  render() {
    return (
      <div>
        <Meeting meetingStatus={this.props.meetingStatus}
         meetingListStatus={this.props.meetingListStatus}
         meetingList={this.props.meetingList}
         meetingListLoadStatus={this.props.meetingListLoadStatus}
         currentMeeting={this.props.currentMeeting}
         meetingSaveStatus={this.props.meetingSaveStatus}
         meetingListLoadRequest={this.props.meetingListLoadRequest}
         meetingLoadRequest={this.props.meetingLoadRequest}
         meetingSaveRequest={this.props.meetingSaveRequest}
         />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        userid: state.authentication.status.currentUser,
        meetingStatus: state.meeting.meetingStatus.status,
        meetingListLoadStatus: state.meeting.meetingListLoadStatus,
        meetingList: state.meeting.meetingList,
        meetingLoadStatus: state.meeting.meetingLoadStatus,
        currentMeeting: state.meeting.currentMeeting,
        meetingSaveStatus: state.meeting.meetingSaveStatus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        meetingListLoadRequest: (id) => {
            return dispatch(meetingListLoadRequest(id));
        },
        meetingLoadRequest: (id, status) => {
            return dispatch(meetingLoadRequest(id, status));
        },
        meetingSaveRequest: (id, data) => {
            return dispatch(meetingSaveRequest(id, data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeetingContainer);
