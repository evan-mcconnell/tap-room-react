import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    var linkStyle = {
        fontFamily: 'Arial',
        color: '#b6c5aa',
        textDecoration: 'none'
    }
    return(
        <div>
            <h1>Reactive Tap Room</h1>
            <a><Link style={linkStyle} to="/">Tap Room</Link></a> | <a><Link style={linkStyle} to="/newkeg">Create Keg</Link></a>
            <style jsx>{`
                div {
                    background-color: #35454e;
                    color: #b6c5aa;
                    height: 120px;
                    padding: 20px;
                }
                h1 {
                    margin-bottom: 40px;
                }
            `}</style>
        </div>
    );
}

export default Header;