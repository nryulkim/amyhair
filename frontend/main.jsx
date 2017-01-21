import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as FeaturedAPI from './util/api/featured_api';

window.FeaturedAPI = FeaturedAPI;

document.addEventListener('DOMContentLoaded', () => {
    let initialState = {};
    if(window.currentUser){
      initialState = {session:{currentUser: window.currentUser}};
    }
    const root = document.getElementById('root');
    const store = configureStore(initialState);
    ReactDOM.render(<Root store={store}></Root>, root);
});
