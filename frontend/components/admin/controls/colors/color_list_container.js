import { connect } from 'react-redux';
import ColorList from './color_list';

const mapStateToProps = ({ colors }, ownProps) => {
  return({
    colorList: colors.colorNames
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(ColorList);
