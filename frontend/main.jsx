import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as BrandApi from './util/brand_api';

window.BrandAPI = BrandApi;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore({});
    ReactDOM.render(<Root store={store}></Root>, root);
});
