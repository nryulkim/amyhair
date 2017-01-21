import { connect } from 'react-redux';
import { deleteFeatured } from '../../../../actions/featured_actions';
import DeleteFeatured from './delete_featured';

const mapStateToProps = ({ brands, featureds }, ownProps) => {
  return({
    brands: brands.brands,
    featureds: featureds.featureds
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    deleteFeatured: (id) => dispatch(deleteFeatured(id))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(DeleteFeatured);
