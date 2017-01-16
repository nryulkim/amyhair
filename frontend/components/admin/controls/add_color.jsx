import React from 'react';
import { Link, withRouter } from 'react-router';
import { setDragAndDrop } from '../../../util/util_functions';

class CPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: "",
      name: "",
      imgFile: "",
      imgURL: window.imgAssets.defaultColor
    };
    this.update = this.update.bind(this);
    this.getImg = this.getImg.bind(this);
    this.updateImg = this.updateImg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    setDragAndDrop("#dropImg", this.getImg);
  }

  update(input){
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  updateImg(e){
    const file = e.currentTarget.files[0];
    this.getImg(file);
  }

  getImg(file){
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imgFile: file, imgURL: fileReader.result });
    };
    if(file){
      fileReader.readAsDataURL(file);
    }

  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    console.log("pressed submit");
  }

  render(){
    const { formType } = this.props;

    return(
      <form className="add-color-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.type}
          onChange={this.update('type')}
          placeholder="What kind of color is it? (Basic, Mix)"/>
        <input
          type="text"
          value={this.state.name}
          onChange={this.update('name')}
          placeholder="What is the name of the color? (1, 1b)"/>
        <div className="img-input-container">
          <div id="dropImg">
            <input type="file" className="drop_file"  id="img" onChange={this.updateImg}></input>
            <label htmlFor="img">
              <img className="img" src={this.state.imgURL}/>
              <strong>Choose an image</strong> or drag it here.
            </label>
          </div>

          <button id="submit" type="submit">Submit</button>
        </div>

      </form>
    );
  }
}

export default withRouter(CPanel);
