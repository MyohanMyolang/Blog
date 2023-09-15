import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="grid items-stretch grid-cols-2 grid-rows-3 pb-4 mt-8 dark:text-white dark:bg-gray-900">
      <div className="row-span-3 row-start-2 justify-self-center">Logo</div>
    </div>
  );
}
