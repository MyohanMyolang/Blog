import CategoryPageWrapper from "@/components/categoriesPage/CategoryPageWrapper";
import CheckAdmin from "@/lib/CheckAdmin";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = CheckAdmin();
  return (
    <div>
      <CategoryPageWrapper isAdmin={isAdmin}>{children}</CategoryPageWrapper>
    </div>
  );
}
