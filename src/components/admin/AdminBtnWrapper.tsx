import Link from "next/link";
import React from "react";

type Props = {};

export default function AdminBtnWrapper({}: Props) {
  return (
    <div className="flex flex-row-reverse w-full">
      <Link href="write">작성</Link>
    </div>
  );
}
