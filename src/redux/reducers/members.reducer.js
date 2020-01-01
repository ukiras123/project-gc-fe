import { memberConstants } from "../constants";

const initialState = {
  members: [],
  member: {},

  addError: false,
  addProgress: false,

  updateError: false,
  updateProgress: false,

  deleteError: false,
  deleteProgress: false,

  getAllError: false,
  getAllProgress: false
};

export function member(state = initialState, action) {
  switch (action.type) {
    case memberConstants.MEMBER_ADD:
      return Object.assign({}, state, {
        addProgress: true
      });
    case memberConstants.MEMBER_ADD_SUCCESS:
      return Object.assign({}, state, {
        member: action.detail,
        addProgress: false,
        addError: false
      });
    case memberConstants.MEMBER_ADD_ERROR:
      return Object.assign({}, state, {
        getAllError: true, addProgress: false
      });


      case memberConstants.MEMBER_GET_ALL:
        return Object.assign({}, state, {
          getAllProgress: true
        });
      case memberConstants.MEMBER_GET_ALL_SUCCESS:
        return Object.assign({}, state, {
          members: action.detail,
          getAllProgress: false,
          getAllError: false
        });
      case memberConstants.MEMBER_GET_ALL_ERROR:
        return Object.assign({}, state, {
          getAllError: true, getAllProgress: false
        });
    default:
      return state;
  }
}
