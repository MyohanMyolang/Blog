import LogoutButton from "@/components/csr/LogoutButton";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";
import { logoutAction } from "../login/actions";
import CheckAdmin from "@/lib/CheckAdmin";

type Props = {};

export default function DashBoardPage({}: Props) {
  if (!CheckAdmin()) {
    notFound();
  }

  /**
   * 방문자 수 - 그래프 형식
   * 게시글 순위
   * Featured Post 등록
   *
   */
  return (
    <>
      <div className="flex flex-row-reverse w-full ">
        <LogoutButton action={logoutAction} />
      </div>
    </>
  );
}
