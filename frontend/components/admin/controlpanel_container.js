import { connect } from 'react-redux';
import ControlPanel from './controlpanel';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session }, ownProps) => {
  return({
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(ControlPanel);
