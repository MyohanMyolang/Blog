import React from "react";

type Props = {
  params: {
    page: string;
  };
};

export default function LifePage({ params: { page = "1" } }: Props) {
  return <div>Life page {page}</div>;
}
