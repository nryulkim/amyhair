import React from 'react';
import { Link } from 'react-router';
import About from './aboutus/aboutus.jsx';
import Banner from './banner/banner.jsx';
import Featured from '../featured/featured_brands_container';

function Main(props){
  return (
    <div className="main-page">
      <Banner/>
      <Featured/>
      <About/>
    </div>
  );
}

export default Main;
