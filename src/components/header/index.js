import React from 'react'
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="/pokedex">Pokemon</Link>
                    <Link className="navbar-brand" to="/flags">Countries</Link>
                    <Link className="navbar-brand" to="/image/search/">Images</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Pokedex</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled">Delete</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;