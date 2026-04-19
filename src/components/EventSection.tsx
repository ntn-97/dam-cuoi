import AnimatedSection from './AnimatedSection';
import LeafDecoration from './LeafDecoration';
import { useCountdown } from '../hooks/useCountdown';

const WEDDING_DATE = new Date('2026-05-24T10:00:00+07:00');

export default function EventSection() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);

  const calendarDays = generateCalendar(2026, 4); // Hiển thị tháng 5

  return (
    <section
      id='events'
      className='relative py-20 px-6 overflow-hidden'
      style={{
        background:
          'linear-gradient(180deg, rgb(35,56,30) 0%, rgb(28,48,25) 100%)',
      }}
    >
      <LeafDecoration position='both' className='opacity-30' />

      <div className='max-w-5xl mx-auto relative z-10'>
        {/* Section title */}
        <AnimatedSection className='text-center mb-16'>
          <p
            className='text-accent-light/70 text-sm tracking-[0.3em] uppercase mb-3'
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Save The Date
          </p>
          <h2
            className='text-4xl md:text-5xl text-white'
            style={{ fontFamily: 'var(--font-script)' }}
          >
            Ngày Cưới
          </h2>
          <div className='section-divider mt-4'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='rgb(180,150,80)'
            >
              <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
            </svg>
          </div>
        </AnimatedSection>

        {/* Wedding date display */}
        <AnimatedSection className='text-center mb-12' delay={0.1}>
          <p
            className='text-white/50 text-sm tracking-[0.3em] uppercase mb-2'
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Chủ nhật
          </p>
          <div className='flex items-center justify-center gap-4 md:gap-8'>
            <div className='text-center'>
              <span
                className='text-4xl md:text-9xl text-accent font-bold leading-none'
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                24
              </span>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <div className='w-px h-12 bg-accent/40' />
              <span
                className='text-accent/60 text-xs tracking-widest uppercase'
                style={{ fontFamily: 'var(--font-body)' }}
              >
                tháng
              </span>
              <div className='w-px h-12 bg-accent/40' />
            </div>
            <div className='text-center'>
              <span
                className='text-4xl md:text-9xl text-accent font-bold leading-none'
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                05
              </span>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <div className='w-px h-12 bg-accent/40' />
              <span
                className='text-accent/60 text-xs tracking-widest uppercase'
                style={{ fontFamily: 'var(--font-body)' }}
              >
                năm
              </span>
              <div className='w-px h-12 bg-accent/40' />
            </div>
            <div className='text-center'>
              <span
                className='text-4xl md:text-9xl text-accent font-bold leading-none'
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                2026
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Countdown */}
        <AnimatedSection className='mb-16' delay={0.2}>
          <div className='flex justify-center gap-4 md:gap-8'>
            {[
              { value: days, label: 'Ngày' },
              { value: hours, label: 'Giờ' },
              { value: minutes, label: 'Phút' },
              { value: seconds, label: 'Giây' },
            ].map((item) => (
              <div
                key={item.label}
                className='text-center bg-white/10 backdrop-blur-sm rounded-xl px-4 py-5 md:px-8 md:py-6 border border-white/10'
                style={{ animation: 'countdown-pulse 2s ease-in-out infinite' }}
              >
                <div
                  className='text-3xl md:text-5xl text-accent font-bold mb-1'
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {String(item.value).padStart(2, '0')}
                </div>
                <div
                  className='text-white/60 text-xs md:text-sm tracking-wider uppercase'
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Calendar */}
        <AnimatedSection className='mb-16' delay={0.3}>
          <div className='max-w-sm mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
            <h3
              className='text-center text-accent text-xl mb-4'
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
            >
              Tháng 5, 2026
            </h3>
            <div className='grid grid-cols-7 gap-1 text-center'>
              {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((d) => (
                <div
                  key={d}
                  className='text-accent/70 text-xs py-1 font-semibold'
                >
                  {d}
                </div>
              ))}
              {calendarDays.map((day, i) => (
                <div
                  key={i}
                  className={`py-2 text-sm rounded-lg transition-all duration-300 ${
                    day === 24
                      ? 'bg-accent text-primary font-bold scale-110 shadow-lg shadow-accent/30'
                      : day
                        ? 'text-white/70 hover:bg-white/5'
                        : ''
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {day || ''}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Event cards */}
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Ceremony */}
          <AnimatedSection direction='left' delay={0.4}>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/15 transition-colors duration-500'>
              <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-venus-icon lucide-venus'
                >
                  <path d='M12 15v7' />
                  <path d='M9 19h6' />
                  <circle cx='12' cy='9' r='6' />
                </svg>
              </div>
              <h3
                className='text-2xl text-white mb-1'
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              >
                Tiệc Nhà Gái
              </h3>
              <p
                className='text-accent/70 text-sm mb-4 italic'
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Kính mời Quý Vị
              </p>
              <div
                className='space-y-3 text-white/80'
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <p className='flex items-center justify-center gap-2'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='rgb(180,150,80)'
                    strokeWidth='1.5'
                  >
                    <circle cx='12' cy='12' r='10' />
                    <polyline points='12 6 12 12 16 14' />
                  </svg>
                  <span className='text-lg'>10:00 AM</span>
                </p>
                <p className='flex items-center justify-center gap-2'>
                  <svg
                    width='16'
                    height='16'
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
                  <span>Thứ Bảy, 23/05/2026</span>
                </p>
                <p className='flex items-center justify-center gap-2 text-sm'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='rgb(180,150,80)'
                    strokeWidth='1.5'
                  >
                    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
                    <circle cx='12' cy='10' r='3' />
                  </svg>
                  <span>Nhà Hàng XXX, xx Đường 30 tháng 4, TP Đà Nẵng</span>
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Reception */}
          <AnimatedSection direction='right' delay={0.5}>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/15 transition-colors duration-500'>
              <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-mars-icon lucide-mars'
                >
                  <path d='M16 3h5v5' />
                  <path d='m21 3-6.75 6.75' />
                  <circle cx='10' cy='14' r='6' />
                </svg>
              </div>
              <h3
                className='text-2xl text-white mb-1'
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              >
                Tiệc Nhà Trai
              </h3>
              <p
                className='text-accent/70 text-sm mb-4 italic'
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Kính mời Quý Vị
              </p>
              <div
                className='space-y-3 text-white/80'
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <p className='flex items-center justify-center gap-2'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='rgb(180,150,80)'
                    strokeWidth='1.5'
                  >
                    <circle cx='12' cy='12' r='10' />
                    <polyline points='12 6 12 12 16 14' />
                  </svg>
                  <span className='text-lg'>11:00 AM</span>
                </p>
                <p className='flex items-center justify-center gap-2'>
                  <svg
                    width='16'
                    height='16'
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
                  <span>Chủ nhật, 24/05/2026</span>
                </p>
                <p className='flex items-center justify-center gap-2 text-sm'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='rgb(180,150,80)'
                    strokeWidth='1.5'
                  >
                    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
                    <circle cx='12' cy='10' r='3' />
                  </svg>
                  <span>Tư Gia Nam, Thăng Bình, Đà Nẵng</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function generateCalendar(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const grid: (number | null)[] = [];

  for (let i = 0; i < firstDay; i++) {
    grid.push(null);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    grid.push(d);
  }

  return grid;
}
