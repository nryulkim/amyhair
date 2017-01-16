import React from 'react';
import { Link, withRouter } from 'react-router';

class LogIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(){
    this.setState({
      username: "",
      password: "",
    });
  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    const { login } = this.props;
    const router = this.props.router;
    $("#submit").prop("disabled",true).addClass("disabled");

    const redirect = () => {
      router.push({
        pathname: '/cpanel'
      })
    };

    login(this.state, redirect);
  }

  update(input){
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  renderErrors(){
    const { errors } = this.props;
    let text = "";
    if(errors.length > 0){
      text = errors.map((error, idx) => (<li key={idx}>{error}</li>));
      $("#submit").prop("disabled", false).removeClass("disabled");
    }

    return text;
  }

  render(){
    const { formType } = this.props;

    return(
      <article id="main">
        <header className="small-header">
          <h2>Admin Login</h2>
        </header>
        <div className="login-form">
          <ul className= "errors">
            {this.renderErrors()}
          </ul>
          <div className="session-form">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Enter your username"/>

              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"/>

              <button id="submit" type="submit">{formType}</button>
            </form>
          </div>
        </div>
      </article>
    );
  }
}

export default withRouter(LogIn);
