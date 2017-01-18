import React from 'react';
import Menu from './menu_container';
import { Link, withRouter } from 'react-router';

class Header  extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header id="header" className="alt">
        <h1><Link to="">
          <img src={window.imgAssets.logo} alt=""></img>
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
        <Menu/>
      </header>
      );
  }
}

export default withRouter(Header);
