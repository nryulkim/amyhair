import { connect } from 'react-redux';
import { updateBrand } from '../../../../actions/brand_actions';
import UpdateBrand from './update_brand';

const mapStateToProps = ({ brands }, ownProps) => {
  return({
    brands: brands.brands
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    updateBrand: (brand) => dispatch(updateBrand(brand))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(UpdateBrand);
