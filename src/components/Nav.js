import React from 'react';

const Nav = ({ postToggle }) => {

  return (
    <nav>
      <div className="nav-wrapper amber darken-2">
        <div className="row">
          <div className="col s12 m4">
            <button
              className="post-button left" onClick={()=>postToggle()}>POST</button>
          </div>
          <div className="col s12 m4">
            <a href="/" className="brand-logo right">g[Classifieds]</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
