import React from 'react';
import { Link } from 'react-router';
import ColorObj from '../../color/color'
import { PRODUCT_NAMES } from '../../../actions/product_actions'

class Show extends React.Component{
  constructor(props){
    super(props);
    this.tempColors = ['1', '1b', '2', '33', 'red', 'bug'];
  }
  componentDidMount(){
    $("#page-wrapper").addClass('products-page');
    this.setZoom();
  }
  componentWillUnmount(){
    $('#page-wrapper').removeClass('products-page');
  }

  setZoom(){
    const options = {
      zoomFactor: 2,
      hoverDelay: 500,
      paneContainer: document.body
    };

    new Drift(document.querySelector('#prod-image'), options);
  }

  onError(){
    this.src = './images/haircolors/default.jpg';

  }

  getColors(){
    const rslt = [];
    const colors = this.tempColors;

    for (let i = 0; i < colors.length; i++) {
      const imgPath = `./images/haircolors/${colors[i]}.jpg`;
      rslt.push(
        <ColorObj key={i} color={colors[i]}/>
      )
    }
    return rslt;
  }

  hideColors(id){
    return () => {
      const $hider = $(`#hider${id}`);
      $(`#colors${id}`).toggleClass("hidden");

      if($hider.hasClass('fa-minus')){
        $hider.removeClass('fa-minus');
        $hider.addClass('fa-plus');
      }else{
        $hider.removeClass('fa-plus');
        $hider.addClass('fa-minus');
      }
    }
  }

  render(){
    return (
      <article id="main">
        <header className="product-banner">
          <h2>Product Name</h2>
        </header>
        <div id="product-content">
          <div className="product-image">
            <img
              id="prod-image"
              src="./images/backgrounds/back1.jpg"
              data-zoom="./images/backgrounds/back1.jpg"
              />
          </div>
          <div className="product-description">
            <h4>Description</h4>
              <p>Product description. More information should come here. Please add.</p>
            <hr/>
            <div className="product-colors">
            <h4>Length and Colors</h4>
              <div className="banner" onClick={this.hideColors(1)}>
                <h5>14&rdquo;</h5>
                <i id="hider1" className="fa fa-minus" aria-hidden="true"></i>
              </div>
              <hr className='light'/>
              <div id="colors1" className='color-container'>
                {this.getColors()}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Show;
