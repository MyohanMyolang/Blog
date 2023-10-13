"use client";

import React from "react";

type Props = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
  pending?: boolean;
};

export default function ContMenuBtn({ children, onClick, pending }: Props) {
  return (
    <button
      disabled={pending}
      onClick={onClick}
      className="p-2 transition transform active:translate-y-2 duration:300 hover:-translate-y-2 hover:border-b-2 hover:border-b-cyan-300"
    >
      {children}
    </button>
  );
}
