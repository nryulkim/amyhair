import { connect } from 'react-redux';
import FeaturedBrands from './featured_brands';

const mapStateToProps = ({ featureds, brands }, ownProps) => {
  return({
    brands: brands.brands,
    featureds: featureds.featureds
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(FeaturedBrands);
