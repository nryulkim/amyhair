import { connect } from 'react-redux';
import { updateItem } from '../../../../actions/item_actions';
import UpdateItem from './update_item';

const mapStateToProps = ({ brands, products, items }, ownProps) => {
  return({
    brands: brands.brands,
    products: products.products,
    items: items.items
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    updateItem: (item) => dispatch(updateItem(item))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(UpdateItem);
