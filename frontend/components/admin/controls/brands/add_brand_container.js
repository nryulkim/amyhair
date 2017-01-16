import { connect } from 'react-redux';
import { addBrand } from '../../../../actions/brand_actions';
import AddBrand from './add_brand';

const mapStateToProps = ({ brands }, ownProps) => {
  return({
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    addBrand: (brand) => dispatch(addBrand(brand))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(AddBrand);
