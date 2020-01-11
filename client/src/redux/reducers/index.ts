import { combineReducers } from "redux";

import counter from "./counter";
import article from "./article";
import tag from "./tag";

let reducers = combineReducers({ counter, article, tag });
export type Store = ReturnType<typeof reducers>;
export default reducers;
