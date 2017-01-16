import React from 'react';
import { Link, withRouter } from 'react-router';
import { PRODUCT_NAMES } from '../../util/products.js'

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
    for (let i = 0; i < PRODUCT_NAMES.length; i++) {
      const name = PRODUCT_NAMES[i].type;
      const path = PRODUCT_NAMES[i].path;
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
            <h1>Products</h1>
            <ul>
              {this.listNames()}
            </ul>
          </div>
          <div className="content container">
            <h1>Featured Products</h1>
            <div className="pictures">
              <Link className="pic" to='show/1'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Description</p>
                </div>
              </Link>
              <Link className="pic" to='show/2'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Description</p>
                </div>
              </Link>
              <Link className="pic" to='show/3'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Description</p>
                </div>
              </Link>
              <Link className="pic" to='show/4'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Description</p>
                </div>
              </Link>
              <Link className="pic" to='show/5'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Description</p>
                </div>
              </Link>
              <Link className="pic" to='show/6'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Description</p>
                </div>
              </Link>
              <Link className="pic" to='show/7'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Description</p>
                </div>
              </Link>
              <Link className="pic" to='show/8'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Description</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        </article>
    );
  }
}

export default withRouter(Products);
