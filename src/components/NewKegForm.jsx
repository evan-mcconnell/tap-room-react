import React from 'react';
import coffee from '../assets/images/coffee.jpg';

function NewKegForm(){
    return (
        <div>
            <form>
                <input
                    type='text'
                    id='name'
                    placeholder='Keg Name'/>
                <button type='submit'>Make a new Keg</button>
            </form>
            <img src={coffee} alt="have you had coffee?"/>
        </div>
    );
}

export default NewKegForm;