"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type Props = {
  action: () => Promise<void>;
};

export default function LogoutButton({ action }: Props) {
  const { pending } = useFormStatus();

  const logoutHandler = async () => {
    const result = confirm("정말로 로그아웃 하시겠습니까?");
    if (result) await action();
  };

  return (
    <button
      className="text-2xl p-4 h-[60px] bg-cyan-400 rounded-full"
      disabled={pending}
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}
