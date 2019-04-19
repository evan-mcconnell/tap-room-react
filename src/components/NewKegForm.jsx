import React from 'react';

function NewKegForm(){
    let _name = null;
    let _brand = null;
    let _price = null;
    let _alcoholContent = null;
    let _type = null;

    function handleNewKegSubmission(event){
        event.preventDefault();
        console.log(_name);
        console.log(_name.value);
        // let _name = '';
        // let _brand = '';
        // let _price = '';
        // let _alcoholContent = '';
        // let _type = '';
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
                <input
                    type="text"
                    id="type"
                    placeholder="Drink type"
                    ref={(input) => {_type = input;}}/>
                <button type="submit">Add New Keg</button>
            </form>
            <style jsx>{`
                .main {
                    background-color: rgba(182,197,170,0.9);
                    width: 80%;
                    max-width: 1200px;
                    margin: auto;
                    padding-bottom: 200px;
                    text-align: center;
                }
                h2 {
                    padding-top: 50px;
                    color: #35454e;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    width: 60%;
                    margin: 0 auto;
                }
                input {
                    margin: 20px;
                    line-height: 30px;
                    font-size: 18px;
                    border-radius: 5px;
                }
                button {
                    font-size: 2.6vw;
                    color: rgb(182,197,170);
                    background-color: #35454e;
                    height: 35px;
                    border-radius: 10px;
                    width: 60%;
                    margin: auto;
                }
            `}</style>
        </div>
    );
}

export default NewKegForm;