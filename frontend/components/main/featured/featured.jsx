import React from 'react';
import { Link, withRouter } from 'react-router'

class Featured extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(id){

    return () => {

    };
  }
  render(){
    return(
      <section id="featured-products" className="wrapper alt style2">
        <header className="major">
          <h2>Featured Products</h2>
        </header>
        <Link to="show/1" className="spotlight">
          <div className="image"><img src="images/indu-virgin.jpg" alt="" /></div>
          <div className="content">
            <h2>Indu Original Virgin</h2>
            <p>100% Indu Remi Human Hair <br/> This is a description of the hair. <br/> Please add more.</p>
            <span className="button">More Information</span>
          </div>
        </Link>
        <Link to="show/1" className="spotlight">
          <div className="image"><img src="images/indu-silver.jpg" alt="" /></div>
          <div className="content">
            <h2>Indu Silver Label</h2>
            <p>100% Indu Remi Human Hair <br/> This is a description of the hair. <br/> Please add more.</p>
            <span className="button">More Information</span>
          </div>
        </Link>
        <Link to="show/1" className="spotlight">
          <div className="image"><img src="images/labuan-remi.jpg" alt="" /></div>
          <div className="content">
            <h2>Labuan Malaysian Remi</h2>
            <p>This is a description of the hair. <br/> Please add more.</p>
            <span className="button">More Information</span>
          </div>
        </Link>
      </section>
    );
  }
}

export default withRouter(Featured);
