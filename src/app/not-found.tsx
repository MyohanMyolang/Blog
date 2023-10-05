import NotFound from "@/components/csr/NotFound";
import React from "react";

type Props = {};

export default function RootNotFoundPage({}: Props) {
  return (
    <NotFound>
      <div>찾을 수 없는 페이지 입니다.</div>
    </NotFound>
  );
}
