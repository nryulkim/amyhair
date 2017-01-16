import React from 'react';
import { Link, withRouter } from 'react-router';
import { findObject } from '../../../util/util_functions';

class MinorIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Not Found',
      description: 'This product cannot be found.',
      image_url: '',
      items: []
    }
    this.setItems = this.setItems.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  setItems(){
    let product = this.props.product;
    if(!product){ return null; }

    this.setState({
      name: product.name,
      description: product.description,
      image_url: product.image_url,
      items: product.items
    });
  }

  componentDidMount(){
    $("#page-wrapper").addClass('products-page');
    this.setItems();
  }

  componentWillUnmount(){
    $('#page-wrapper').removeClass('products-page');
    this.setState({
      name: 'Not Found',
      description: 'This product cannot be found.',
      image_url: '',
      items: []
    });
  }

  componentWillReceiveProps(){
    this.setItems();
  }

  getProducts(){
    const { products } = this.state;
    const rslt = [];
    for (let i = 0; i < products.length; i++) {
      const prod = products[i];
      const path = "show/" + prod.id;
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
            <h1>Items</h1>
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
