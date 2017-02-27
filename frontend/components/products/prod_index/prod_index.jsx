import React from 'react';
import { Link, withRouter } from 'react-router';
import { findObject } from '../../../util/util_functions';
import Modal from '../modal/modal';


class ProdIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Not Found',
      description: 'This product cannot be found.',
      image_url: '',
      items: [],
      loading: true,
      imagesLoaded: 0,
      numImages: 0
    }
    this.setItems = this.setItems.bind(this);
    this.getItems = this.getItems.bind(this);
    this.ensureLoadedImgs = this.ensureLoadedImgs.bind(this);
    this.checkAllLoaded = this.checkAllLoaded.bind(this);
    this.setLoadCallback = this.setLoadCallback.bind(this);
  }

  setItems(props){
    const product = props.product;
    if(!product){ return null; }
    const items = this.getItems(product.items);
    this.setState({
      name: product.name,
      description: product.description,
      image_url: product.image_url,
      items: items
    });
  }

  componentWillMount(){
    this.setState({
      name: 'Not Found',
      description: 'This product cannot be found.',
      image_url: '',
      products: [],
      loading: true
    });
  }

  componentWillReceiveProps(nextProps){
    const pid = nextProps.product ? nextProps.product.id : 0;
    const lid = location.hash.split('prod/')[1]
    if(pid == lid){
      debugger
      this.setItems(nextProps);
      window.setTimeout(this.ensureLoadedImgs, 250);
    }
  }

  ensureLoadedImgs(){
    const imgs = $('img');
    const count = imgs.length;
    this.setState({ numImages: count });
    this.setLoadCallback(imgs);
  }

  setLoadCallback(imgs){
    for (let i = 0; i < imgs.length; i++) {
      const $img = $(imgs[i]);
      $img.one('load', this.checkAllLoaded);
      if(imgs[i].complete){
        $img.load();
      }
    }
  }

  checkAllLoaded(){
    const { imagesLoaded, numImages } = this.state;
    if( numImages === imagesLoaded + 1){
      this.setState({ imagesLoaded: imagesLoaded + 1, loading: false });
    }else{
      this.setState({ imagesLoaded: imagesLoaded + 1 });
    }
  }

  getItems(items){
    const rslt = [];
    for (let i = 0; i < items.length; i++) {
      const itm = items[i];
      const path = "show/" + itm.id;
      rslt.push(
        <Link className="pic" to={path} key={i}>
          <div className="temp img">
            <img src={itm.image_url}></img>
          </div>
          <div className="caption">
            <p>{itm.name}</p>
          </div>
        </Link>
      );
    }
    return rslt;
  }

  render(){
    const { name, description, items, loading } = this.state;
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
              <h1>Items</h1>
              <div className="pictures">
                {items}
              </div>
            </div>
          </section>
        </article>
    );
  }
}

export default withRouter(ProdIndex);
