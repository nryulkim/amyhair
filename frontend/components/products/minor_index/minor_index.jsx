import React from 'react';
import { Link, withRouter } from 'react-router';
import { findObject } from '../../../util/util_functions';
import Modal from '../modal/modal';

class MinorIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Not Found',
      description: 'This brand cannot be found.',
      image_url: '',
      products: [],
      loading: true
    }
    this.setBrand = this.setBrand.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  setBrand(props){
    if(!props.brands){ return null; }
    const idx = findObject(props.brands, parseInt(props.location.pathname.split("/")[2]));
    const brand = props.brands[idx];
    if(!brand){ return null; }
    this.setState({
      name: brand.brand,
      description: brand.description,
      image_url: brand.image_url,
      products: brand.products,
      loading: false
    });
    return true;
  }

  componentWillMount(){
    this.setState({
      name: 'Not Found',
      description: 'This brand cannot be found.',
      image_url: '',
      products: [],
      loading: true
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
          <div className="temp img">
            <img src={prod.image_url}></img>
          </div>
          <div className="caption">
            <p>{prod.name}</p>
          </div>
        </Link>
      );
    }
    return rslt;
  }

  render(){
    const { name, description, products, loading } = this.state;
    const modal = loading ? <Modal/> : null;
    return (
      <article id="main">
        {modal}
        <header className="products-banner">
          <h2>{name}</h2>
          <h4>{description}</h4>
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
