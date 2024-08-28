"use client";

import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import React from "react";
import DropDownMenuComponent from "../DropDownMenu";

export type TSearchFilters = { triggerText: string, filters: {text:string, clickhandler?: Function}[]}[];

const SearchFilters = () => {
  const [showFilterOpts, setShowFilterOpts] = useState<boolean>(false);


 const searchFilterOptions:TSearchFilters = [
    {  
       triggerText: "Price",
       filters:   [
        {
          text: "Lowest"

        },
        {
           text: "Highest"
        },
        {
          text: "Range"
        }
       ]
    },
    {  
      triggerText: "Manufacturer",
      filters:   [
       {
         text: "Dell"

       },
       {
          text: "HP"
       },
       {
         text: "Toshiba"
       }
      ]
   },
]

  return (
    <div className="relative">
      {/* filter Icon */}
      <SlidersHorizontal strokeWidth={1} onClick={()=>{
        setShowFilterOpts(val => !val)
      }} />

      {/* search filter drop down menu */}
      {showFilterOpts && (
        <div className="absolute top-8 bg-white shadow-lg rounded-sm text-gray-600">

          <div className="w-[160px] px-1">
            {
              searchFilterOptions.map((filters, index)=>{
                 return <DropDownMenuComponent
                 key={filters.triggerText + index}
                 triggerComponent={
                   <div className="px-2 flex justify-center text-center w-full">
                     {filters.triggerText}
                   </div>
                 }
                 menuOptions={filters.filters}
               />
              })
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
