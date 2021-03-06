import React, { Component } from 'react';
import Meeting from '../components/meeting/Meeting';
import { connect } from 'react-redux';
import { meetingListLoadRequest, meetingLoadRequest, meetingSaveRequest, meetingStatusNone  } from '../actions/Meeting';

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

  componentWillUnmount(){
    this.props.meetingStatusNone();
  }

  componentDidUpdate(prevProps, prevState){
  }

  render() {
    return (
      <div>
        <Meeting meetingStatus={this.props.meetingStatus}
         meetingStatus={this.props.meetingStatus}
         meetingList={this.props.meetingList}
         meetingListLoadStatus={this.props.meetingListLoadStatus}
         currentMeeting={this.props.currentMeeting}
         meetingSaveStatus={this.props.meetingSaveStatus}
         meetingListLoadRequest={this.props.meetingListLoadRequest}
         meetingLoadRequest={this.props.meetingLoadRequest}
         meetingSaveRequest={this.props.meetingSaveRequest}
         meetingStatusNone={this.props.meetingStatusNone}
         />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        userid: state.authentication.status.user_id,
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
        meetingLoadRequest: (data, status) => {
            return dispatch(meetingLoadRequest(data, status));
        },
        meetingSaveRequest: (id, data, partName, checkList) => {
            return dispatch(meetingSaveRequest(id, data, partName, checkList));
        },
        meetingStatusNone: () => {
            return dispatch(meetingStatusNone());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeetingContainer);
