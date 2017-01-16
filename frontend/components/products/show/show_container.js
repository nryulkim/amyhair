import { connect } from 'react-redux';
import Show from './show';

const mapStateToProps = ({ items }, ownProps) => {
  return({
    item: items.currentItem
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Show);
