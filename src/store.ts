import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "reducers";
import { rootSaga } from "sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export type rootState = ReturnType<typeof rootReducer>;
export type dispatchType = typeof store.dispatch;

export default store;

sagaMiddleware.run(rootSaga);