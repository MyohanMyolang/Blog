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
