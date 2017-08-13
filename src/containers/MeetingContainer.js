import React, { Component } from 'react';
import Meeting from '../components/meeting/Meeting';
import { connect } from 'react-redux';
import { meetingListLoadRequest, meetingLoadRequest  } from '../actions/Meeting';

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
        <Meeting meetingstatus={this.props.meetingStatus}
         meetingListStatus={this.props.meetingListStatus}
         meetingList={this.props.meetingList}
         meetingListLoadStatus={this.props.meetingListLoadStatus}
         currentMeeting={this.props.currentMeeting}
         meetingListLoadRequest={this.props.meetingListLoadRequest}
         meetingLoadRequest={this.props.meetingLoadRequest}
         />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        userid: state.authentication.status.currentUser,
        meetingstatus: state.meeting.meetingStatus,
        meetingListLoadStatus: state.meeting.meetingListLoadStatus,
        meetingList: state.meeting.meetingList,
        meetingLoadStatus: state.meeting.meetingLoadStatus,
        currentMeeting: state.meeting.currentMeeting
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        meetingListLoadRequest: (title, content, date, userList, startTime, comment, partName) => {
            return dispatch(meetingListLoadRequest(title, content, date, userList, startTime, comment, partName));
        },
        meetingLoadRequest: () => {
            return dispatch(meetingLoadRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeetingContainer);
