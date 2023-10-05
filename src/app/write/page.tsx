import WritePost from "@/components/admin/WritePost";
import CheckAdmin from "@/lib/CheckAdmin";
import { notFound } from "next/navigation";
import React from "react";

type Props = {};

export default function WritePage({}: Props) {
  const isAdmin = CheckAdmin();
  if (!isAdmin) notFound();
  return <WritePost />;
}
