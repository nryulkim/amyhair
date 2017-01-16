import { connect } from 'react-redux';
import { addItem } from '../../../../actions/item_actions';
import AddItem from './add_item';

const mapStateToProps = ({ brands, products }, ownProps) => {
  return({
    brands: brands.brands,
    products: products.products
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    addItem: (item) => dispatch(addItem(item))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(AddItem);
