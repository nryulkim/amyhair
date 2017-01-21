import React from 'react';
import { Link, withRouter } from 'react-router';

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

    for (let i = 0; i < brands.length; i++) {
      let products = brands[i].products;
      let name = brands[i].brand;
      let path = 'prod/' + brands[i].products[0].id;
      if(products.length > 1){
        path = 'idx/' + brands[i].id;
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
            </div>
          </div>
        </section>
        </article>
    );
  }
}

export default withRouter(Products);
