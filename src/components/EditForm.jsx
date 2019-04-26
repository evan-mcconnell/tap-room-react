import React from 'react';
import PropTypes from 'prop-types';

function EditForm(props){
  let _name = props.name;
  let _brand = props.brand;
  let _price = props.price;
  let _alcoholContent = props.alcoholContent;
  let _type = props.type;

  function handleEditKegSubmission(event){
    event.preventDefault();
    props.onEditKeg({name: _name.value, brand: _brand.value, price: parseInt(_price.value), alcoholContent: parseInt(_alcoholContent.value), type: _type.value, fill: 124, id: v4()});
    console.log(_name.value);
    // _name.value = '';
    // _brand.value = '';
    // _price.value = '';
    // _alcoholContent.value = '';
    // _type.value = '';
  }
  return(
    <div>
     <form onSubmit={handleEditKegSubmission}>
        <input
          type="text"
          id="name"
          placeholder={props.name}
          ref={(input) => {_name = input;}}/>
        <input
          type="text"
          id="brand"
          placeholder={props.brand}
          ref={(input) => {_brand = input;}}/>
        <input
          type="number"
          id="price"
          placeholder={props.price}
          ref={(input) => {_price = input;}}/>
        <input
          type="text"
          id="alcoholContent"
          placeholder={props.alcoholContent}
          ref={(input) => {_alcoholContent = input;}}/>
        <input
          type="text"
          id="type"
          placeholder={props.type}
          ref={(input) => {_type = input;}}/>
        <button type="submit">Submit Edit</button>
      </form>
    </div>
  )
}

EditForm.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  type: PropTypes.string,
  fill: PropTypes.number,
  id: PropTypes.string,
  onEditKeg: PropTypes.func
}

export default EditForm;