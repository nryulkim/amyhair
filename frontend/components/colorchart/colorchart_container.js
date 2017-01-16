import { connect } from 'react-redux';
import ColorChart from './colorchart';

const mapStateToProps = ({ colors }, ownProps) => {
  return({
    colors: colors.colors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(ColorChart);
