import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    var linkStyle = {
        fontFamily: 'Arial',
        color: '#b6c5aa',
        textDecoration: 'none'
    };
    return(
        <div>
            <h1>Reactive Tap Room</h1>
            <a><Link style={linkStyle} to="/">Tap Room</Link></a> | <a><Link style={linkStyle} to="/newkeg">Create Keg</Link></a><hr/>
            
            <style jsx>{`
                div {
                    background-color: #35454e;
                    color: #b6c5aa;
                    height: 100px;
                    padding: 30px 10% 5px 10%;
                }
                h1 {
                    padding-bottom: 20px;
                }
                hr {
                    border-color: darkgrey;
                    width: 40%;
                }
            `}</style>
        </div>
    );
}

export default Header;