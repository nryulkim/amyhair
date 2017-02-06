import { connect } from 'react-redux';
import { newItem } from '../../../../actions/item_actions';
import AddItem from './add_item';

const mapStateToProps = ({ brands, products, colors }, ownProps) => {
  return({
    brands: brands.brands,
    products: products.products,
    suggestions: colors.colorNames
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    newItem: (item) => dispatch(newItem(item))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(AddItem);
