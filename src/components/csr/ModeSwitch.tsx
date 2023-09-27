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
          size={42}
          cursor="pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BiSolidMoon
          size={42}
          cursor="pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
