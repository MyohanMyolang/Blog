"use client";

import React, { Suspense, useEffect, useState } from "react";
import SearchBar from "../csr/SearchBar";
import { searchAction } from "@/app/(Categories)/actions";
import { BsSearch } from "react-icons/bs";
import CategiryPageLoading from "@/app/(Categories)/loading";
import AdminMenuBtnWrapper from "../admin/AdminMenuBtnWrapper";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  post: React.ReactNode;
  isAdmin: boolean;
};

export default function CategoryPageWrapper({
  children,
  isAdmin,
  post,
}: Props) {
  const [isOpenSearchBar, setIsOpenSearchBar] = useState<boolean>(false);
  const pathName = usePathname();

  useEffect(() => {
    // TODO: if has Session Storage Saved State then setIsOpenSearchBar(true)
    return () => {
      // TODO: Save Open State
    };
  }, []);
  return (
    <>
      <div
        id="menuWrapper"
        className="flex flex-row-reverse items-center gap-4 px-4 h-[60px] "
      >
        <BsSearch
          size={"24px"}
          className="transition-transform duration-300 hover:cursor-pointer hover:scale-150"
          onClick={() => setIsOpenSearchBar(!isOpenSearchBar)}
        />
        {isAdmin && <AdminMenuBtnWrapper />}
      </div>
      <hr />
      {!pathName.includes("/post") ? (
        <>
          <div className={`${isOpenSearchBar && "hidden"}`}>{children}</div>
          <div className={`${!isOpenSearchBar && "hidden"}`}>
            <SearchBar action={searchAction} />
          </div>
        </>
      ) : (
        <>{post}</>
      )}
    </>
  );
}
