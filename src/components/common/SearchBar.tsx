"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  action: (text: string) => Promise<string>;
};

export default function SearchBar({ action }: Props) {
  const [searchText, setSearchText] = useState<string>("");

  return <></>;
}
