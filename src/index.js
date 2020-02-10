import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";

import { MembersPage, LandingPage, MemberProfilePage, CentralMemberPage } from "views/index";

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./helpers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./redux/reducers";
import rootSaga from "./redux/sagas";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Switch>
          <Route path="/members/:memberId" render={props => <MemberProfilePage {...props} />}/>
          <Route path="/members" render={props => <MembersPage {...props} />} />
          <Route path="/centralMembers" render={props => <CentralMemberPage {...props} />} />
          <Route path="/" render={props => <LandingPage {...props} />} />
        </Switch>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
