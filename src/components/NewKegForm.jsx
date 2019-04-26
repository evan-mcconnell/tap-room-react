import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _type = null;

  function handleNewKegSubmission(event){
    event.preventDefault();
    props.onAddNewKeg({name: _name.value, brand: _brand.value, price: parseInt(_price.value), alcoholContent: parseInt(_alcoholContent.value), type: _type.value, fill: 124, id: v4()});
    console.log(_name.value);
    // _name.value = '';
    // _brand.value = '';
    // _price.value = '';
    // _alcoholContent.value = '';
    // _type.value = '';
  }

  return (
    <div className="main">
      <h3>Add a New Keg to the List</h3>
      <form onSubmit={handleNewKegSubmission}>
        <input
          type="text"
          id="name"
          placeholder="Drink name"
          ref={(input) => {_name = input;}}/>
        <input
          type="text"
          id="brand"
          placeholder="Brewery/Brand"
          ref={(input) => {_brand = input;}}/>
        <input
          type="number"
          id="price"
          placeholder="Drink price"
          ref={(input) => {_price = input;}}/>
        <input
          type="text"
          id="alcoholContent"
          placeholder="ABV"
          ref={(input) => {_alcoholContent = input;}}/>
        <input
          type="text"
          id="type"
          placeholder="Drink type"
          ref={(input) => {_type = input;}}/>
        <button type="submit">Add New Keg</button>
      </form>
      <style jsx>{`
                h3 {
                    padding-top: 30px;
                    color: #35454e;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    width: 40%;
                    margin: 0 auto 30px auto;
                }
                input {
                    margin: 10px;
                    line-height: 24px;
                    font-size: 16px;
                    border-radius: 5px;
                }
                button {
                    font-size: 1.7vw;
                    color: rgb(182,197,170);
                    background-color: #35454e;
                    height: 30px;
                    border-radius: 10px;
                    width: 40%;
                    margin: auto;
                }
            `}</style>
    </div>
  );
}

NewKegForm.propTypes = {
  onAddNewKeg: PropTypes.func
};

export default NewKegForm;