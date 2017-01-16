import { connect } from 'react-redux';
import { newProduct } from '../../../../actions/product_actions';
import AddProduct from './add_product';

const mapStateToProps = ({ brands }, ownProps) => {
  return({
    brands: brands.brands
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    newProduct: (product) => dispatch(newProduct(product))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(AddProduct);
