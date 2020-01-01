/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { history } from "./helpers";
import { Provider } from 'react-redux';
import { store } from "./redux/store";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
// pages for this kit
import { Members, LandingPage, MemberProfile} from "views/index";

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter history={history}>
    <Switch>
      <Switch>
        <Route
          path="/members/:memberId"
          render={props => <MemberProfile {...props} />}
        />
        <Route path="/members" render={props => <Members {...props} />} />
        <Route path="/" render={props => <LandingPage {...props} />} />
      </Switch>
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
