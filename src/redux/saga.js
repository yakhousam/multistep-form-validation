// import { call, put, take } from "redux-saga/effects";
// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// function* getUserById(values) {
//   try {
//     yield put({ type: "IS_FETCHING" });
//     yield delay(1000);
//     yield put({ type: "SET_USER", values });
//   } catch (error) {
//     yield put({ type: "SET_ERROR", error: error.message });
//   }
// }

// function* watchGetUser() {
//   while (true) {
//     const { values } = yield take("GET_USER");
//     yield call(getUserById, values);
//   }
// }

// export default watchGetUser;

import { call, put, take } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function forwardTo(location, history) {
  history.push(location);
}

function* sagaPostActions(values, history) {
  try {
    yield put({ type: "POSTING_DRIVER" });
    yield delay(1000);
    yield put({ type: "SET_DRIVER", values });
    yield call(forwardTo, "/thankyou", history);
  } catch (error) {
    yield put({ type: "SET_ERROR", error: error.message });
  }
}

function* watchGetUser() {
  while (true) {
    const { values, history } = yield take("POST_DRIVER_DATA");
    yield call(sagaPostActions, values, history);
  }
}

export default watchGetUser;
