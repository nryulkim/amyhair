import React from 'react';
import { Link, withRouter } from 'react-router';
import { findObject } from '../../../util/util_functions';

class ProdIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Not Found',
      description: 'This product cannot be found.',
      image_url: '',
      items: []
    }
    this.setItems = this.setItems.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  setItems(props){
    if(!props){
      props = this.props;
    }
    const product = props.product;
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

  componentWillReceiveProps(nextProps){
    this.setItems(nextProps);
  }

  getItems(){
    const { items } = this.state;
    const rslt = [];
    for (let i = 0; i < items.length; i++) {
      const itm = items[i];
      const path = "show/" + itm.id;
      rslt.push(
        <Link className="pic" to={path} key={i}>
          <div className="temp img"/>
          <div className="caption">
            <p>{itm.name}</p>
          </div>
        </Link>
      );
    }
    return rslt;
  }

  render(){
    const { name, description, items } = this.state;
    return (
      <article id="main">
        <header className="products-banner">
          <h2>{name}</h2>
        </header>
        <section id="product-list" className="minoridx">
          <div className="content container">
            <h1>Items</h1>
            <div className="pictures">
              {this.getItems()}
            </div>
          </div>
        </section>
        </article>
    );
  }
}

export default withRouter(ProdIndex);
