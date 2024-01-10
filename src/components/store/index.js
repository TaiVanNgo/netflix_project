import { applyMiddleware, createStore } from "redux";
import { composeWidthDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];
const store = createStore(
    rootReducer,
    composeWidthDevTools(applyMiddleware(...middleware))
);

export default store;