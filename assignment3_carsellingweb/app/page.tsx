import Image from "next/image";
import HeroSection from "./Component/HeroSection";
import FeaturedCarSection from "./Component/FeaturedCarSection";

export default function Home() {
  return (
   <div className="">
    <HeroSection/>
    <FeaturedCarSection/>
   </div>
  );
}
