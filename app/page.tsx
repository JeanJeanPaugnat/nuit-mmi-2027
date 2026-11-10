import ParallaxContainer from "./ui/parallaxContainer";
import HeaderScroll from "./ui/headerScroll";
import SectionProgram from "./ui/sectionProgram";

export default function Home() {
  return (
    <div className="h-1200">
        <HeaderScroll/>
        {/* <ParallaxContainer/> */}
        <SectionProgram/>
    </div>
  );
}
