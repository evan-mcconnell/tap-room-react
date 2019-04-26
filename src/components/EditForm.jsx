import React from 'react';
import PropTypes from 'prop-types';

function EditForm(props){
  let _name = props.name;
  let _brand = props.brand;
  let _price = props.price;
  let _alcoholContent = props.alcoholContent;
  let _type = props.type;
  let _fill = props.fill;

  async function handleEditKegSubmission(event){
    console.log(_name.value);
    console.log(_brand.value);
    console.log(_price.value);
    console.log(_alcoholContent.value);
    console.log(_type.value);
    console.log(_fill.value);
    event.preventDefault();
    let newname = _name.value ? _name.value : props.name;
    let newbrand = _brand.value ? _name.value : props.brand;
    let newprice = _price.value ? _name.value : props.price;
    let newalcoholContent = _alcoholContent.value ? _name.value : props.alcoholContent;
    let newtype = _type.value ? _name.value : props.type;
    let newfill = _fill.value ? _name.value : props.fill;
    await props.onKegSelection(props.id);
    props.onEditKeg({
      name: newname,
      brand: newbrand,
      price: newprice,
      alcoholContent: newalcoholContent, 
      type: newtype,
      fill: newfill,
      id: props.id
    });
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
        <input
          type="number"
          id="type"
          placeholder={props.fill}
          ref={(input) => {_fill = input;}}/><br/>
        <button type="submit">Submit Edit</button>
      </form>
      <style jsx>{`
        input {
          width: 110px;
          border-radius: 5px;
          line-height: 16px;
          margin: 5px;
        }
        button {
          font-size: 14px;
          width: 100px;
          height: 30px;
          border-radius: 20px;
          margin: 10px;
        }
      `}</style>
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