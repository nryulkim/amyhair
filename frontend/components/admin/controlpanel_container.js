import { connect } from 'react-redux';
import ControlPanel from './controlpanel';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ brands, products, items }, ownProps) => {
  return({
    brands: brands.brands,
    products: products.products,
    items: items.items
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(ControlPanel);
