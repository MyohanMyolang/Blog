"use client";

import React from "react";

type Props = {};

export default function WritePost({}: Props) {
  const onSubmit = async () => {
    const result = await fetch("/api/post", {
      method: "post",
    });
    console.log(result.status);
  };

  return (
    <>
      <div>
        씨발
        <button onClick={onSubmit}>TestSubmit</button>
      </div>
    </>
  );
}
