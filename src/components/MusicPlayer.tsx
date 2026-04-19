import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import musicSrc from '../assets/music/music.mp3';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Create a simple tone as placeholder music
    // In production, replace with actual wedding song
    if (audioRef.current) {
      setHasLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!audioRef.current || !hasLoaded) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {
        // Autoplay blocked - user needs to interact first
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, hasLoaded]);

  return (
    <>
      {/* Hidden audio element - replace src with your actual music file */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={musicSrc}
      />

      <motion.button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full
                   bg-primary/90 backdrop-blur-sm border border-accent/30
                   flex items-center justify-center shadow-lg
                   hover:bg-primary transition-colors duration-300 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
      >
        {/* Equalizer bars */}
        <div className="flex items-end gap-0.5 h-5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-0.75 rounded-full bg-accent"
              style={{
                height: isPlaying ? undefined : '4px',
                animation: isPlaying
                  ? `equalizer-bar 0.8s ease-in-out ${i * 0.15}s infinite`
                  : 'none',
                transition: 'height 0.3s ease',
              }}
            />
          ))}
        </div>
      </motion.button>
    </>
  );
}
