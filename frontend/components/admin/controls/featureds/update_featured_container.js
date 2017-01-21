import { connect } from 'react-redux';
import { updateFeatured } from '../../../../actions/featured_actions';
import UpdateFeatured from './update_featured';

const mapStateToProps = ({ brands, featureds }, ownProps) => {
  return({
    brands: brands.brands,
    featureds: featureds.featureds
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    updateFeatured: (featured) => dispatch(updateFeatured(featured))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(UpdateFeatured);
