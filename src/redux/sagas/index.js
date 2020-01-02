import { put, takeLatest, all } from "redux-saga/effects";
import { memberConstants } from "../constants";
import {config} from "../../config"


function* fetchMembers() {
  try {
    const json = yield fetch(`${config.API_URL}/members`)
      .then(response => response.json())
      .then(myJson => myJson);
    yield put({ type: memberConstants.MEMBER_GET_ALL_SUCCESS, detail: json });
  } catch (e) {
    yield put({ type: memberConstants.MEMBER_GET_ALL_ERROR });
  }
}

function* fetchOneMember(input) {
  const {id} = input;
  try {
    const json = yield fetch(`${config.API_URL}/members/${id}`)
        .then(response => response.json())
        .then(myJson => myJson);
    yield put({ type: memberConstants.MEMBER_GET_ONE_SUCCESS, detail: json, id: id });
  } catch (e) {
    yield put({ type: memberConstants.MEMBER_GET_ONE_ERROR });
  }
}

function* actionWatcher() {
  yield takeLatest(memberConstants.MEMBER_GET_ALL, fetchMembers);
  yield takeLatest(memberConstants.MEMBER_GET_ONE, fetchOneMember);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
