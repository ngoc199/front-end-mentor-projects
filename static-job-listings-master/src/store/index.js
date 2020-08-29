import { createStore } from "redux";
import rootReducer from "../reducers";

let store = createStore(rootReducer);
console.log(store.getState());

export default store;
