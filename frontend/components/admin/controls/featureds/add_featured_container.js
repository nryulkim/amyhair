import { connect } from 'react-redux';
import { newFeatured } from '../../../../actions/featured_actions';
import AddFeatured from './add_featured';

const mapStateToProps = ({ brands }, ownProps) => {
  return({
    brands: brands.brands
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    newFeatured: (featured) => dispatch(newFeatured(featured))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(AddFeatured);
