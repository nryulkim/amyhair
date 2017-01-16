import React from 'react';

class ColorObj extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      img: window.imgAssets[`${this.props.color}.jpg`]
    };
  }

  onError(){
    this.setState({ img: window.imgAssets[`default.jpg`] });
  }

  render(){
    return(
      <div className="color">
        <img className="color-img"
          src={this.state.img}
          onError={this.onError.bind(this)}
        ></img>
        <p>{this.props.color}</p>
      </div>
    )
  }
}

export default ColorObj;
