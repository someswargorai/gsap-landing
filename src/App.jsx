import Navbar from "./components/Navbar";
import VideoScrubber from "./components/VideoScrubber";
import HorizontalScroll from "./components/HorizontalScroll";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Playground from "./components/Playground";
import FeaturedWork from "./components/FeaturedWork";
import StackedCards from "./components/StackedCards";
import { overlays1, overlays2 } from "./data/overlays";
import PinnedSequence from "./components/PinnedSequence";

function App() {
  return (
    <div className="w-full bg-[#000000] font-sans antialiased text-white selection:bg-white/30">
      <Navbar />
      <VideoScrubber videoSrc="/video_1_scrub.mp4" overlays={overlays1} />
      <VideoScrubber videoSrc="/video_2_scrub.mp4" overlays={overlays2} />
      <HorizontalScroll />
      <About />
      <Pricing />
      <Playground />
      <FeaturedWork />
      <StackedCards />
      <PinnedSequence />
     
    </div>
  );
}

export default App;