import { connect } from 'react-redux';
import { deleteBrand } from '../../../../actions/brand_actions';
import DeleteBrand from './delete_brand';

const mapStateToProps = ({ brands }, ownProps) => {
  return({
    brands: brands.brands
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    deleteBrand: (brand) => dispatch(deleteBrand(brand))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(DeleteBrand);
