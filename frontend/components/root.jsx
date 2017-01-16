import React from 'react';
import { Provider } from "react-redux";
import { Redirect, Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Main from './main/main.jsx';
import Contact from './contact/contact.jsx';
import ProductIndex from './products/index.jsx';
import Show from './products/show/show.jsx';
import MinorIndex from './products/minor_index/minor_index.jsx';
import ColorChart from './colorchart/colorchart.jsx';

const Root = ({store}) => {
  function resetScreen(){
    window.scrollTo(0,0);
  }
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Main} />
          <Redirect from="about-us" to="/"/>
          <Redirect from="home" to="/"/>
          <Router path="colorchart" component={ColorChart} onEnter={resetScreen}/>
          <Router path="contactus" component={Contact} onEnter={resetScreen}/>
          <Router path="products" component={ProductIndex} onEnter={resetScreen}/>
          <Router path="show/:id" component={Show} onEnter={resetScreen}/>
          <Router path="idx/:id" component={MinorIndex} onEnter={resetScreen}/>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
