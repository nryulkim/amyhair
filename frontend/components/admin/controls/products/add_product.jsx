import React from 'react';
import { Link, withRouter } from 'react-router';
import { setDragAndDrop } from '../../../../util/util_functions';

class AddProduct extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      imgFile: "",
      imgURL: "",
      brand_id: '17',
      bundle: false
    };
    this.update = this.update.bind(this);
    this.getImg = this.getImg.bind(this);
    this.updateImg = this.updateImg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getBrands(){
    const { brands } = this.props;
    if(!brands){ return null; }
    const rslt = [];
    for (let i = 0; i < brands.length; i++) {
      rslt.push(
        <option key={i} value={brands[i].id}>{brands[i].brand}</option>
      );
    }
    return rslt;
  }

  componentDidMount(){
    setDragAndDrop("#dropImg", this.getImg);
  }

  update(input){
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  updateImg(e){
    const file = e.currentTarget.files[0];
    this.getImg(file);
  }

  getImg(file){
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imgFile: file, imgURL: fileReader.result });
    };
    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    $("#submit").prop("disabled",true).toggleClass("disabled");

    const { name, description, imgFile, brand_id } = this.state;
    const output = new FormData();
    output.append("product[name]", name);
    output.append("product[description]", description);
    output.append("product[img]", imgFile);
    output.append("product[brand_id]", brand_id);
    this.props.newProduct(output);
    this.props.router.push({pathname: "/login"});
    this.setState({
      name: "",
      description: "",
      imgFile: "",
      imgURL: "",
      brand_id: ""
    });
  }


  render(){
    const { formType } = this.props;

    return(
      <div>
        <h1>Add Product</h1>
        <form className="add-form" onSubmit={this.handleSubmit}>
          <select value={this.state.brand_id} onChange={this.update('brand_id')}>
            {this.getBrands()}
          </select>
          <input
            type="text"
            value={this.state.name}
            onChange={this.update('name')}
            placeholder="What is the product name?"/>
          <input
            type="text"
            value={this.state.description}
            onChange={this.update('description')}
            placeholder="Please add a description"/>

          <div className="img-input-container">
            <div id="dropImg">
              <input type="file" className="drop_file"  id="img" onChange={this.updateImg}></input>
              <label htmlFor="img">
                <img className="product-img img" src={this.state.imgURL}/>
                <strong>Choose an image</strong> or drag it here.
              </label>
            </div>
          </div>


          <button id="submit" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddProduct);
