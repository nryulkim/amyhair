import React from 'react';

class Banner extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const $header = $('#header');
    $('.scrolly')
      .scrolly({
        speed: 1500,
        offset: $header.outerHeight()
      });
  }

  render(){
    return (
      <section id="banner">
        <div className="inner">
          <h2><img src="./images/logo.png" alt=""></img></h2>
          <p>Bring Out Your Beauty</p>
          <ul className="actions">
            <li><a href="#featured-products" className="scrolly button special">Featured Products</a></li>
          </ul>
        </div>
        <a href="#about-us" className="more scrolly">About Us</a>
      </section>
    );
  }
}

export default Banner;
