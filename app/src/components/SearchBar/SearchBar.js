import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-header">
            <div className="logo">
                <i class="fab fa-instagram"></i>
            </div>
            <div>
                <h1>Instagram</h1>
            </div>
            <div className="searching">
                <input type="text" placeholder="Search"/>
            </div>
            <div className="socials">
                <div className="social">
                    <i class="far fa-compass"></i>
                </div>
                <div className="social">
                    <i class="far fa-heart"></i>
                </div>
                <div className="social">
                    <i class="far fa-user"></i>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;