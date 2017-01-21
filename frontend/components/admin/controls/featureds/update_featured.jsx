import React from 'react';
import { Link, withRouter } from 'react-router';
import { setDragAndDrop } from '../../../../util/util_functions';

class UpdateFeatured extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: null,
      brand_id: "",
      name: "",
      description: "",
      imgFile: "",
      imgURL: ""
    };
    this.getFeaturedList = this.getFeaturedList.bind(this);
    this.featuredChooser = this.featuredChooser.bind(this);
    this.getForm = this.getForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setFeatured = this.setFeatured.bind(this);
    this.update = this.update.bind(this);
    this.getImg = this.getImg.bind(this);
    this.updateImg = this.updateImg.bind(this);
  }

  getBrands(){
    const { brands } = this.props;
    if(!brands){ return null; }
    const rslt = [];
    for (let i = 0; i < brands.length; i++) {
      rslt.push(
        <option key={i} value={brands[i].id}>{brands[i].brand}</option>
      );
    }
    return rslt;
  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    $("#submit").prop("disabled",true).toggleClass("disabled");

    const { id, name, description, imgFile, brand_id } = this.state;
    const output = new FormData();
    if(name){output.append("featured[name]", name);}
    if(description){output.append("featured[description]", description);}
    if(imgFile){output.append("featured[img]", imgFile);}
    output.append("featured[brand_id]", brand_id);
    output.append("featured[id]", id);
    this.props.updateFeatured(output);
    this.props.router.push({pathname: "/login"});
    this.setState({
      id: "",
      name: "",
      description: "",
      imgFile: "",
      imgURL: "",
      brand_id: ""
    });
  }

  setFeatured(featured){
    return (e) => {
      e.preventDefault();
      this.setState({
        brand_id: featured.brand_id,
        id: featured.id,
        name: featured.name,
        description: featured.description,
        imgURL: featured.image_url
      });
    }
  }

  getFeaturedList(){
    const rslt = [];
    const { featureds } = this.props;
    for (let i = 0; i < featureds.length; i++) {
      rslt.push(<li key={i}><a onClick={this.setFeatured(featureds[i])}>{featureds[i].name}</a></li>);
    }
    return(
      <ul className='name-chooser'>
        {rslt}
      </ul>
    );
  }

  featuredChooser(){
    return(
      <div className='chooser'>
        {this.getFeaturedList()}
      </div>
    );
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

  getForm(){
    window.setTimeout(() => setDragAndDrop("#dropImg", this.getImg), 300);
    return(
      <form className="add-form" onSubmit={this.handleSubmit}>
        <select value={this.state.brand_id} onChange={this.update('brand_id')}>
          {this.getBrands()}
        </select>
        <input
          type="text"
          value={this.state.name}
          onChange={this.update('name')}
          placeholder="What would you like the title to be?"/>
        <input
          type="text"
          value={this.state.description}
          onChange={this.update('description')}
          placeholder="Please add a description"/>

        <div className="img-input-container">
          <div id="dropImg">
            <input type="file" className="drop_file"  id="img" onChange={this.updateImg}></input>
            <label htmlFor="img">
              <img className="featured-img img" src={this.state.imgURL}/>
              <strong>Choose an image</strong> or drag it here.
            </label>
          </div>
        </div>

        <button id="submit" type="submit">Update</button>
      </form>
    );
  }

  render(){
    let content = this.featuredChooser();
    if(this.state.id){
      content = this.getForm();
    }
    return(
      <div className="featured-container">
        <h1>Update Featured</h1>
        {content}
      </div>
    );
  }
}

export default withRouter(UpdateFeatured);
