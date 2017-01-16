import { connect } from 'react-redux';
import { updateProduct } from '../../../../actions/product_actions';
import UpdateProduct from './update_product';

const mapStateToProps = ({ brands, products }, ownProps) => {
  return({
    brands: brands.brands,
    products: products.products
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    updateProduct: (brand) => dispatch(updateProduct(brand))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(UpdateProduct);
