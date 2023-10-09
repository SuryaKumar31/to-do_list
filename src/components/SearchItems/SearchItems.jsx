import React from "react";
import "./SearchItems.css";
import { FaSearch } from "react-icons/fa";
const SearchItems = ({ searchItems, setSearchItems }) => {
  return (
    <div className="addItems">
      <form className="searchItems--form" onSubmit={(e) => e.preventDefault()}>
        <label className="searchIcon" htmlFor="searchIcon">
          <FaSearch />
        </label>
        <input
          className="searchItems--input b-o-p"
          type="text"
          id="searchIcon"
          placeholder="Search for tasks"
          value={searchItems}
          onChange={(e) => setSearchItems(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default SearchItems;
