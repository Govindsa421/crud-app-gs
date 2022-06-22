import React from "react";

const Search = () => {
  return (
    <div className="">
      <form className="flex space-x-5 items-center">
        <div className="space-x-5">
          <input
            type="text"
            placeholder="Search"
            className="rounded focus:outline-none  border border-gray-400 p-2 text-sm"
          />
          <button className=" bg-primary tracking-wide font-semibold text-sm text-white rounded px-4 py-2">
            Search
          </button>
        </div>
        <span className="text-sm tracking-wide">
          Reset Search
          <strong className="bg-primary ml-2  px-3 py-1 rounded text-white">
            X
          </strong>
        </span>
      </form>
    </div>
  );
};

export default Search;
