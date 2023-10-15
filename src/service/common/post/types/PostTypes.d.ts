type PostType = {
  id: number;
  title: string;
  des: string;
  RCate: RootCategoryType;
  category: string;
  date: string;
  featured: boolean;
  intro?: string;
  imgSrc?: string;
};

type PostCardType = Omit<PostType, "featured" | "RCate" | "des">;

type RootCategoryType = "dev" | "life";

type MethodDecoratorType = {
  target: any;
  property: string;
  descriptor: PropertyDescriptor;
};

type PostsReqType = {
  page: string;
  rootCate: RootCategoryType;
};

type PostReqType = {
  id: string;
};

type PostWriteReqType = Omit<PostType, "featured" | "id" | "date">;
