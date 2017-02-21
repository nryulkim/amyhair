import React from 'react';
import { Link, withRouter } from 'react-router';
import { setDragAndDrop } from '../../../../util/util_functions';

class ColorList extends React.Component {
  constructor(props){
    super(props);
    this.getColorNames = this.getColorNames.bind(this);
  }

  getColorNames(){
    let { colorList } = this.props;
    colorList = colorList.sort();
    const listItems = [];
    for (let i = 0; i < colorList.length; i++) {
      listItems.push(<li key={i}>{colorList[i]}</li>);
    }
    return listItems;
  }

  render(){
    const { colorList } = this.props;
    return (
      <ul>
        {this.getColorNames()}
      </ul>
    );
  }
}

export default withRouter(ColorList);
