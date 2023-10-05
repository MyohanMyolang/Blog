import RecentryCarousel from "@/components/carousel/RecentryCarousel";
import Profile from "@/components/profile/Profile";
import FeaturedCarousel from "@/components/carousel/FeaturedCarousel";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <Profile />

      <div className="grid grid-cols-1 grid-rows-2 mt-4 md:grid-cols-2 md:grid-rows-1 ">
        <RecentryCarousel key="recentryCarousel" />
        <FeaturedCarousel key="featuredCarousel" />
      </div>

      {/* TODO: Add News Box About Coding Issue To crawling or use Api from some site 
      -- awesome dev blog
      */}
    </>
  );
}
