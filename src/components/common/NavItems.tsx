import Link from "next/link";
import React from "react";

type Props = {};

export type LinkItem = {
  herf: string;
  name: string;
};

export const NavItemList: LinkItem[] = [
  {
    herf: "/about",
    name: "About",
  },
  {
    herf: "/dev",
    name: "Dev",
  },
  {
    herf: "/life",
    name: "Life",
  },
];

export default function NavItems({}: Props) {
  return (
    <div id="NavItemWrapper" className={"[&>*]:px-2 [&>*]:NavItem"}>
      {NavItemList.map((item) => {
        return (
          <Link key={item.name} href={item.herf}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
