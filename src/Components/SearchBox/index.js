import './SearchBox.css'
import React from 'react';

export const SearchBox = ({placeholder, handlechange}) => {
    return (
    <input 
        className="searchbox"
        type="search"
        placeholder={placeholder}
        onChange={handlechange}/>
    );
}