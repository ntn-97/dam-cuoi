import AnimatedSection from './AnimatedSection';

export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="relative py-16 px-6 overflow-hidden text-center"
      style={{
        background: 'linear-gradient(180deg, rgb(35,56,30) 0%, rgb(25,42,22) 100%)',
      }}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <AnimatedSection>
          <p
            className="text-white/80 text-xl md:text-2xl italic leading-relaxed mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng tôi!
          </p>
          <p
            className="text-accent-light/60 text-sm md:text-base italic mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Your presence would be the greatest gift we could receive!
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/40" />
            <span
              className="text-accent text-5xl"
              style={{
                fontFamily: 'var(--font-script)',
                animation: 'heartbeat 2s ease-in-out infinite',
              }}
            >
              ♥
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/40" />
          </div>

          <p
            className="text-3xl md:text-4xl text-white mb-2"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            Văn Tú & Lê Vy
          </p>
          <p className="text-accent-light/60 text-sm tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>
            24 . 05 . 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-12">
          <p className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
            Made with 💚 for Tình iu của Tú & Vy
          </p>
        </AnimatedSection>
      </div>
    </footer>
  );
}
