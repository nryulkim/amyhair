import React from 'react';
import ColorObj from '../color/color';
import { Link } from 'react-router';


class ColorChart extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $("#page-wrapper").addClass('colorchart-page');
  }
  componentWillUnmount(){
    $('#page-wrapper').removeClass('colorchart-page');
  }

  getColors(color_type){
    if(!this.props.colors){ return null; }
    const colors = this.props.colors[color_type];

    const rslt = [];
    for (let i = 0; i < colors.length; i++) {
      const imgPath = colors[i].image_url;
      rslt.push(
        <ColorObj key={i} color={colors[i].name} img={imgPath}/>
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
        <header className="colorchart">
          <h2>Color Chart</h2>
        </header>
        <div className="colorchart-content">
          <section className="color-box">
            <div className="banner" onClick={this.hideColors(1)}>
              <h3>Solid Colors</h3>
              <i id="hider1" className="fa fa-plus" aria-hidden="true"></i>
            </div>
            <hr className='light'/>
            <div id="colors1" className='color-container hidden'>
              {this.getColors("solid")}
            </div>

            <div className="banner" onClick={this.hideColors(2)}>
              <h3>Frost Mix Colors</h3>
              <i id="hider2" className="fa fa-plus" aria-hidden="true"></i>
            </div>
            <hr className='light'/>
            <div id="colors2" className='color-container hidden'>
              {this.getColors("frost mix")}
            </div>

            <div className="banner" onClick={this.hideColors(3)}>
              <h3>Two Tone Colors</h3>
              <i id="hider3" className="fa fa-plus" aria-hidden="true"></i>
            </div>
            <hr className='light'/>
            <div id="colors3" className='color-container hidden'>
              {this.getColors("two tone")}
            </div>

            <div className="banner" onClick={this.hideColors(4)}>
              <h3>Special F Mix Colors</h3>
              <i id="hider4" className="fa fa-plus" aria-hidden="true"></i>
            </div>
            <hr className='light'/>
            <div id="colors4" className='color-container hidden'>
              {this.getColors("special f mix")}
            </div>

            <div className="banner" onClick={this.hideColors(5)}>
              <h3>Three Tone Colors</h3>
              <i id="hider5" className="fa fa-plus" aria-hidden="true"></i>
            </div>
            <hr className='light'/>
            <div id="colors5" className='color-container hidden'>
              {this.getColors("three tone")}
            </div>

            <div className="banner" onClick={this.hideColors(6)}>
              <h3>Freya Silky Colors</h3>
              <i id="hider6" className="fa fa-plus" aria-hidden="true"></i>
            </div>
            <hr className='light'/>
            <div id="colors6" className='color-container hidden'>
              {this.getColors("freya silky")}
            </div>
          </section>
        </div>
      </article>
    );
  }
}

export default ColorChart;
