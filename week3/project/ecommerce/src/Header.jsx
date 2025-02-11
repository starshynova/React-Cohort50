import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <Link to={'/'}><h3>All products</h3></Link>
                <Link to={'/favorites'}><h3>Favorites</h3></Link>
            </nav>
        </header>
    );
};

export default Header;
