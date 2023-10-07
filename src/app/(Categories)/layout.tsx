import CategoryPageWrapper from "@/components/categoriesPage/CategoryPageWrapper";
import CheckAdmin from "@/lib/CheckAdmin";

export default function PostLayout(props: {
  children: React.ReactNode;
  post: React.ReactNode;
}) {
  const isAdmin = CheckAdmin();
  return (
    <div>
      <CategoryPageWrapper isAdmin={isAdmin} post={props.post}>
        {props.children}
      </CategoryPageWrapper>
    </div>
  );
}
