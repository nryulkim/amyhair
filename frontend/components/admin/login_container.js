import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/util_actions';
import LogIn from './login';

const mapStateToProps = ({ session }, ownProps) => {
  let formType = "Log In";

  return({
    formType,
    errors: session.forms.logIn.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    login: (user, cb) => dispatch(login(user, cb))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(LogIn);
