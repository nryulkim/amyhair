import { connect } from 'react-redux';
import Menu from './menu';

const mapStateToProps = ({ session }, ownProps) => {
  return({
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Menu);
