import React from 'react';


function Footer() {
  return(
    <div className="main">
      <p>Something something something copyright 2019 something something</p>
      <style jsx>{`
        .main {
            height: 100px;
            background-color: #35454e;
            color: #b6c5aa;
            display: flex;
        }
        p {
            align-self: flex-end;
            font-size: 0.9em;
            padding: 10px;
        }
            `}</style>
    </div>
  );
}

export default Footer;