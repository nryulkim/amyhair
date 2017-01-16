import React from 'react';
import { Provider } from "react-redux";
import { Redirect, Router, Route, IndexRoute, hashHistory } from 'react-router';
import { clearErrors } from '../actions/util_actions';
import { getAllColors } from '../actions/color_actions';
import { getBrands } from '../actions/brand_actions';
import App from './app';
import Main from './main/main.jsx';
import Contact from './contact/contact.jsx';
import ProductIndex from './products/index_container.js';
import Show from './products/show/show.jsx';
import MinorIndex from './products/minor_index/minor_index.jsx';
import ColorChart from './colorchart/colorchart_container.js';
import LogIn from './admin/login_container.js';
import CPanel from './admin/controlpanel_container.js';

const Root = ({store}) => {
  window.store = store;
  function resetScreen(){
    window.scrollTo(0,0);
  }

  const _redirectIfLoggedIn = (nextState, replace) => {
    if(store.getState().session.currentUser){
      replace("/cpanel");
    }
    resetScreen();
  };

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    if(!store.getState().session.currentUser){
      replace("/login");
    }
    resetScreen();
  };

  const _getColors = () => {
    if(!store.getState().colors.colors){
      store.dispatch(getAllColors());
    }
    resetScreen();
  }

  const _getBrands = () => {
    if(!store.getState().brands.brands){
      store.dispatch(getBrands());
    }
    resetScreen();
  }

  const _clearErrors = () => {
    store.dispatch(clearErrors());
  };

  const _controlPanel = () => {
    _redirectIfNotLoggedIn();
    _getColors();
    _getBrands();
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Main} />
          <Redirect from="about-us" to="/"/>
          <Redirect from="home" to="/"/>
          <Router path="colorchart" component={ColorChart} onEnter={_getColors}/>
          <Router path="products" component={ProductIndex} onEnter={_getBrands}/>
          <Router path="show/:id" component={Show} onEnter={resetScreen}/>
          <Router path="idx/:id" component={MinorIndex} onEnter={resetScreen}/>
          <Router path="login" history={hashHistory} component={LogIn} onLeave={_clearErrors} onEnter={_redirectIfLoggedIn}/>
          <Router path="cpanel" history={hashHistory} component={CPanel} onEnter={_controlPanel}/>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
