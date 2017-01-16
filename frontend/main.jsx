import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as UserAPI from './util/user_api';
import * as SessionAPI from './util/session_api';

window.UserAPI = UserAPI;
window.SessionAPI = SessionAPI;

document.addEventListener('DOMContentLoaded', () => {
    let initialState = {};
    if(window.currentUser){
      initialState = {session:{currentUser: window.currentUser}};
    }
    const root = document.getElementById('root');
    const store = configureStore({});
    ReactDOM.render(<Root store={store}></Root>, root);
});
