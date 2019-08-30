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
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _type.value = '';
  }

  return (
    <div className="main">
      <h2>Add a New Keg to the List</h2>
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
        <select
          ref={select => {_type = select;}}
          name="type">
          <option value="">Select a Type</option>
          <option value="Kombucha">Kombucha</option>
          <option value="IPA">IPA</option>
          <option value="Stout">Stout</option>
        </select>
        <button type="submit">Add New Keg</button>
      </form>
      <style jsx>{`
                h2 {
                    padding-top: 30px;
                    padding-bottom: 10px;
                    color: transparent;
                    text-shadow: 0 0 1px rgba(255,255,255,0.95);
                    font-size: 30px;
                    font-family: 'Nova Round';
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
                select {
                  margin: 10px;
                    line-height: 28px;
                    font-size: 18px;
                    border-radius: 5px;
                }
                button {
                    font-size: 1.8vw;
                    color: white;
                    background-color: black;
                    height: 40px;
                    border-radius: 8px;
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