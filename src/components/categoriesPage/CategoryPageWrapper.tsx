"use client";

import React, { Suspense, useEffect, useState } from "react";
import SearchBar from "../csr/SearchBar";
import { BsSearch } from "react-icons/bs";
import AdminMenuBtnWrapper from "../admin/AdminMenuBtnWrapper";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
  const isPost = pathName.includes("/post");

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
      <div className={`${!isOpenSearchBar && "hidden"}`}>
        <SearchBar isPost={isPost} />
      </div>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={isPost ? "post" : "postList"}
          animate={{ opacity: 1, scaleY: 1 }}
          initial={{ opacity: 0, scaleY: 2 }}
          exit={{ opacity: 0, scaleY: 0.1 }}
          transition={{ duration: 0.3 }}
        >
          {!isPost ? (
            <>
              <div className={`${isOpenSearchBar && "hidden"}`}>{children}</div>
            </>
          ) : (
            <>{post}</>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
