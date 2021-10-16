import { call, put, take } from "redux-saga/effects";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* getUserById(values) {
  try {
    yield put({ type: "IS_FETCHING" });
    yield delay(1000);
    yield put({ type: "SET_USER", values });
  } catch (error) {
    yield put({ type: "SET_ERROR", error: error.message });
  }
}

function* watchGetUser() {
  while (true) {
    const { values } = yield take("GET_USER");
    yield call(getUserById, values);
  }
}

export default watchGetUser;
