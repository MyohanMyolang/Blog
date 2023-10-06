type PostType = {
  id: number;
  title: string;
  des: string;
  rootCategory: string;
  category: string;
  date: string;
  featured: boolean;
  intro?: string;
  imgSrc?: string;
};

type PostCardType = Omit<PostType, "featured" | "rootCategory">;

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

type PostWriteReqType = {};
