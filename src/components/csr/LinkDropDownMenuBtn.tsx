"use client";

import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { container } from "@/inversify.config";
import { LinkItem } from "../common/NavItems";
import Link from "next/link";

type Props = {
  items: LinkItem[];
};

export default function LinkDropDownMenuBtn({ items }: Props) {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleFocusout = (e: FocusEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current?.contains(e.relatedTarget as Node)
      ) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener("focusout", handleFocusout);
    } else {
      document.removeEventListener("focusout", handleFocusout);
    }
    return () => {
      document.removeEventListener("focusout", handleFocusout);
    };
  }, [isOpen]);

  return (
    <>
      <button onClick={toggle} ref={btnRef}>
        <svg width={24} height={24}>
          <path
            d="M5 6h14M5 12h14M5 18h14"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          ></path>
        </svg>
      </button>
      <section
        ref={dropDownRef}
        className={`absolute [&>*]:pt-2 p-3 pr-5 mt-2 -translate-x-10 bg-cyan-100 dark:bg-gray-600 ${
          !isOpen && "hidden"
        }`}
      >
        {items.map((item, index) => (
          <div key={item.name}>
            {index != 0 && <hr />}
            <Link href={item.herf} key={item.name} onClick={close}>
              {item.name}
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
