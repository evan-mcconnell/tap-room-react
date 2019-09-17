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
      <Link style={linkStyle} to="/">Tap Room</Link> | <Link style={linkStyle} to="/newkeg">Create Keg</Link>
      <style jsx>{`
        div {
          background-color: rgb(10, 8, 5);
          color: transparent;
          text-shadow: 0 0 2px rgba(255,255,255,0.95);
          height: 120px;
          padding: 30px 10% 5px 10%;
          text-align: center;
      }
      h1 {
          padding-bottom: 10px;
          font-family: 'Nova Round', sans-serif;
          font-size: 70px;
      }
            `}</style>
    </div>
  );
}

export default Header;