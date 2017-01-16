import React from 'react';
import { Link, withRouter } from 'react-router';

class Header  extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const $body = $('body');
    $('#menu')
      .append('<a href="#menu" class="close"></a>')
      .appendTo($body)
      .panel({
        delay: 100,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'right',
        target: $body,
        visibleClass: 'is-menu-visible'
      });
  }

  render(){
    let cpanel = null;
    if(this.props.currentUser){
      cpanel = <li><a href="#cpanel">Control Panel</a></li>;
    }
    return (
      <div id="menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#colorchart">Color Chart</a></li>
          {cpanel}
        </ul>
      </div>
      );
  }
}

export default withRouter(Header);
