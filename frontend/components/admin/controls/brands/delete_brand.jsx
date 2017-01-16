import React from 'react';
import { Link, withRouter } from 'react-router';
import { setDragAndDrop } from '../../../../util/util_functions';

class DeleteBrand extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: null,
      brand: "",
      description: "",
      imgFile: "",
      imgURL: window.imgAssets.brand
    };
    this.getBrandList = this.getBrandList.bind(this);
    this.getForm = this.getForm.bind(this);
    this.brandChooser = this.brandChooser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setBrand = this.setBrand.bind(this);
  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    $("#submit").prop("disabled",true).toggleClass("disabled");

    const { id, brand, description, imgFile } = this.state;
    this.props.deleteBrand(id);
    this.setState({
      id: null,
      description: "",
      brand: "",
      imgFile: "",
      imgURL: window.imgAssets.brand
    });
  }

  setBrand(brand){
    return (e) => {
      e.preventDefault();
      this.setState({
        id: brand.id,
        brand: brand.brand,
        description: brand.description,
        imgURL: brand.image_url });
    }
  }

  getBrandList(){
    const rslt = [];
    const { brands } = this.props;

    for (let i = 0; i < brands.length; i++) {
      rslt.push(<li key={i}><a onClick={this.setBrand(brands[i])}>{brands[i].brand}</a></li>);
    }

    return(
      <ul>
        {rslt}
      </ul>
    );

  }

  brandChooser(){
    return(
      <div className='chooser'>
        {this.getBrandList()}
      </div>
    );
  }

  getForm(){
    window.setTimeout(() => setDragAndDrop("#dropImg", this.getImg), 300);
    return(<form className="add-form" onSubmit={this.handleSubmit}>
      <input
        type="text"
        value={this.state.brand}
        placeholder="What is the brand name?"/>
      <input
        type="text"
        value={this.state.description}
        placeholder="Please add a description"/>
      <div className="img-input-container">
        <div id="dropImg">
          <input type="file" className="drop_file"  id="img" ></input>
          <label htmlFor="img">
            <img className="brand-img img" src={this.state.imgURL}/>
            <strong>Choose an image</strong> or drag it here.
          </label>
        </div>

        <button id="submit" type="submit">Submit</button>
      </div>

    </form>);
  }

  render(){
    let content = this.brandChooser();
    if(this.state.id){
      content = this.getForm();
    }
    return(
      <div className="brand-container">
        <h1>Delete Brand</h1>
        {content}
      </div>
    );
  }
}

export default withRouter(DeleteBrand);
