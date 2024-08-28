"use client";

import { AlignJustify, Search, X } from "lucide-react";
import Image from "next/image";
import SlideInMenu from "../SlideInMenu";
import Link from "next/link";
import { useState } from "react";
import SearchComponent from "../search/Search";
import React from "react";

import NavBarSlideInMenuContent from "./NavbarSlideInMenuContent";
import NavbarCartComponent from "./cart/NavbarCartComponent";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 w-full z-10 bg-white border-gray-300 border-b">
      <div className="w-full min-w-[240px] flex px-2 py-2 justify-between items-center">
        {/* menu icon */}
        <div className="mr-4 text-gray-500">
          <SlideInMenu
            triggerComponent={<AlignJustify strokeWidth={1} />}
            mainContentComponent={<NavBarSlideInMenuContent />}
          />
        </div>

        {/* logo */}
        <div className="flex items-center">
          <Link href={"/"} className="flex">
            <div className="flex items-center justify-center">
              <div className="w-[30px] h-[30px] overflow-hidden">
                <Image
                  src={"/assets/gc_logo.png"}
                  alt="logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center justify-center h-[30px] text-[15px] text-gray-600 p-2">
              GoldenBuy
            </div>
          </Link>
        </div>

        {/* search and cart icons */}
        <div className="flex items-center">
          <div className="flex">
            <div
              className="text-gray-500"
              onClick={() => {
                // toggle the search ui
                setOpenSearch((val) => !val);
              }}
            >
              {/* If search ui is open, display close icon, else display search icon */}
              {openSearch ? <X strokeWidth={1} /> : <Search strokeWidth={1} />}
            </div>

            {/* Cart Component */}
            <NavbarCartComponent />
          </div>
        </div>
      </div>
      {openSearch && (
        <div className="w-full flex items-center justify-center">
          <SearchComponent />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
