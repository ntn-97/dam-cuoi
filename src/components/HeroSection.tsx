import { motion } from 'framer-motion';
import LeafDecoration from './LeafDecoration';

export default function HeroSection() {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
      style={{
        background:
          'linear-gradient(180deg, rgb(245,243,237) 0%, rgb(235,232,222) 50%, rgb(245,243,237) 100%)',
      }}
    >
      <LeafDecoration position='both' />

      {/* Decorative circles */}
      <div className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-primary/5 pointer-events-none' />
      <div className='absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border border-primary/5 pointer-events-none' />

      <div className='relative z-10 text-center px-6 py-20 max-w-3xl mx-auto'>
        {/* Small heading */}
        <motion.p
          className='text-primary-lighter text-sm tracking-[0.4em] uppercase mb-8'
          style={{ fontFamily: 'var(--font-body)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Trân trọng kính mời
        </motion.p>

        {/* Groom name */}
        <motion.h1
          className='text-6xl md:text-8xl text-primary mb-2'
          style={{ fontFamily: 'var(--font-script)' }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Văn Tú
        </motion.h1>

        {/* Ampersand divider */}
        <motion.div
          className='flex items-center justify-center gap-6 my-6'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className='h-px w-20 md:w-32 bg-gradient-to-r from-transparent to-accent' />
          <span
            className='text-accent text-4xl'
            style={{
              fontFamily: 'var(--font-script)',
              animation: 'heartbeat 2s ease-in-out infinite',
            }}
          >
            ♥
          </span>
          <div className='h-px w-20 md:w-32 bg-gradient-to-l from-transparent to-accent' />
        </motion.div>

        {/* Bride name */}
        <motion.h1
          className='text-6xl md:text-8xl text-primary mb-8'
          style={{ fontFamily: 'var(--font-script)' }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Lê Vy
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className='mt-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p
            className='text-primary/70 text-xl md:text-2xl italic'
            style={{ fontFamily: 'var(--font-body)' }}
          >
            "Thương nhau mấy núi cũng leo, mấy sông cũng lội, mấy đèo cũng qua"
          </p>
        </motion.div>

        {/* Wedding date badge */}
        <motion.div
          className='mt-12 inline-flex items-center gap-3 px-8 py-3 rounded-full border border-accent/40 bg-white/50 backdrop-blur-sm'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='rgb(180,150,80)'
            strokeWidth='1.5'
          >
            <rect x='3' y='4' width='18' height='18' rx='2' ry='2' />
            <line x1='16' y1='2' x2='16' y2='6' />
            <line x1='8' y1='2' x2='8' y2='6' />
            <line x1='3' y1='10' x2='21' y2='10' />
          </svg>
          <span
            className='text-primary text-lg tracking-widest'
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
          >
            24 . 05 . 2026
          </span>
        </motion.div>

        <motion.div
          className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() =>
            document
              .getElementById('events')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-arrow-big-down-dash-icon lucide-arrow-big-down-dash'
            >
              <path d='M14 8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-6.939 6.939a1.207 1.207 0 0 1-1.708 0l-6.94-6.94a.707.707 0 0 1 .5-1.206H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1z' />
              <path d='M9 4h6' />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
