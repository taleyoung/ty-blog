import { combineReducers } from "redux";

import counter from "./counter";
import article from "./article";

let reducers = combineReducers({ counter, article });
export type Store = ReturnType<typeof reducers>;
export default reducers;
