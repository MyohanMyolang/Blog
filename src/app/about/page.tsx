import incCountTest from "@/TestModule";
import React from "react";

type Props = {};

export default function AboutPage({}: Props) {
  incCountTest();
  return <div>AboutPage</div>;
}
