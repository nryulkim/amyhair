import React from 'react';
import { Link, withRouter } from 'react-router';
import { setDragAndDrop } from '../../../../util/util_functions';

class UpdateColor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: null,
      color_type: "",
      name: "",
      imgFile: "",
      imgURL: window.imgAssets.defaultColor
    };
    this.updateImg = this.updateImg.bind(this);
    this.getImg = this.getImg.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.getColorList = this.getColorList.bind(this);
    this.getForm = this.getForm.bind(this);
    this.colorChooser = this.colorChooser.bind(this);
    this.setName = this.setName.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    $("#submit").prop("disabled",true).toggleClass("disabled");

    const { id, name, color_type, imgFile } = this.state;
    const output = new FormData();
    output.append("color[name]", name);
    output.append("color[id]", id);
    output.append("color[color_type]", color_type.toLowerCase());
    if(imgFile){
      output.append("color[img]", imgFile);
    }
    this.props.updateColor(output);
    this.setState({
      id: null,
      color_type: "",
      name: "",
      imgFile: "",
      imgURL: window.imgAssets.defaultColor
    });
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

  handleShow(color_type){
    return (e) => {
      e.preventDefault();
      this.setState({ color_type: color_type });
    }
  }

  setName(color){
    return (e) => {
      e.preventDefault();
      this.setState({ id: color.id, name: color.name, imgURL: color.image_url });
    }
  }

  getColorList(){
    const { color_type } = this.state;
    const { colors } = this.props;
    if(!color_type) { return null; }

    const colorArr = colors[color_type];
    const rslt = [];
    for (let i = 0; i < colorArr.length; i++) {
      rslt.push(<li key={i}><a onClick={this.setName(colorArr[i])}>{colorArr[i].name}</a></li>);
    }

    return rslt;
  }

  colorChooser(){
    let rslt = [];
    const { colors } = this.props;

    return(
      <div className="chooser">
        <div className="type-chooser">
          <ul>
            <li>
              <a onClick={this.handleShow("solid")}>Solid Colors</a>
            </li>
            <li>
              <a onClick={this.handleShow("frost mix")}>Frost Mix Colors</a>
            </li>
            <li>
              <a onClick={this.handleShow("two tone")}>Two Tone Colors</a>
            </li>
            <li>
              <a onClick={this.handleShow("special f mix")}>Special F Mix Colors</a>
            </li>
            <li>
              <a onClick={this.handleShow("three tone")}>Three Tone Colors</a>
            </li>
            <li>
              <a onClick={this.handleShow("freya silky")}>Freya Silky Colors</a>
            </li>
          </ul>
        </div>
        <div className="name-chooser">
          <ul>
            {this.getColorList()}
          </ul>
        </div>
      </div>
    )
  }

  getForm(){
    window.setTimeout(() => setDragAndDrop("#dropImg", this.getImg), 300);
    return(<form className="add-form" onSubmit={this.handleSubmit}>
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

    </form>);
  }

  render(){
    let content = this.colorChooser();
    if(this.state.id){
      content = this.getForm();
    }
    return(
      <div className="update-color-container">
        <h1>Update Color</h1>
        {content}
      </div>
    );
  }
}

export default withRouter(UpdateColor);
