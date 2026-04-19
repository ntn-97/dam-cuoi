import { useState, useCallback } from 'react';
import OpeningScreen from './components/OpeningScreen';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import EventSection from './components/EventSection';
import GallerySection from './components/GallerySection';
import WishesSection from './components/WishesSection';
import GiftSection from './components/GiftSection';
import FooterSection from './components/FooterSection';
import MusicPlayer from './components/MusicPlayer';
import FallingLeaves from './components/FallingLeaves';
import { useAutoScroll } from './hooks/useAutoScroll';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useAutoScroll(isOpened, 10000);

  const handleOpen = useCallback(() => {
    setIsOpened(true);
    setIsMusicPlaying(true);
    // Scroll to top when opening
    window.scrollTo(0, 0);
  }, []);

  const toggleMusic = useCallback(() => {
    setIsMusicPlaying((prev) => !prev);
  }, []);

  return (
    <div className="relative">
      {/* Opening Screen */}
      <OpeningScreen onOpen={handleOpen} isVisible={!isOpened} />

      {/* Main Content - hidden until opened */}
      {isOpened && (
        <>
          <FallingLeaves count={8} />
          <main>
            <HeroSection />
            <CoupleSection />
            <EventSection />
            <GallerySection />
            <WishesSection />
            <GiftSection />
            <FooterSection />
          </main>
          <MusicPlayer isPlaying={isMusicPlaying} onToggle={toggleMusic} />
        </>
      )}
    </div>
  );
}

export default App;
