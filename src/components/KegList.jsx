import React from 'react';
import Keg from './Keg';

let masterKegList = [
    {
        name: 'Hoppathon',
        brand: 'Brew Hop',
        price: 5,
        alcoholContent: 5.5,
        type: 'IPA',
        fill: 100
    },
    {
        name: 'Green Flash',
        brand: 'Brew Hop',
        price: 6,
        alcoholContent: 5.5,
        type: 'IPA',
        fill: 10
    },
    {
        name: 'Calm Bucha',
        brand: 'Bucha Brothers',
        price: 4,
        alcoholContent: 0.5,
        type: 'Kombucha',
        fill: 100
    },
    {
        name: 'Dark Soul',
        brand: 'West Coast Malt',
        price: 6,
        alcoholContent: 7.5,
        type: 'Stout',
        fill: 50
    }
];

function KegList() {
    return(
        <div className="main">
            
            <div className="list">
            {masterKegList.map((keg, index) => 
                <Keg name={keg.name}
                    brand={keg.brand}
                    price={keg.price}
                    alcoholContent={keg.alcoholContent}
                    type={keg.type}
                    fill={keg.fill}
                    key={index} />
            )}
            </div>
            <style jsx>{`
                .main {
                    background-color: rgba(182,197,170,0.9);
                    width: 80%;
                    max-width: 1200px;
                    margin: auto;
                    padding-bottom: 200px;
                }
                .list {
                    display: flex;
                    flex-direction: rows;
                    flex-wrap: wrap;
                }
            `}</style>
        </div>
    );
}

export default KegList;