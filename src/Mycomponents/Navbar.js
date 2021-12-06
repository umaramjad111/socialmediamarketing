import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light pt-0">
  <div className="container-fluid py-2">
    <Link className="navbar-brand fs-2 fw-light" smooth to="#home">Social Media Marketing
    <i class="fas fa-bullhorn ms-2"></i></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" smooth to="#home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" smooth to="#about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" smooth to="#services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" smooth to="#contact">Contact</Link>
        </li>

      </ul>
    
    </div>
  </div>
</nav>
        </div>
    )
}
