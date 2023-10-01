"use client";

import { useTheme } from "next-themes";
import React from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

type Props = {};

export default function ModeSwitch({}: Props) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun
          className="md:w-[48px] md:h-[30px] w-8 h-8"
          cursor="pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BiSolidMoon
          className="md:w-[48px] md:h-[30px] w-8 h-8"
          cursor="pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
