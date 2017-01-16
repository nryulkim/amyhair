import React from 'react';
import { Link, withRouter } from 'react-router';

class CPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(){
    this.props.logout();
    const router = this.props.router;
    window.setTimeout(() => router.push('/login'), 200);
  }

  render(){
    const { formType } = this.props;

    return(
      <article id="main">
        <header className="small-header">
          <h2>Control Panel</h2>
        </header>
        <div className="control-panel">
          <button onClick={this.handleLogOut}>Log Out</button>
          <h1> Things will go here </h1>
        </div>
      </article>
    );
  }
}

export default withRouter(CPanel);
