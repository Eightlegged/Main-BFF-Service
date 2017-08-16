import React, { Component } from 'react';
import CreateMeeting from '../components/CreateMeeting';
import { connect } from 'react-redux';
import { createMeetingRequest } from '../actions/Meeting';

class CreateMeetingContainer extends Component {
  constructor(props){

    super(props);

    this.handleCreateMeeting = this.handleCreateMeeting.bind(this);
  }

  handleCreateMeeting(title, content, date, userList, startTime, comment, partName) {
      return this.props.createMeetingRequest(title, content, date, userList, startTime, comment, partName).then(() => {
        if(this.props.status === "SUCCESS") {
          return true;
        } else {
          console.log('createMeeting failed');
          return false;
        }
      }
    );
  }

  render() {
    return (
      <div>
        <CreateMeeting onCreateMeeting={this.handleCreateMeeting} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        status: state.meeting.createMeeting.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createMeetingRequest: (title, content, date, userList, startTime, comment, partName, checkList) => {
            return dispatch(createMeetingRequest(title, content, date, userList, startTime, comment, partName, checkList));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeetingContainer);
