import { call, put, take } from "redux-saga/effects";
import { postMultiStepsForm } from "./api";

function forwardTo(location, history) {
  history.push(location);
}

function* sagaPostActions(values, history) {
  try {
    yield postMultiStepsForm(values);
    yield call(forwardTo, "/thankyou", history);
  } catch (error) {
    yield put({ type: "SET_ERROR", error: error.message });
  }
}

function* watchGetUser() {
  while (true) {
    const { values, history } = yield take("SAVE_FORM");
    yield call(sagaPostActions, values, history);
  }
}

export default watchGetUser;
