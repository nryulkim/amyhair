import React from 'react';
import { Link, withRouter } from 'react-router';
import { findObject } from '../../../util/util_functions';

class MinorIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Not Found',
      description: 'This brand cannot be found.',
      image_url: '',
      products: []
    }
    this.setBrand = this.setBrand.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  setBrand(props){
    if(!props){
      props = this.props;
    }
    if(!props.brands){ return null; }
    const idx = findObject(props.brands, parseInt(props.location.pathname.split("/")[2]));
    const brand = props.brands[idx];
    if(!brand){ return null; }
    this.setState({
      name: brand.brand,
      description: brand.description,
      image_url: brand.image_url,
      products: brand.products
    });
  }

  componentDidMount(){
    $("#page-wrapper").addClass('products-page');
    this.setBrand();
  }

  componentWillUnmount(){
    $('#page-wrapper').removeClass('products-page');
    this.setState({
      name: 'Not Found',
      description: 'This brand cannot be found.',
      image_url: '',
      products: []
    });
  }

  componentWillReceiveProps(nextProps){
    this.setBrand(nextProps);
  }

  getProducts(){
    const { products } = this.state;
    const rslt = [];
    for (let i = 0; i < products.length; i++) {
      const prod = products[i];
      const path = "prod/" + prod.id;
      rslt.push(
        <Link className="pic" to={path} key={i}>
          <div className="temp img"/>
          <div className="caption">
            <p>{prod.name}</p>
          </div>
        </Link>
      );
    }
    return rslt;
  }

  render(){
    const { name, description, products } = this.state;
    return (
      <article id="main">
        <header className="products-banner">
          <h2>{name}</h2>
        </header>
        <section id="product-list" className="minoridx">
          <div className="content container">
            <h1>Products</h1>
            <div className="pictures">
              {this.getProducts()}
            </div>
          </div>
        </section>
        </article>
    );
  }
}

export default withRouter(MinorIndex);
