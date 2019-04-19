import React from 'react';
import Keg from './Keg';

var masterKegList = [
    {
        
    },
];

function KegList() {
    return(
        <div>
            <hr/>
            {masterKegList.map((keg, index) => 
                <Keg names={keg.name}
                   
                    key={index} />
            )}
        </div>
    );
}

export default KegList;