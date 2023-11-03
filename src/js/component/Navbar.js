import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark container-fluid text-white">
  <div className="container">
    <a className="navbar-brand text-white" href="#">Start bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <form className="d-flex">  
          <a className="nav-link active me-3" aria-current="page" href="#">Home</a> 
          <a className="nav-link me-3 text-secondary" href="#">About</a>
          <a className="nav-link me-3 text-secondary" href="#">services</a>
          <a className="nav-link me-3 text-secondary" href="#">Contact</a>    
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar