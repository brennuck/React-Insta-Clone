import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-header">
            <div className="items">
                <i class="fab fa-instagram"></i>
                <h1>Instagram</h1>
                <input placeholder="Search"/>
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar;