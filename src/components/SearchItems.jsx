import React from "react";
// import { FaSearch } from "react-icons/fa";
const SearchItems = ({ searchItems, setSearchItems }) => {
  return (
    <div className="mb-6">
      <form
        className="flex justify-center items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-3 rounded w-64 md:w-96 border-none outline-none text-black"
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
