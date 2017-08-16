import {
  CREATE_MEETING,
  CREATE_MEETING_SUCCESS,
  CREATE_MEETING_FAILURE,
  CREATE_MEETING_END,
  MEETING_STATUS_END,
  MEETING_STATUS_WAIT,
  MEETING_LIST_LOAD,
  MEETING_LIST_LOAD_SUCCESS,
  MEETING_LIST_LOAD_FAILURE,
  MEETING_LIST_LOAD_END,
  MEETING_LOAD,
  MEETING_LOAD_SUCCESS,
  MEETING_LOAD_FAILURE,
  MEETING_LOAD_END,
  MEETING_SAVE,
  MEETING_SAVE_SUCCESS,
  MEETING_SAVE_FAILURE,
  MEETING_SAVE_END
} from './ActionTypes';
import axios from 'axios';

/*============================================================================
    Meeting
==============================================================================*/

/* CREATE_MEETING */
export function createMeetingRequest(title, content, date, userList, startTime, comment, partName) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(createMeeting());

        return axios.post('api/meeting/add', { title, content, date, userList, startTime, comment, partName })
        .then((response) => {
            console.log(response);
            // SUCCEED
            if(response.data.result=="SUCCESS"){
              dispatch(createMeetingSuccess());
            }else{
              dispatch(createMeetingFailure());
            }


        }).catch((error) => {
            // FAILED
            dispatch(createMeetingFailure());
        });
    };
}

export function createMeeting() {
    return {
        type: CREATE_MEETING
    };
}

export function createMeetingSuccess() {
    return {
        type: CREATE_MEETING_SUCCESS
    };
}

export function createMeetingFailure() {
    return {
        type: CREATE_MEETING_FAILURE
    };
}

export function createMeetingEnd() {
  return {
      type: CREATE_MEETING_END
  }
}

/* MEETING_STATUS_CHANGE */

export function meetingStatusEnd() {
  return {
      type: MEETING_STATUS_END
  }
}

export function meetingStatusWait() {
  return {
      type: MEETING_STATUS_WAIT
  }
}

/* MEETING_LIST_LOAD */

export function meetingListLoadRequest(id) {
  return (dispatch) => {
      // Inform Login API is starting
      dispatch(meetingLoad());
      let url = 'api/user/end/' + id;
      return axios.get(url)
      .then((response) => {
        let end = response.data;
        console.log(response);
        url = 'api/user/wait/' + id;
        return axios.get(url)
        .then((res) => {
          let wait = res.data;
          console.log(end);
          console.log(wait);
          dispatch(meetingListLoadSuccess(end, wait));
        }).catch((error) => {
          dispatch(meetingListLoadFailure());
        })
      }).catch((error) => {
          dispatch(meetingListLoadFailure());
      });
  };
}

export function meetingListLoad() {
  return {
      type: MEETING_LIST_LOAD
  }
}

export function meetingListLoadSuccess(end, wait) {
  return {
      type: MEETING_LIST_LOAD_SUCCESS,
      end,
      wait
  }
}

export function meetingListLoadFailure() {
  return {
      type: MEETING_LIST_LOAD_FAILURE
  }
}

export function meetingListLoadEnd() {
  return {
      type: MEETING_LIST_LOAD_END
  }
}

/* MEETING_LOAD */

export function meetingLoadRequest(id, status) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(meetingLoad());
        let url = 'api/meeting/info/' + id.toString();
        return axios.get(url)
        .then((response) => {
          console.log(response);
          dispatch(meetingLoadSuccess(response.data));
          if(status == 'END'){
            dispatch(meetingStatusEnd());
          }else{
            dispatch(meetingStatusWait());
          }
        }).catch((error) => {
          dispatch(meetingLoadFailure());
        });
    };
}

export function meetingLoad() {
  return {
      type: MEETING_LOAD
  }
}

export function meetingLoadSuccess(data) {
  return {
      type: MEETING_LOAD_SUCCESS,
      data
  }
}

export function meetingLoadFailure() {
  return {
      type: MEETING_LOAD_FAILURE
  }
}

export function meetingLoadEnd() {
  return {
      type: MEETING_LOAD_END
  }
}

/* MEETING_SAVE */

export function meetingSaveRequest(id, data) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(meetingSave());
        let url = 'api/meeting/info/' + id.toString();
        return axios.get(url)
        .then((response) => {
          console.log(response);
          dispatch(meetingSaveSuccess(response.data));
        }).catch((error) => {
          dispatch(meetingSaveFailure());
        });
    };
}

export function meetingSave() {
  return {
      type: MEETING_SAVE
  }
}

export function meetingSaveSuccess() {
  return {
      type: MEETING_SAVE_SUCCESS
  }
}

export function meetingSaveFailure() {
  return {
      type: MEETING_SAVE_FAILURE
  }
}

export function meetingSaveEnd() {
  return {
      type: MEETING_SAVE_END
  }
}
