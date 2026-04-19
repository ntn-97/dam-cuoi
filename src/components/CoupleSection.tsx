import AnimatedSection from './AnimatedSection';

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgb(245,243,237) 0%, rgb(240,237,228) 50%, rgb(245,243,237) 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'var(--font-body)' }}>
            Cô Dâu & Chú Rể
          </p>
          <h2 className="text-4xl md:text-5xl text-primary" style={{ fontFamily: 'var(--font-script)' }}>
            Chúng Mình
          </h2>
          <div className="section-divider mt-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(180,150,80)">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.5S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
            </svg>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Groom */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="text-center">
              <div className="relative w-52 h-52 mx-auto mb-6">
                <div
                  className="w-full h-full rounded-full overflow-hidden border-4 border-accent/30 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgb(60,90,50) 0%, rgb(35,56,30) 100%)',
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="/images/chu-re.png"
                      alt="Chú Rể"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-1.5 rounded-full border border-accent/20" style={{ animation: 'float 4s ease-in-out infinite' }} />
              </div>
              <h3 className="text-3xl text-primary mb-1" style={{ fontFamily: 'var(--font-script)' }}>
                Nguyễn Văn Tú
              </h3>
              <p className="text-accent text-sm tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Út Nam
              </p>
              <p className="text-text-light text-lg leading-relaxed max-w-xs mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
                Con bà <strong className="text-text-dark">Lê Thị ...</strong>
                <span className="text-sm italic mt-2 block">Thăng Bình, Quảng Nam</span>
              </p>
            </div>
          </AnimatedSection>

          {/* Bride */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="text-center">
              <div className="relative w-52 h-52 mx-auto mb-6">
                <div
                  className="w-full h-full rounded-full overflow-hidden border-4 border-accent/30 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgb(180,150,80) 0%, rgb(160,130,60) 100%)',
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                     <img
                      src="/images/co-dau.png"
                      alt="Cô Dâu"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-1.5 rounded-full border border-accent/20" style={{ animation: 'float 4s ease-in-out infinite 1s' }} />
              </div>
              <h3 className="text-3xl text-primary mb-1" style={{ fontFamily: 'var(--font-script)' }}>
                Lê Vy
              </h3>
              <p className="text-accent text-sm tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Út Nữ
              </p>
              <p className="text-text-light text-lg leading-relaxed max-w-xs mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
                Con ông <strong className="text-text-dark">Lê Văn C</strong>
                <br />
                và bà <strong className="text-text-dark">Phạm Thị D</strong>
                <br />
                <span className="text-sm italic mt-2 block">Gia Lai,..</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
