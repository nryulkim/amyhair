import React from 'react';
import { Link, withRouter } from 'react-router';

class MinorIndex extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    $("#page-wrapper").addClass('products-page');
  }
  componentWillUnmount(){
    $('#page-wrapper').removeClass('products-page');
  }

  render(){
    return (
      <article id="main">
        <header className="products-banner">
          <h2>Product Type Name</h2>
        </header>
        <section id="product-list" className="minoridx">
          <div className="content container">
            <h1>Products</h1>
            <div className="pictures">
              <Link className="pic" to='show/1'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Product Name</p>
                </div>
              </Link>
              <Link className="pic" to='show/2'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Product Name</p>
                </div>
              </Link>
              <Link className="pic" to='show/3'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Product Name</p>
                </div>
              </Link>
              <Link className="pic" to='show/4'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Product Name</p>
                </div>
              </Link>
              <Link className="pic" to='show/5'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Product Name</p>
                </div>
              </Link>
              <Link className="pic" to='show/6'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Product Name</p>
                </div>
              </Link>
              <Link className="pic" to='show/7'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Product Name</p>
                </div>
              </Link>
              <Link className="pic" to='show/8'>
                <div className="temp img"/>
                <div className="caption">
                  <p>Product Name</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        </article>
    );
  }
}

export default withRouter(MinorIndex);
