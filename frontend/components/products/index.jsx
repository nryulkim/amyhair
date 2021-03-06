import React from 'react';
import FeaturedBrands from '../featured/featured_brands_container';
import { Link, withRouter } from 'react-router';
import { BRAND_ORDER } from '../../util/defaults';

class Products extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    $("#page-wrapper").addClass('products-page');
  }
  componentWillUnmount(){
    $('#page-wrapper').removeClass('products-page');
  }

  listNames(){
    const rslt = [];
    const { brands } = this.props;
    if(!brands){ return null; }

    brands.sort((a, b) => {
      let idx1 = BRAND_ORDER.indexOf(a.brand);
      let idx2 = BRAND_ORDER.indexOf(b.brand);
      idx1 = idx1 == -1 ? 9999 : idx1;
      idx2 = idx2 == -1 ? 9999 : idx2;
      return idx1 - idx2;
    });

    for (let i = 0; i < brands.length; i++) {
      let products = brands[i].products;
      let name = brands[i].brand;
      let path = 'idx/' + brands[i].id;
      if(products.length == 1){
        path = 'prod/' + brands[i].products[0].id;
      }
      rslt.push(<li key={i}><Link to={path}>{name}</Link></li>);
    }

    return rslt;
  }

  render(){
    return (
      <article id="main">
        <header className="products-banner">
          <h2>All Products</h2>
          <p>Aviance Hair Corporation</p>
        </header>
        <section id="product-list">
          <div className="sidebar container">
            <h1>Brands</h1>
            <ul>
              {this.listNames()}
            </ul>
          </div>
          <div className="content container">
            <FeaturedBrands/>
          </div>
        </section>
        </article>
    );
  }
}

export default withRouter(Products);
