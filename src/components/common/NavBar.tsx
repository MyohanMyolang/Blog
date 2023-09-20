import Link from "next/link";
import React from "react";
import NavItems, { NavItemList } from "./NavItems";
import LinkDropDownMenuBtn from "./LinkDropDownMenuBtn";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <>
      <div className="sticky bg-opacity-40 top-0 z-50 justify-between hidden py-8 mb-8 text-center bg-gray-900 md:flex">
        <Link className={`NavItem font-bold`} href="/">
          Myolang
        </Link>
        <NavItems />
      </div>
      <div className="sticky bg-opacity-40 top-0 z-50 grid grid-cols-3 py-8 mb-8 bg-gray-900 md:hidde justify-items-stretch md:hidden">
        <Link
          className={`NavItem font-bold justify-self-center col-start-2`}
          href="/"
        >
          Myolang
        </Link>
        <div className="col-start-3 text-black dark:text-white justify-self-end">
          <LinkDropDownMenuBtn items={NavItemList} />
        </div>
      </div>
    </>
  );
}
