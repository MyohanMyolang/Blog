"use client";

import React from "react";
import ContMenuBtn from "../csr/ContMenuBtn";

type Props = {};

export default function AdminPostContBtnWrapper({}: Props) {
  return (
    <div className="flex gap-4">
      <ContMenuBtn>수정</ContMenuBtn>
      <ContMenuBtn>삭제</ContMenuBtn>
    </div>
  );
}
