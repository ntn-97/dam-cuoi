import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import LeafDecoration from './LeafDecoration';

export default function GiftSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');

  const giftInfo = {
    groom: {
      name: 'Nguyễn Văn Tú',
      bank: 'Techcombank',
      account: '1234567890',
      label: 'Chú Rể',
      qr: '/images/qr-chu-re.png',
    },
    bride: {
      name: 'Lê Vy',
      bank: 'MB Bank',
      account: '1234567890',
      label: 'Cô Dâu',
      qr: '/images/qr-chu-re.png',
    },
  }

  const downloadQR = async (src: string, label: string) => {
    const res = await fetch(src);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `qr-mung-cuoi-${label}.png`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const openModal = () => setIsModalOpen(true);
  const switchTab = (tab: 'groom' | 'bride') => setActiveTab(tab);

  return (
    <section
      id="gift"
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgb(240,237,228) 0%, rgb(245,243,237) 50%, rgb(240,237,228) 100%)',
      }}
    >
      <LeafDecoration position="both" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section title */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'var(--font-body)' }}>
            Wedding Gift
          </p>
          <h2 className="text-4xl md:text-5xl text-primary" style={{ fontFamily: 'var(--font-script)' }}>
            Hộp Mừng Cưới
          </h2>
          <div className="section-divider mt-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(180,150,80)">
              <polyline points="20 12 20 22 4 22 4 12" />
              <rect x="2" y="7" width="20" height="5" />
              <line x1="12" y1="22" x2="12" y2="7" />
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
          </div>
        </AnimatedSection>

        {/* Red envelope */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col items-center">
            <motion.div
              className="cursor-pointer"
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ animation: 'envelope-bounce 2s ease infinite' }}
            >
              {/* Envelope design */}
              <div className="relative w-44 h-52">
                {/* Main envelope body */}
                <div
                  className="absolute inset-0 rounded-xl shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgb(220,60,40) 0%, rgb(200,50,30) 50%, rgb(180,40,25) 100%)',
                    border: '3px solid rgb(230,180,50)',
                  }}
                >
                  {/* Gold corner decorations */}
                  <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-gold rounded-tl" />
                  <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-gold rounded-tr" />
                  <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-gold rounded-bl" />
                  <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-gold rounded-br" />

                  {/* Double happiness character */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-5xl"
                      style={{
                        color: 'rgb(230,180,50)',
                        fontWeight: 900,
                        textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      }}
                    >
                      囍
                    </span>
                  </div>
                </div>

                {/* Sparkle effects */}
                {[
                  { top: '-8px', left: '-8px', delay: '0s' },
                  { top: '-8px', right: '-8px', delay: '0.5s' },
                  { bottom: '-8px', left: '50%', delay: '1s' },
                  { top: '50%', right: '-8px', delay: '1.5s' },
                ].map((pos, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 text-gold"
                    style={{
                      ...pos,
                      animation: `sparkle 2s ease-in-out ${pos.delay} infinite`,
                    }}
                  >
                    ✦
                  </div>
                ))}
              </div>
            </motion.div>

            <p
              className="text-primary mt-4 text-lg"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Nhấn để mở
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* QR Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal content */}
            <motion.div
              className="relative bg-cream rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-accent/20"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center
                           hover:bg-primary/20 transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(35,56,30)" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <h3
                className="text-2xl text-center text-primary mb-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Mừng Cưới
              </h3>
              <p
                className="text-center text-text-light text-sm mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Quét mã QR để chuyển tiền chúc phúc
              </p>

              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                {(['groom', 'bride'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => switchTab(tab)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer
                      ${
                        activeTab === tab
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-primary/5 text-primary hover:bg-primary/10'
                      }`}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {giftInfo[tab].label}
                  </button>
                ))}
              </div>

              {/* QR Code display */}
              <div className="text-center">
                <div className="inline-block p-4 bg-white rounded-xl shadow-inner mb-4">
                  <img
                    src={giftInfo[activeTab].qr}
                    alt={`QR ${giftInfo[activeTab].label}`}
                    className="w-50 h-50 object-contain"
                  />
                </div>

                <div className="space-y-1 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  <p className="text-primary font-semibold text-lg">{giftInfo[activeTab].name}</p>
                  <p className="text-accent font-medium">{giftInfo[activeTab].bank}</p>
                  <p className="text-text-light tracking-wider text-lg">{giftInfo[activeTab].account}</p>
                </div>

                <button
                  onClick={() => downloadQR(giftInfo[activeTab].qr, giftInfo[activeTab].label)}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white hover:bg-primary-light transition-all duration-300 hover:shadow-lg active:scale-[0.98] cursor-pointer"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Lưu QR
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
