export type PostType = {
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

export type PostCardType = Omit<PostType, "featured" | "rootCategory">;

export type RootCategoryType = "dev" | "life";
