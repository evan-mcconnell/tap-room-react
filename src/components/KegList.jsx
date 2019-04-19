import React from 'react';
import Keg from './Keg';

let masterKegList = [
    {
        name: 'Hoppathon',
        brand: 'Brew Hop',
        price: 5,
        alcoholContent: 5.5,
        type: 'IPA'
    },
    {
        name: 'Green Flash',
        brand: 'Brew Hop',
        price: 6,
        alcoholContent: 5.5,
        type: 'IPA'
    },
    {
        name: 'Calm Bucha',
        brand: 'Bucha Brothers',
        price: 4,
        alcoholContent: 0.5,
        type: 'Kombucha'
    },
    {
        name: 'Dark Soul',
        brand: 'West Coast Malt',
        price: 6,
        alcoholContent: 7.5,
        type: 'Stout'
    }
];

function KegList() {
    return(
        <div>
            <hr/>
            {masterKegList.map((keg, index) => 
                <Keg name={keg.name}
                    brand={keg.brand}
                    price={keg.price}
                    alcoholContent={keg.alcoholContent}
                    type={keg.type}
                    key={index} />
            )}
        </div>
    );
}

export default KegList;