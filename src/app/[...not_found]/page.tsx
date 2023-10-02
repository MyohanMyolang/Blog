import { notFound } from "next/navigation";
import React from "react";

type Props = {};

export default function MoveNotFound({}: Props) {
  notFound();
}
