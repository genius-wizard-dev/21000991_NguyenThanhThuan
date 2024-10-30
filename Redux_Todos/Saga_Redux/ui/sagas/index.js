import { all, call, put, takeEvery } from "redux-saga/effects";

const API_URL = "https://6716278c33bc2bfe40bcaadb.mockapi.io/todos";

function* fetchData() {
  try {
    const response = yield call(fetch, API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = yield response.json();
    yield put({ type: "FETCH_DATA_SUCCESS", payload: jsonData });
  } catch (error) {
    yield put({ type: "FETCH_DATA_FAILURE", payload: error.message });
  }
}

function* addTodo({ payload }) {
  try {
    const response = yield call(fetch, API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const newTodo = yield response.json();
    // Dispatch an action to add the new todo with the generated id
    yield put({ type: "ADD_TODO_SUCCESS", payload: newTodo });
  } catch (error) {
    console.error("Error adding todo:", error);
  }
}

function* editTodo({ payload }) {
  try {
    const response = yield call(fetch, `${API_URL}/${payload.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const updatedTodo = yield response.json();
    yield put({ type: "FETCH_DATA" });
  } catch (error) {
    console.error("Error editing todo:", error);
  }
}

function* deleteTodo({ payload }) {
  try {
    yield call(fetch, `${API_URL}/${payload}`, {
      method: "DELETE",
    });
    yield put({ type: "FETCH_DATA" }); // Refresh the data
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}

function* watchFetchData() {
  yield takeEvery("FETCH_DATA", fetchData);
}

function* watchAddTodo() {
  yield takeEvery("ADD_TODO", addTodo);
}

function* watchEditTodo() {
  yield takeEvery("EDIT_TODO", editTodo);
}

function* watchDeleteTodo() {
  yield takeEvery("DELETE_TODO", deleteTodo);
}

export default function* rootSaga() {
  yield all([
    watchFetchData(),
    watchAddTodo(),
    watchEditTodo(),
    watchDeleteTodo(),
  ]);
}
