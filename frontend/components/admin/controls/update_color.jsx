import React from 'react';
import { Link, withRouter } from 'react-router';
import { setDragAndDrop } from '../../../util/util_functions';

class UpdateColor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color_type: "",
      name: "",
      imgFile: "",
      imgURL: window.imgAssets.defaultColor
    };
  }

  componentDidMount(){
    
  }

  render(){
    const { formType } = this.props;

    return(
      <div>
        <h1> Something goes here </h1>
      </div>
    );
  }
}

export default withRouter(UpdateColor);
