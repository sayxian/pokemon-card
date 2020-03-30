import React from 'react';

export const SearchBox = ({placeholder, handlechange}) => {
    return (
    <input 
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handlechange}/>
    );
}