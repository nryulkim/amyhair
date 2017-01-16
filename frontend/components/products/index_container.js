import { connect } from 'react-redux';
import BrandIndex from './index';

const mapStateToProps = ({ brands }, ownProps) => {
  return({
    brands: brands.brands
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(BrandIndex);
