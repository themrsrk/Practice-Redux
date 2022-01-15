import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const store = createStore(reducer, {}, applyMiddleware(thunk)) //thunk is used for execution of asynchronous functions
export default store;