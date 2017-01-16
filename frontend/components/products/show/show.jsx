import React from 'react';
import { Link } from 'react-router';
import ColorObj from '../../color/color'
import { PRODUCT_NAMES } from '../../../actions/product_actions'

class Show extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Not Found',
      description: 'This item cannot be found.',
      image_url: window.imgAssets.brand,
      lengths: []
    }
    this.setItem = this.setItem.bind(this);
    this.getLengthsColors = this.getLengthsColors.bind(this);
  }

  componentDidMount(){
    this.setZoom();
  }

  componentWillReceiveProps(nextProps){
    this.setItem(nextProps);
  }

  setItem(props){
    if(!props){
      props = this.props;
    }
    const item = props.item;
    if(!item){ return null; }
    this.setState({
      name: item.name,
      description: item.description,
      image_url: item.image_url,
      lengths: item.lengths
    });
  }

  setZoom(){
    const options = {
      zoomFactor: 2,
      hoverDelay: 500,
      paneContainer: document.body
    };

    new Drift(document.querySelector('#prod-image'), options);
  }

  getColors(colors){
    const rslt = [];
    for (let i = 0; i < colors.length; i++) {
      rslt.push(
        <ColorObj color={colors[i].name} img={colors[i].image_url} key={i}/>
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

  getLengthsColors(){
    const { lengths } = this.state;
    const rslt = [];
    for (let i = 0; i < lengths.length; i++) {
      const len = lengths[i].length;
      const colors = lengths[i].colors;
      let headTxt = len + '"';
      if(len == -1){
        headTxt = "Colors";
      }


      rslt.push(
        <div key={i}>
          <div className="banner" onClick={this.hideColors(i)}>
            <h5>{headTxt}</h5>
            <i id={"hider" + i} className="fa fa-plus" aria-hidden="true"></i>
          </div>
          <hr className='light'/>
          <div id={"colors" + i} className='color-container hidden'>
            {this.getColors(colors)}
          </div>
        </div>
      )
    }

    return rslt;
  }

  render(){
    const { name, description, image_url, lengths } = this.state;

    return (
      <article id="main">
        <header className="product-banner">
          <h2>{name}</h2>
        </header>
        <div id="product-content">
          <div className="product-image">
            <img
              id="prod-image"
              src={image_url}
              data-zoom={image_url}
              />
          </div>
          <div className="product-description">
            <h4>Description</h4>
              <p>{description}</p>
            <hr/>
            <div className="product-colors">
              <h4>Length and Colors</h4>
              {this.getLengthsColors()}
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Show;
