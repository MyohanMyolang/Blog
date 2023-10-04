import SearchBar from "@/components/csr/SearchBar";
import { searchAction } from "./actions";
import { cookies } from "next/headers";
import AdminMenuBtnWrapper from "@/components/admin/AdminMenuBtnWrapper";
import CategoryPageWrapper from "@/components/categoriesPage/CategoryPageWrapper";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = true;
  return (
    <div>
      <CategoryPageWrapper isAdmin={isAdmin}>{children}</CategoryPageWrapper>
    </div>
  );
}
