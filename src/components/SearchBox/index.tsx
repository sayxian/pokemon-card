import "./SearchBox.css";
import React from "react";

export const SearchBox = ({ placeholder, handlechange } : { placeholder : string, handlechange : (event: any) => void}) => {
  return (
    <input
      className="searchbox"
      type="search"
      placeholder={placeholder}
      onChange={handlechange}
    />
  );
};
