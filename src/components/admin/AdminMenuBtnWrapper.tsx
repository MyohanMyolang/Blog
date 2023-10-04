import Link from "next/link";
import React from "react";
import { BsPencil } from "react-icons/bs";

type Props = {};

export default function AdminMenuBtnWrapper({}: Props) {
  return (
    <>
      <Link href="write">
        <BsPencil
          className="transition-transform duration-300 hover:scale-150"
          size={"24px"}
        />
      </Link>
    </>
  );
}
