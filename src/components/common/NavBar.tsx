"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavItems, { NavItemList } from "./NavItems";
import LinkDropDownMenuBtn from "../csr/LinkDropDownMenuBtn";
import ModeSwitch from "../csr/ModeSwitch";
import { debounce } from "lodash";

type Props = {};

export default function NavBar({}: Props) {
  const [navbarOption, setNavbarOption] = useState<"sticky" | "block">("block");
  const [curY, setCurY] = useState(0);

  useEffect(() => {
    const scrollHandler = debounce(() => {
      const currentY = window.scrollY;

      if (curY > currentY) setNavbarOption("sticky");
      else setNavbarOption("block");

      setCurY(currentY);
    }, 300);
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [curY]);

  return (
    <>
      <div
        className={`${navbarOption} top-0 z-50 justify-between hidden py-8 mb-8 text-center light-bg dark:bg-gray-900 md:flex`}
      >
        <Link className={`NavItem font-bold`} href="/">
          Myolang
        </Link>
        <NavItems />
      </div>
      <div
        className={`${navbarOption} top-0 z-50 grid grid-cols-3 py-8 mb-8 light-bg dark:bg-gray-900  md:hidde justify-items-stretch md:hidden`}
      >
        <ModeSwitch />
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
