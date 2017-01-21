import React from 'react';
import { Link, withRouter } from 'react-router';
import { setDragAndDrop } from '../../../../util/util_functions';

class DeleteFeatured extends React.Component {
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
    this.brandName = this.brandName.bind(this);
  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    $("#submit").prop("disabled",true).toggleClass("disabled");

    const { id } = this.state;
    this.props.deleteFeatured(id);
    this.setState({
      id: null,
      brand_id: "",
      name: "",
      description: "",
      imgFile: "",
      imgURL: ""
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

  brandName(){
    const { brand_id } = this.state;
    const { brands } = this.props;

    for (let i = 0; i < brands.length; i++) {
      if(brands[i].id == brand_id){
        return brands[i].brand;
      }
    }
    return 'Unknown';
  }

  getForm(){
    window.setTimeout(() => setDragAndDrop("#dropImg", this.getImg), 300);
    return(
      <form className="add-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.brandName()}
          disabled="true"/>
        <input
          type="text"
          disabled="true"
          value={this.state.name}/>
        <input
          type="text"
          disabled="true"
          value={this.state.description}/>
        <div className="img-input-container">
          <div id="dropImg">
            <input type="file" className="drop_file"  id="img"></input>
            <label htmlFor="img">
              <img className="featured-img img" src={this.state.imgURL}/>
              <strong>Choose an image</strong> or drag it here.
              </label>
            </div>

            <button id="submit" type="submit">Delete</button>
          </div>
        </form>
    );
  }

  render(){
    let content = this.featuredChooser();
    if(this.state.name){
      content = this.getForm();
    }
    return(
      <div className="featured-container">
        <h1>Delete Featured</h1>
        {content}
      </div>
    );
  }
}

export default withRouter(DeleteFeatured);
