import { connect } from 'react-redux';
import { deleteColor } from '../../../../actions/color_actions';
import DeleteColor from './delete_color';

const mapStateToProps = ({ colors }, ownProps) => {
  return({
    colors: colors.colors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    deleteColor: (color) => dispatch(deleteColor(color))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(DeleteColor);
