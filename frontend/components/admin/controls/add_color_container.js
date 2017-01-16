import { connect } from 'react-redux';
import { addColor } from '../../../actions/color_actions';
import AddColor from './add_color';

const mapStateToProps = ({ session }, ownProps) => {
  return({
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    addColor: () => dispatch(addColor())
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(AddColor);
