import React from 'react';
import Header from './header/header.jsx';
export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { children } = this.props;
    return(
      <div id="page-wrapper">
          <Header/>
          { children }

          <footer id="footer">
						<ul className="copyright">
							<li>Copyright &copy; 2010 Aviance Hair Corp. All rights reserved.</li>
            </ul>
					</footer>
      </div>
    );
  }
}
