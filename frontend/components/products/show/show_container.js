import { connect } from 'react-redux';
import Show from './show';

const mapStateToProps = ({ items, colors }, ownProps) => {
  return({
    item: items.currentItem,
    colors: colors.colors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Show);
