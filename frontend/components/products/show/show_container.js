import { connect } from 'react-redux';
import Show from './show';

const mapStateToProps = ({ products }, ownProps) => {
  return({
    brands: products.currentProduct
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Show);
