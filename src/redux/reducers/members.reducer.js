import { memberConstants } from "../constants";

const initialState = {
  members: [],
  member: {},
  memberId: null,

  addError: false,
  addProgress: false,

  updateError: false,
  updateProgress: false,

  deleteError: false,
  deleteProgress: false,

  getAllError: false,
  getAllProgress: false,

  getOneError: false,
  getOneProgress: false
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

    case memberConstants.MEMBER_GET_ONE:
      return Object.assign({}, state, {
        getOneProgress: true
      });
    case memberConstants.MEMBER_GET_ONE_SUCCESS:
      const returnObj = Object.assign({}, state, {
        member: action.detail,
        memberId: action.id,
        getOneProgress: false,
        getOneError: false
      });
      return returnObj;
    case memberConstants.MEMBER_GET_ONE_ERROR:
      return Object.assign({}, state, {
        getOneError: true, getOneProgress: false
      });
    default:
      return state;
  }
}
