import { motion, AnimatePresence } from 'framer-motion';
import FallingLeaves from './FallingLeaves';

interface OpeningScreenProps {
  onOpen: () => void;
  isVisible: boolean;
}

export default function OpeningScreen({ onOpen, isVisible }: OpeningScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgb(25, 42, 22) 0%, rgb(35, 56, 30) 50%, rgb(28, 48, 25) 100%)' }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <FallingLeaves count={15} />

          {/* Decorative corner elements */}
          <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-accent/40 rounded-tl-lg" />
          <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-accent/40 rounded-tr-lg" />
          <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-accent/40 rounded-bl-lg" />
          <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-accent/40 rounded-br-lg" />

          <motion.div
            className="text-center z-10 px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Small decorative text */}
            <motion.p
              className="text-accent-light/70 text-sm tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Wedding Invitation
            </motion.p>

            {/* Couple names */}
            <motion.h1
              className="text-5xl md:text-7xl text-white mb-2"
              style={{ fontFamily: 'var(--font-script)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Văn Tú
            </motion.h1>

            <motion.div
              className="flex items-center justify-center gap-4 my-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/60" />
              <span className="text-accent text-2xl" style={{ fontFamily: 'var(--font-script)' }}>
                &amp;
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/60" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl text-white mb-8"
              style={{ fontFamily: 'var(--font-script)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Lê Vy
            </motion.h1>

            {/* Wedding date */}
            <motion.p
              className="text-accent-light/80 text-lg tracking-widest mb-10"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              24 • 05 • 2026
            </motion.p>

            {/* Open button */}
            <motion.button
              onClick={onOpen}
              className="relative px-10 py-4 border-2 border-accent/60 text-accent-light 
                         rounded-full text-lg tracking-wider cursor-pointer
                         transition-all duration-500 hover:bg-accent/20 hover:border-accent
                         hover:shadow-[0_0_30px_rgba(180,150,80,0.3)]"
              style={{
                fontFamily: 'var(--font-body)',
                animation: 'pulse-glow 3s ease-in-out infinite',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Mở Thiệp</span>
            </motion.button>

            <motion.p
              className="text-white/40 text-sm mt-3 tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              Nhấn để mở
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
