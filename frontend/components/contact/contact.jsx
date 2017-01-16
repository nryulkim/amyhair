import React from 'react';
import { Link } from 'react-router';


class Contact extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const coords = {lat: 40.8310288, lng: -74.0654845};
    const address = new google.maps.InfoWindow({
      content: '<div id="bodyContent"><b>Aviance Hair Corp</b><br/>685A Gotham Pkwy<br/>Carlstadt, NJ 07072</div>'
    })
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: coords
    });
    const marker = new google.maps.Marker({
      position: coords,
      map: map
    });
    marker.addListener('click', ()=>{
      address.open(map, marker);
    })
    address.open(map, marker);
  }

  render(){
    return (
      <article id="main">
        <header className="contact-us">
          <h2>Contact Us</h2>
          <p>Aviance Hair Corporation</p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <div className="top clrfx">
              <div className="left">
                <h3>Address</h3>
                <p>685A Gotham Parkway <br/>Carlstadt, NJ 07072</p>
                <hr/>
                <h3>Phone Numbers</h3>
                <table className="numbers">
                  <tbody>
                    <tr>
                      <td>Toll Free:</td>
                      <td>1-800-896-6622</td>
                    </tr>
                    <tr>
                      <td>Tel:</td>
                      <td>1-800-896-7300~4</td>
                    </tr>
                    <tr>
                      <td>Fax:</td>
                      <td>1-800-896-7306~7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="right">
                <div id="map"/>
              </div>
            </div>
            <hr/>
            <div className="bot">
              <h3>Email Us @</h3>
              <p><a href="mailto:sales@amyhair.com">sales@amyhair.com</a></p>
            </div>
            <hr/>
          </div>
        </section>
      </article>
    );
  }
}

export default Contact;
