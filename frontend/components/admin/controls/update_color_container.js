import { connect } from 'react-redux';
import { updateColor } from '../../../actions/color_actions';
import UpdateColor from './add_color';

const mapStateToProps = ({ colors }, ownProps) => {
  return({
    colors: colors.colors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    updateColor: (color) => dispatch(updateColor(color))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(UpdateColor);
