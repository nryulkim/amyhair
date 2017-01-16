import { connect } from 'react-redux';
import { deleteProduct } from '../../../../actions/product_actions';
import DeleteProduct from './delete_product';

const mapStateToProps = ({ brands, products }, ownProps) => {
  return({
    brands: brands.brands,
    products: products.products
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    deleteProduct: (brand) => dispatch(deleteProduct(brand))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(DeleteProduct);
