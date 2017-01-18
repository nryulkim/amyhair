import React from 'react';
import { Link, withRouter } from 'react-router';
import { setDragAndDrop } from '../../../../util/util_functions';

class DeleteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: null,
      brand_id: "",
      product_id: "",
      name: "",
      description: "",
      imgFile: "",
      imgURL: "",
      lengths: []
    };
    this.getBrandList = this.getBrandList.bind(this);
    this.getProductList = this.getProductList.bind(this);
    this.getForm = this.getForm.bind(this);
    this.brandChooser = this.brandChooser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setBrand = this.setBrand.bind(this);
    this.setProduct = this.setProduct.bind(this);
    this.productName = this.productName.bind(this);
    this.getLengthForms = this.getLengthForms.bind(this);
  }

  getLengthForms(){
    const { lengths } = this.state;
    const rslt = [];
    for (let i = 0; i < lengths.length; i++) {
      rslt.push(
        <div key={i}>
          <input
            type="text"
            value={this.state.lengths[i].length}
            key={'l' + i}/>
          <input
            type="text"
            value={this.state.lengths[i].colors}
            key={'c' + i}/>
        </div>
      );
    }

    return rslt;
  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    $("#submit").prop("disabled",true).toggleClass("disabled");

    const { id } = this.state;
    this.props.deleteItem(id);
    this.props.router.push({pathname: "/login"});
    this.setState({
      id: "",
      name: "",
      description: "",
      imgFile: "",
      imgURL: "",
      product_id: "",
      brand_id: ""
    });
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
        product_id: product.id
      });
    }
  }

  setItem(item){
    return (e) => {
      e.preventDefault();
      const lengths = [];
      for (let i = 0; i < item.lengths.length; i++) {
        const length = item.lengths[i];
        const colors = length.colors.reduce((a, b) => { return a + b.name + ', '; }, "").slice(0,-2);
        lengths.push({
          length: length.length,
          colors: colors
        })
      }

      this.setState({
        id: item.id,
        name: item.name,
        description: item.description,
        imgURL: item.image_url,
        lengths: lengths
      })
    }
  }

  getItemList(){
    if(this.state.product_id === "") { return null; }
    const rslt = [];
    const { items } = this.props;
    for(let i = 0; i < items.length; i++){
      if(this.state.product_id == items[i].product_id){
        rslt.push(<li key={i}><a onClick={this.setItem(items[i])}>{items[i].name}</a></li>);
      }
    }
    return(
      <ul className='type-chooser'>
        {rslt}
      </ul>
    )
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

  productName(){
    const { product_id } = this.state;
    const { products } = this.props;

    for (let i = 0; i < products.length; i++) {
      if(products[i].id == product_id){
        return products[i].name;
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
          disabled="true"
          value={this.productName()}/>
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
              <img className="product-img img" src={this.state.imgURL}/>
              <strong>Choose an image</strong> or drag it here.
            </label>
          </div>
        </div>

        <div className="length-container">
          {this.getLengthForms()}
        </div>

        <button id="submit" type="submit">Delete</button>
      </form>
    );
  }

  render(){
    let content = this.brandChooser();
    if(this.state.id){
      content = this.getForm();
    }else if (this.state.product_id) {
      content = this.getItemList();
    }

    return(
      <div className="product-container">
        <h1>Delete Item</h1>
        {content}
      </div>
    );
  }
}

export default withRouter(DeleteItem);
