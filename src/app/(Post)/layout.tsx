import SearchBar from "@/components/common/SearchBar";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
