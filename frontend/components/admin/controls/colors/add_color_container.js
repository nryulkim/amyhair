import { connect } from 'react-redux';
import { addColor } from '../../../../actions/color_actions';
import AddColor from './add_color';

const mapStateToProps = ({ colors }, ownProps) => {
  return({
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    addColor: (color) => dispatch(addColor(color))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(AddColor);
