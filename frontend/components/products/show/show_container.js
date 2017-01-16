import { connect } from 'react-redux';
import Show from './show';

const mapStateToProps = ({ products }, ownProps) => {
  return({
    item: products.currentProduct
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Show);
