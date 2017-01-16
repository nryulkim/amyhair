import React from 'react';
import { Link, withRouter } from 'react-router';
import AddColor from './controls/colors/add_color_container';
import AddBrand from './controls/brands/add_brand_container';
import UpdateColor from './controls/colors/update_color_container';
import UpdateBrand from './controls/brands/update_brand_container';
import DeleteColor from './controls/colors/delete_color_container';
import DeleteBrand from './controls/brands/delete_brand_container';

class CPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: 'addproduct'
    };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getForm = this.getForm.bind(this);
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
        return (<h1>Add product form goes here</h1>);
      case "removeproduct":
        return (<h1>Method to remove product</h1>);
      case "addcolor":
        return (<AddColor/>);
      case "updatecolor":
        return (<UpdateColor/>);
      case "removecolor":
        return (<DeleteColor/>);
    }
    return null;
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
          <div className="control-main">
            <div className="control-list">
              <ul>
                <h1>Brands</h1>
                  <li><a onClick={this.handleChange("addbrand")}>Add Brand</a></li>
                  <li><a onClick={this.handleChange("updatebrand")}>Update Brand</a></li>
                  <li><a onClick={this.handleChange("removebrand")}>Remove Brand</a></li>
                <h1>Products</h1>
                  <li><a onClick={this.handleChange("addproduct")}>Add Product</a></li>
                  <li><a onClick={this.handleChange("removeproduct")}>Remove Product</a></li>
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
        </div>
      </article>
    );
  }
}

export default withRouter(CPanel);
