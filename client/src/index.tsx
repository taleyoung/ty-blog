import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { syncHistoryWithStore ,routerReducer} from 'react-router-redux'

import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "antd/dist/antd.css";

// const history = syncHistoryWithStore(Router, store)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App></App>
    </Router>
  </Provider>,
  document.getElementById("app")
);
