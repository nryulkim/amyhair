import { connect } from 'react-redux';
import ProductIndex from './prod_index';

const mapStateToProps = ({ products }, ownProps) => {
  return({
    product: products.currentProduct
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(ProductIndex);
