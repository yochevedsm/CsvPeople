import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <Link to='/home' className="navbar-brand">Csv Parsing</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item"><Link to="/Home" className='nav-link text-light'>Home</Link></li>
                                <li className="nav-item"><Link to="/FileUpload" className='nav-link text-light'>Upload</Link></li>
                                <li className="nav-item"><Link to="/Generate" className='nav-link text-light'>Generate</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container" style={{ marginTop: 60 }}>
                {children}
            </div>
        </div>
    )
}

export default Layout;
