import React from 'react';
import { Link, withRouter } from 'react-router';
import { setDragAndDrop } from '../../../../util/util_functions';

class AddBrand extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      brand: "",
      description: "",
      imgFile: "",
      imgURL: window.imgAssets.brand
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

    const { brand, description, imgFile } = this.state;
    const output = new FormData();
    output.append("brand[brand]", brand);
    output.append("brand[description]", description);
    output.append("brand[img]", imgFile);
    this.props.newBrand(output);
    this.props.router.push({pathname: "/login"});
    this.setState({
      brand: "",
      description: "",
      imgFile: "",
      imgURL: window.imgAssets.brand
    });
  }

  render(){
    const { formType } = this.props;

    return(
      <div>
        <h1>Add Brand</h1>
        <form className="add-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.brand}
            onChange={this.update('brand')}
            placeholder="What is the brand name?"/>
          <input
            type="text"
            value={this.state.description}
            onChange={this.update('description')}
            placeholder="Please add a description"/>
          <div className="img-input-container">
            <div id="dropImg">
              <input type="file" className="drop_file"  id="img" onChange={this.updateImg}></input>
              <label htmlFor="img">
                <img className="brand-img img" src={this.state.imgURL}/>
                <strong>Choose an image</strong> or drag it here.
                </label>
              </div>

              <button id="submit" type="submit">Submit</button>
            </div>
          </form>
      </div>
    );
  }
}

export default withRouter(AddBrand);
