import React from "react";
import { Input } from "../ui/input";
import SearchButton from "../buttons/SearchButton";
import SearchFilters from "./SearchFilters";

const SearchComponent = () => {
  return (
    <div className="pb-2">
      <div className="flex items-center max-w-[300px] justify-around">
        <SearchFilters />
        <Input type="search" className="mx-2 focus-visible:ring-0 focus-visible:outline-none  h-8"/>
        <SearchButton />
      </div>
    </div>
  );
};

export default SearchComponent;
