import React from 'react';
import { Link, withRouter } from 'react-router';

class Header  extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return (
      <header id="header" className="alt">
        <h1><Link to="index.html">
          <img src="./images/logo.png" alt=""></img>
        </Link></h1>
        <nav id="nav">
          <ul>
            <li className="special">
              <a onClick={() => {
                  $(".landing").addClass("is-menu-visible");
                }} className="menuToggle"><span>Menu</span></a>
              </li>
            </ul>
          </nav>
        </header>
      );
  }
}

export default withRouter(Header);
