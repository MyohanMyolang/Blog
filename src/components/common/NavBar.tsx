import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="flex justify-between pb-8" id="NavBar">
      <Link className={`NavItem font-bold`} href="/">
        Myolang
      </Link>
      <NavItems />
    </div>
  );
}
