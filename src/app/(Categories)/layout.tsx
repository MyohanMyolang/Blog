import SearchBar from "@/components/csr/SearchBar";
import { searchAction } from "./actions";
import { cookies } from "next/headers";
import AdminBtnWrapper from "@/components/admin/AdminBtnWrapper";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = cookies().has("token");
  return (
    <div>
      {isAdmin && <AdminBtnWrapper />}
      <SearchBar action={searchAction} isAdmin={isAdmin}>
        {children}
      </SearchBar>
    </div>
  );
}
