import { connect } from 'react-redux';
import { deleteItem } from '../../../../actions/item_actions';
import DeleteItem from './delete_item';

const mapStateToProps = ({ brands, products, items }, ownProps) => {
  return({
    brands: brands.brands,
    products: products.products,
    items: items.items
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    deleteItem: (id) => dispatch(deleteItem(id))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(DeleteItem);
