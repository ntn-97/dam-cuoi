import { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}

const DEFAULT_WISHES: Wish[] = [
  {
    name: 'Bạn Hải',
    message: 'Mừng ngày vu quy, chúc đôi uyên ương hạnh phúc bền lâu <3',
    timestamp: '06:39:29 09/01/2026',
  },
  {
    name: 'Em Nhân',
    message: 'Chúc người anh tốt của em có một đám cưới thật vui vẻ, hạnh phúc và tràn ngập tiếng cười ạ!',
    timestamp: '06:39:17 09/01/2026',
  },
  {
    name: 'Em Bảo',
    message: 'Chúc anh chị trăm năm hạnh phúc, sớm có tin vui :D',
    timestamp: '06:38:50 09/01/2026',
  },
];

export default function WishesSection() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('wedding-wishes');
    if (saved) {
      setWishes(JSON.parse(saved));
    } else {
      setWishes(DEFAULT_WISHES);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleString('vi-VN'),
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('wedding-wishes', JSON.stringify(updated));
    setName('');
    setMessage('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section
      id="wishes"
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgb(245,243,237) 0%, rgb(240,237,228) 50%, rgb(245,243,237) 100%)' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Section title */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'var(--font-body)' }}>
            Guestbook
          </p>
          <h2 className="text-4xl md:text-5xl text-primary" style={{ fontFamily: 'var(--font-script)' }}>
            Sổ Lưu Bút
          </h2>
          <div className="section-divider mt-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(180,150,80)">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
        </AnimatedSection>

        {/* Wish form */}
        <AnimatedSection delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/10 shadow-lg mb-10"
          >
            <div className="mb-4">
              <input
                type="text"
                placeholder="Tên của bạn..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 text-text-dark
                           placeholder:text-text-light/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                           transition-all duration-300"
                style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Gửi lời chúc đến cô dâu & chú rể..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 text-text-dark
                           placeholder:text-text-light/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
                           transition-all duration-300 resize-none"
                style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-white font-medium tracking-wider
                         hover:bg-primary-light transition-all duration-300 hover:shadow-lg
                         active:scale-[0.98] cursor-pointer"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}
            >
              Gửi Lời Chúc 💌
            </button>
            {showSuccess && (
              <p className="text-center text-primary-lighter mt-3 text-sm" style={{ fontFamily: 'var(--font-body)', animation: 'fadeInUp 0.5s ease' }}>
                ✨ Cảm ơn bạn đã gửi lời chúc!
              </p>
            )}
          </form>
        </AnimatedSection>

        {/* Wishes list */}
        <div className="space-y-4">
          {wishes.map((wish, index) => (
            <AnimatedSection key={index} delay={0.1 * Math.min(index, 5)}>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-primary/5 hover:border-accent/20 transition-all duration-300 hover:shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h4
                    className="text-primary font-semibold text-lg"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {wish.name}
                  </h4>
                  <span className="text-text-light text-xs whitespace-nowrap ml-4" style={{ fontFamily: 'var(--font-body)' }}>
                    {wish.timestamp}
                  </span>
                </div>
                <p className="text-text-dark/80 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}>
                  {wish.message}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
