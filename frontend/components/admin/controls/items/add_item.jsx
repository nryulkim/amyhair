import React from 'react';
import { Link, withRouter } from 'react-router';
import Autosuggest from 'react-autosuggest';
import { setDragAndDrop } from '../../../../util/util_functions';

class AddItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: null,
      brand_id: "",
      product_id: "",
      name: "",
      description: "",
      imgFile: "",
      imgURL: "",
      lengths: [],
      suggestions: []
    };
    this.getBrandList = this.getBrandList.bind(this);
    this.getProductList = this.getProductList.bind(this);
    this.getForm = this.getForm.bind(this);
    this.brandChooser = this.brandChooser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setBrand = this.setBrand.bind(this);
    this.setProduct = this.setProduct.bind(this);
    this.productName = this.productName.bind(this);
    this.update = this.update.bind(this);
    this.addLength = this.addLength.bind(this);
    this.updateLength = this.updateLength.bind(this);
    this.updateColors = this.updateColors.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsFetchRequested.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
  }

  addLength(){
    const { lengths } = this.state;
    const newLengths = lengths.slice(0);
    newLengths.push({ length: "", colors: ""});
    this.setState({
      lengths: newLengths
    })
  }

  updateLength(idx){
    const { lengths } = this.state;
    const newLengths = lengths.slice(0);
    return (e) => {
      newLengths[idx].length = e.currentTarget.value;
      this.setState({
        lengths: newLengths
      })
    }
  }

  updateColors(idx){
    const { lengths } = this.state;
    const newLengths = lengths.slice(0);
    return (e) => {
      newLengths[idx].colors = e.currentTarget.value;
      this.setState({
        lengths: newLengths
      })
    }
  }

  deleteLength(idx){
    const { lengths } = this.state;
    return (e) => {
      e.preventDefault();
      lengths.splice(idx, 1);
      this.setState({
        lengths: lengths
      })
    }
  }

  renderSuggestion (suggestion){
    return(
      <div id="suggestions">
        {suggestion}
      </div>
    );
  }

  getSuggestionValue(suggestion){
    return suggestion.name;
  }

  getSuggestions(value){
    const { suggestions } = this.props;
    const inputValue = value.split(",").pop().trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : suggestions.filter(color =>
      color.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  onSuggestionsFetchRequested(something) {
    if(!something){ return }
    const value = something.value;
    this.setState({
      suggestions: this.getSuggestions(value).slice(0, 5)
    });
  };

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  };


  getLengthForms(){
    const { lengths, suggestions } = this.state;
    const rslt = [];


    for (let i = 0; i < lengths.length; i++) {
      const inputProps = {
        placeholder: 'Add Colors (example: 1, 1b...)',
        value: lengths[i].colors ? lengths[i].colors : "",
        onChange: this.updateColors(i)
      };

      rslt.push(
        <div key={i}>
          <input
            type="text"
            value={this.state.lengths[i].length}
            key={'l' + i}
            onChange={this.updateLength(i)}
            placeholder="Add Length (example: 12)"/>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={this.getSuggestionValue}
              renderSuggestion={this.renderSuggestion}
              inputProps={inputProps}
            />
          <a onClick={this.deleteLength(i)} className="delete-length">X</a>
        </div>
      );
    }

    return rslt;
  }

  update(input){
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  handleSubmit(e){
    if(e){ e.preventDefault(); }
    $("#submit").prop("disabled",true).toggleClass("disabled");

    const { name, description, imgFile, product_id, lengths } = this.state;
    const output = new FormData();
    output.append("item[name]", name);
    output.append("item[description]", description);
    output.append("item[img]", imgFile);
    output.append("item[product_id]", product_id);
    output.append("item[lengths]", JSON.stringify(lengths));
    this.props.newItem(output);
    this.props.router.push({pathname: "/login"});
    this.setState({
      name: "",
      description: "",
      imgFile: "",
      imgURL: "",
      product_id: "",
      brand_id: ""
    });
  }

  setBrand(brand){
    return (e) => {
      e.preventDefault();
      this.setState({
        brand_id: brand.id,
      });
    }
  }

  getBrandList(){
    const rslt = [];
    const { brands } = this.props;
    for (let i = 0; i < brands.length; i++) {
      rslt.push(<li key={i}><a onClick={this.setBrand(brands[i])}>{brands[i].brand}</a></li>);
    }
    return(
      <ul className='type-chooser'>
        {rslt}
      </ul>
    );
  }

  setProduct(product){
    return (e) => {
      e.preventDefault();
      this.setState({
        product_id: product.id
      });
    }
  }

  getProductList(){
    if(this.state.brand_id === ""){ return null; }
    const rslt = [];
    const { products } = this.props;
    for (let i = 0; i < products.length; i++) {
      if(this.state.brand_id == products[i].brand_id){
        rslt.push(<li key={i}><a onClick={this.setProduct(products[i])}>{products[i].name}</a></li>);
      }
    }
    return(
      <ul className='name-chooser'>
        {rslt}
      </ul>
    );
  }

  brandChooser(){
    return(
      <div className='chooser'>
        {this.getBrandList()}
        {this.getProductList()}
      </div>
    );
  }

  productName(){
    const { product_id } = this.state;
    const { products } = this.props;

    for (let i = 0; i < products.length; i++) {
      if(products[i].id == product_id){
        return products[i].name;
      }
    }
    return 'Unknown';
  }

  getForm(){
    window.setTimeout(() => setDragAndDrop("#dropImg", this.getImg), 300);
    return(
      <form className="add-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          disabled="true"
          value={this.productName()}/>
        <input
          type="text"
          onChange={this.update('name')}
          value={this.state.name}
          placeholder="What is the item name?"/>
        <input
          type="text"
          onChange={this.update('description')}
          value={this.state.description}
          placeholder="What is the item description?"/>
        <div className="img-input-container">
          <div id="dropImg">
            <input type="file" className="drop_file"  id="img"></input>
            <label htmlFor="img">
              <img className="product-img img" src={this.state.imgURL}/>
              <strong>Choose an image</strong> or drag it here.
            </label>
          </div>
        </div>

        <div className="length-container">
          <a onClick={this.addLength}>Add Length</a>
          {this.getLengthForms()}
        </div>

        <button id="submit" type="submit">Add</button>
      </form>
    );
  }

  render(){
    let content = this.brandChooser();
    if(this.state.product_id){
      content = this.getForm();
    }
    return(
      <div className="product-container">
        <h1>Add Item</h1>
        {content}
      </div>
    );
  }
}

export default withRouter(AddItem);
