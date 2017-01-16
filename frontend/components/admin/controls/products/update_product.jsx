import React from 'react';
import { Link, withRouter } from 'react-router';
import { setDragAndDrop } from '../../../../util/util_functions';

class UpdateProduct extends React.Component {
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
    this.getBrandList = this.getBrandList.bind(this);
    this.getProductList = this.getProductList.bind(this);
    this.getForm = this.getForm.bind(this);
    this.brandChooser = this.brandChooser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setBrand = this.setBrand.bind(this);
    this.setProduct = this.setProduct.bind(this);
    this.brandName = this.brandName.bind(this);
    this.update = this.update.bind(this);
    this.getImg = this.getImg.bind(this);
    this.updateImg = this.updateImg.bind(this);
  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    $("#submit").prop("disabled",true).toggleClass("disabled");

    const { id, name, description, imgFile, brand_id } = this.state;
    const output = new FormData();
    output.append("product[id]", id);
    output.append("product[name]", name);
    output.append("product[description]", description);
    output.append("product[img]", imgFile);
    output.append("product[brand_id]", brand_id);
    this.props.updateProduct(output);
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

  setBrand(brand){
    return (e) => {
      e.preventDefault();
      this.setState({
        brand_id: brand.id,
      });
    }
  }

  getBrandList(){
    const rslt = [];
    const { brands } = this.props;
    for (let i = 0; i < brands.length; i++) {
      rslt.push(<li key={i}><a onClick={this.setBrand(brands[i])}>{brands[i].brand}</a></li>);
    }
    return(
      <ul className='type-chooser'>
        {rslt}
      </ul>
    );
  }

  setProduct(product){
    return (e) => {
      e.preventDefault();
      this.setState({
        id: product.id,
        name: product.name,
        description: product.description,
        imgURL: product.image_url
      });
    }
  }

  getProductList(){
    if(this.state.brand_id === ""){ return null; }
    const rslt = [];
    const { products } = this.props;
    for (let i = 0; i < products.length; i++) {
      if(this.state.brand_id == products[i].brand_id){
        rslt.push(<li key={i}><a onClick={this.setProduct(products[i])}>{products[i].name}</a></li>);
      }
    }
    return(
      <ul className='name-chooser'>
        {rslt}
      </ul>
    );
  }

  brandChooser(){
    return(
      <div className='chooser'>
        {this.getBrandList()}
        {this.getProductList()}
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
        <select value={this.state.brand_id} onChange={this.update('brand_id')}>
          {this.getBrands()}
        </select>
        <input
          type="text"
          value={this.state.name}
          onChange={this.update('name')}
          placeholder="What is the product name?"/>
        <input
          type="text"
          value={this.state.description}
          onChange={this.update('description')}
          placeholder="Please add a description"/>
        <div className="img-input-container">
          <div id="dropImg">
            <input type="file" className="drop_file"  id="img" onChange={this.updateImg}></input>
            <label htmlFor="img">
              <img className="product-img img" src={this.state.imgURL}/>
              <strong>Choose an image</strong> or drag it here.
            </label>
          </div>

          <button id="submit" type="submit">Submit</button>
        </div>
      </form>
    );
  }

  render(){
    let content = this.brandChooser();
    if(this.state.name){
      content = this.getForm();
    }
    return(
      <div className="product-container">
        <h1>Update Product</h1>
        {content}
      </div>
    );
  }
}

export default withRouter(UpdateProduct);
