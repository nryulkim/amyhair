import { connect } from 'react-redux';
import { newBrand } from '../../../../actions/brand_actions';
import AddBrand from './add_brand';

const mapStateToProps = ({ brands }, ownProps) => {
  return({
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    newBrand: (brand) => dispatch(newBrand(brand))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(AddBrand);
