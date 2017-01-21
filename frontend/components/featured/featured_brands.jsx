import React from 'react';
import { Link, withRouter } from 'react-router';
import { findObject } from '../../util/util_functions';

class FeaturedBrands extends React.Component {
  constructor(props){
    super(props);
    this.getItems = this.getItems.bind(this);
    this.getPath = this.getPath.bind(this);
  }

  getPath(featured){
    const { brands } = this.props;
    if(!brands){ return null; }
    const idx = findObject(brands, featured.brand_id);
    if(idx !== -1){
      const brd = brands[idx];
      let path = 'prod/' + brd.products[0].id;
      if(brd.products.length > 1){
        path = 'idx/' + brd.id;
      }
      return path;
    }
    return null;
  }

  getItems(){
    if(!this.props.featureds){ return null; }
    const rslt = [];

    for (let i = 0; i < this.props.featureds.length; i++) {
      const featured = this.props.featureds[i];
      const path = this.getPath(featured);
      rslt.push(
        <Link to={path} className="spotlight" key={i}>
          <div className="image"><img src={featured.image_url} alt="" /></div>
          <div className="content">
            <h2>{featured.name}</h2>
            <p>{featured.description}</p>
            <span className="button">More Information</span>
          </div>
        </Link>
      );
    }

    return(
      <div className="featured-banners">
        {rslt}
      </div>
    );
  }

  render(){
    return (
      <section id="featured-products" className="wrapper alt style2">
        <header className="major">
          <h2>Featured Products</h2>
        </header>
        {this.getItems()}
      </section>
    )
  }
}

export default withRouter(FeaturedBrands);
