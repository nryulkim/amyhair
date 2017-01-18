import React from 'react';
import { Link, withRouter } from 'react-router';
import AddColor from './controls/colors/add_color_container';
import AddBrand from './controls/brands/add_brand_container';
import AddProduct from './controls/products/add_product_container';
import AddItem from './controls/items/add_item_container';
import UpdateColor from './controls/colors/update_color_container';
import UpdateBrand from './controls/brands/update_brand_container';
import UpdateProduct from './controls/products/update_product_container';
import UpdateItem from './controls/items/update_item_container';
import DeleteColor from './controls/colors/delete_color_container';
import DeleteBrand from './controls/brands/delete_brand_container';
import DeleteProduct from './controls/products/delete_product_container';
import DeleteItem from './controls/items/delete_item_container';

class CPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: 'addproduct',
      loaded: false
    };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getForm = this.getForm.bind(this);
    this.setContent = this.setContent.bind(this);
  }

  componentWillReceiveProps(nxtProps){
    const { items, products, brands } = nxtProps;
    if(items && products && brands){
      this.setState({ loaded: true });
    }
  }

  handleLogOut(){
    this.props.logout();
    const router = this.props.router;
    window.setTimeout(() => router.push('/login'), 200);
  }

  handleChange(type){
    return () => this.setState({ type: type });
  }

  getForm(){
    const { type } = this.state;
    switch(type){
      case "addbrand":
        return (<AddBrand/>);
      case "updatebrand":
        return (<UpdateBrand/>);
      case "removebrand":
        return (<DeleteBrand/>);
      case "addproduct":
        return (<AddProduct/>);
      case "updateproduct":
        return (<UpdateProduct/>);
      case "removeproduct":
        return (<DeleteProduct/>);
      case "additem":
        return (<AddItem/>);
      case "updateitem":
        return (<UpdateItem/>);
      case "removeitem":
        return (<DeleteItem/>);
      case "addcolor":
        return (<AddColor/>);
      case "updatecolor":
        return (<UpdateColor/>);
      case "removecolor":
        return (<DeleteColor/>);
    }
    return null;
  }

  setContent(){
    const { loaded } = this.state;

    if(loaded){
      return (
        <div className="control-main">
          <div className="control-list">
            <ul>
              <h1>Brands</h1>
                <li><a onClick={this.handleChange("addbrand")}>Add Brand</a></li>
                <li><a onClick={this.handleChange("updatebrand")}>Update Brand</a></li>
                <li><a onClick={this.handleChange("removebrand")}>Remove Brand</a></li>
              <h1>Products</h1>
                <li><a onClick={this.handleChange("addproduct")}>Add Product</a></li>
                <li><a onClick={this.handleChange("updateproduct")}>Update Product</a></li>
                <li><a onClick={this.handleChange("removeproduct")}>Remove Product</a></li>
              <h1>Items</h1>
                <li><a onClick={this.handleChange("additem")}>Add Item</a></li>
                <li><a onClick={this.handleChange("updateitem")}>Update Item</a></li>
                <li><a onClick={this.handleChange("removeitem")}>Remove Item</a></li>
              <h1>Colors</h1>
                <li><a onClick={this.handleChange("addcolor")}>Add Color</a></li>
                <li><a onClick={this.handleChange("updatecolor")}>Update Color</a></li>
                <li><a onClick={this.handleChange("removecolor")}>Remove Color</a></li>
            </ul>
          </div>
          <div className="control-content">
            {this.getForm()}
          </div>
        </div>
      );
    }else{
      return (
        <img className='loader' src={window.imgAssets.loader}/>
      );
    }
  }

  render(){
    const { formType } = this.props;

    return(
      <article id="main">
        <header className="small-header">
          <h2>Control Panel</h2>
        </header>
        <div className="control-panel">
          <div className="clrfx">
            <button onClick={this.handleLogOut}>Log Out</button>
          </div>
          <div className="content">
            {this.setContent()}
          </div>
        </div>
      </article>
    );
  }
}

export default withRouter(CPanel);
