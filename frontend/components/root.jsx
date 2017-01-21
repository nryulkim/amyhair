import React from 'react';
import { Provider } from "react-redux";
import { Redirect, Router, Route, IndexRoute, hashHistory } from 'react-router';
import * as RootFunctions from '../util/root_functions';

import App from './app';
import Main from './main/main.jsx';
import Contact from './contact/contact.jsx';
import BrandIndex from './products/index_container.js';
import Show from './products/show/show_container.js';
import MinorIndex from './products/minor_index/minor_index_container.js';
import ProductIndex from './products/prod_index/prod_index_container.js';
import ColorChart from './colorchart/colorchart_container.js';
import LogIn from './admin/login_container.js';
import CPanel from './admin/controlpanel_container.js';

const Root = ({ store }) => {
  window.store = store;
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Main} onEnter={RootFunctions._main(store)}/>
          <Redirect from="about-us" to="/"/>
          <Redirect from="home" to="/"/>
          <Router path="colorchart" component={ColorChart} onEnter={RootFunctions._getColors(store)}/>
          <Router path="products" component={BrandIndex} onEnter={RootFunctions._main(store)}/>
          <Router path="show/:id" component={Show} onEnter={RootFunctions._getItem(store)}/>
          <Router path="idx/:id" component={MinorIndex} onEnter={RootFunctions._getBrands(store)}/>
          <Router path="prod/:id" component={ProductIndex} onEnter={RootFunctions._getProduct(store)}/>
          <Router path="login" history={hashHistory} component={LogIn} onLeave={RootFunctions._clearErrors(store)} onEnter={RootFunctions._redirectIfLoggedIn(store)}/>
          <Router path="cpanel" history={hashHistory} component={CPanel} onEnter={RootFunctions._controlPanel(store)}/>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
