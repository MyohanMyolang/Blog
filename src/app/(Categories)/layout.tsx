import SearchBar from "@/components/csr/SearchBar";
import { searchAction } from "./actions";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SearchBar action={searchAction}>{children}</SearchBar>
    </div>
  );
}
