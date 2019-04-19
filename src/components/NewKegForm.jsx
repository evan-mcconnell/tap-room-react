import React from 'react';

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
        </div>
    );
}

export default NewKegForm;