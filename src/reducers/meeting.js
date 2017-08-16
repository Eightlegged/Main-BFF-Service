import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    createMeeting: {
        status: 'END'
    },
    meetingStatus: {
      status: 'NONE'
    },
    meetingListLoadStatus: {
      status: 'INIT'
    },
    meetingList: {
      endMeetings: [],
      waitMeetings: []
    },
    meetingLoadStatus: {
      status: 'END'
    },
    currentMeeting: {
      data: {}
    },
    meetingSaveStatus: {
      status: 'END'
    }
};

export default function meeting(state, action) {
    if(typeof state === "undefined")
        state = initialState;

    switch(action.type) {
        /* CREATE_MEETING */
        case types.CREATE_MEETING:
            return update(state, {
                createMeeting: {
                    status: { $set: 'WAITING' }
                }
            });

        case types.CREATE_MEETING_SUCCESS:
            return update(state, {
                createMeeting: {
                    status: { $set: 'SUCCESS' }
                }
        });
        case types.MEETING_STATUS_NONE:
            return update(state, {
                meetingStatus: {
                    status: { $set: 'NONE'}
                },
                currentMeeting: {
                    data: { $set: {} }
                },
                meetingListLoadStatus: {
                    status: { $set: 'INIT' }
                },
                meetingList: {
                  endMeetings: { $set: [] },
                  waitMeetings: { $set: [] }
                }
            })
        case types.CREATE_MEETING_END:
            return update(state, {
                createMeeting: {
                    status: { $set: 'END'}
                }
            })
        case types.CREATE_MEETING_FAILURE:
            return update(state, {
                createMeeting: {
                    status: { $set: 'FAILURE' }
                }
            });
        /* MEETING_STATUS_CHANGE */
        case types.MEETING_STATUS_END:
            return update(state, {
                meetingStatus: {
                    status: { $set: 'END' }
                }
            });
        case types.MEETING_STATUS_WAIT:
            return update(state, {
                meetingStatus: {
                    status: { $set: 'WAIT' }
                }
        });
        case types.MEETING_LIST_LOAD:
            return update(state, {
                meetingListLoadStatus: {
                    status: { $set: 'WAITING' }
                }
        });
        case types.MEETING_LIST_LOAD_SUCCESS:
            return update(state, {
                meetingListLoadStatus: {
                    status: { $set: 'SUCCESS' }
                },
                meetingList: {
                  endMeetings: { $set: action.end  },
                  waitMeetings: { $set: action.wait }
                }
        });
        case types.MEETING_LIST_LOAD_FAILURE:
            return update(state, {
                meetingListLoadStatus: {
                    status: { $set: 'FAILURE' }
                }
        });
        case types.MEETING_LIST_LOAD_END:
            return update(state, {
                meetingListLoadStatus: {
                    status: { $set: 'END' }
                }
        });
        case types.MEETING_LOAD:
            return update(state, {
                meetingLoadStatus: {
                    status: { $set: 'WAITING' }
                }
        });
        case types.MEETING_LOAD_SUCCESS:
            return update(state, {
                meetingLoadStatus: {
                    status: { $set: 'SUCCESS' }
                },
                currentMeeting: {
                  data: { $set: action.data  }
                }
        });
        case types.MEETING_LOAD_FAILURE:
            return update(state, {
                meetingLoadStatus: {
                    status: { $set: 'FAILURE' }
                }
        });
        case types.MEETING_LOAD_END:
            return update(state, {
                meetingLoadStatus: {
                    status: { $set: 'END' }
                }
        });
        case types.MEETING_SAVE:
            return update(state, {
                meetingSaveStatus: {
                    status: { $set: 'WAITING' }
                }
        });
        case types.MEETING_SAVE_SUCCESS:
            return update(state, {
                meetingSaveStatus: {
                    status: { $set: 'SUCCESS' }
                }
        });
        case types.MEETING_SAVE_FAILURE:
            return update(state, {
                meetingSaveStatus: {
                    status: { $set: 'FAILURE' }
                }
        });
        case types.MEETING_SAVE_END:
            return update(state, {
                meetingSaveStatus: {
                    status: { $set: 'END' }
                }
        });

        default:
            return state;
    }
}
