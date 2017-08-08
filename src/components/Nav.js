import React from 'react';



const Nav = ({ postToggle }) => {

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="row">
          <div className="col s6 m6">
            <button
            className="brand-logo left" onClick={()=>postToggle()}>POST</button>
          </div>
          <div className="col s6 m6">
            <a href="/" className="brand-logo right">g[Classifieds]</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
