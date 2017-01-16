import React from 'react';
import { Link, withRouter } from 'react-router';
import { setDragAndDrop } from '../../../util/util_functions';

class AddColor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color_type: "solid",
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
    $("#submit").prop("disabled",true).toggleClass("disabled");

    const { name, color_type, imgFile } = this.state;
    const output = new FormData();
    output.append("color[name]", name);
    output.append("color[color_type]", color_type.toLowerCase());
    output.append("color[img]", imgFile);
    this.props.addColor(output);
    this.props.router.push({pathname: "/login"});
    this.setState({
      color_type: "",
      name: "",
      imgFile: "",
      imgURL: window.imgAssets.defaultColor
    });
  }

  render(){
    const { formType } = this.props;

    return(
      <form className="add-color-form" onSubmit={this.handleSubmit}>
        <select value={this.state.color_type} onChange={this.update('color_type')}>
          <option value="solid">Solid</option>
          <option value="frost mix">Frost Mix</option>
          <option value="two tone">Two Tone</option>
          <option value="special f mix">Special F Mix</option>
          <option value="three tone">Three Tone</option>
          <option value="freya silky">Freya Silky</option>
        </select>
        <input
          type="text"
          value={this.state.name}
          onChange={this.update('name')}
          placeholder="What is the name of the color? (1, 1b...)"/>
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

export default withRouter(AddColor);
