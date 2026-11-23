import Navbar from '../layout/Navbar';

export default function HeroSection({ onClaimOffer }) {
  return (
    <section className="hero-bg relative w-full h-[851px] min-h-[851px] overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      <Navbar onClaimOffer={onClaimOffer} />

      <div className="relative w-full max-w-[1440px] h-full mx-auto px-4 sm:px-10 lg:px-12">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-[169px] sm:translate-y-0 w-full max-w-[722px] h-auto sm:h-[325px] px-4 sm:px-0 flex flex-col items-center gap-[6px] z-10">
          <div className="w-full max-w-[722px] flex flex-col items-center pt-2 sm:pt-4 flex-none order-0 self-stretch">
            <h1 className="w-full lg:w-[722px] font-gotham font-medium text-3xl sm:text-5xl lg:text-[64px] leading-tight sm:leading-[58px] lg:leading-[70px] text-center tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-3px] text-white select-none flex items-center justify-center">
              It&apos;s Time to Upgrade
              <br />
              Your Sleep.
            </h1>
          </div>

          <div className="w-full max-w-[560px] flex flex-col justify-center items-center py-[14px] sm:py-[16px] flex-none order-1">
            <p className="w-full font-optima font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px] text-center text-[#E7ECED]">
              Exchange your old mattress and enjoy{' '}
              <span className="relative inline-block whitespace-nowrap text-[#B0A774] font-medium">
                <span className="relative z-10">₹10,000 OFF</span>
                <img
                  src="/images/brush-stroke.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute left-[-2%] -bottom-[4px] sm:-bottom-[6px] w-[104%] h-auto pointer-events-none select-none max-w-none"
                />
              </span>{' '}
              on your new Sealy mattress.
            </p>
          </div>

          <div className="w-full max-w-[700px] h-[58px] flex justify-center items-center flex-none order-2 self-stretch">
            <button
              type="button"
              onClick={onClaimOffer}
              className="w-full sm:w-[321px] max-w-[321px] h-[58px] py-[18px] sm:py-[20px] px-4 sm:px-[26px] bg-[#FFFFFF] hover:bg-white/95 active:scale-[0.99] rounded-[4px] flex flex-row items-center justify-between gap-3 sm:gap-[30px] transition-all duration-200 cursor-pointer shadow-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <span
                className="w-auto sm:w-[221px] h-[17px] font-optima text-[14px] sm:text-[16px] leading-[16px] text-center uppercase text-[#25364A] whitespace-nowrap select-none flex items-center justify-center antialiased"
                style={{
                  width: '221px',
                  height: '17px',
                  fontFamily: "'Optima', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 550,
                  fontSize: '16px',
                  lineHeight: '16px',
                  textAlign: 'center',
                  letterSpacing: '1.32px',
                  textTransform: 'uppercase',
                  color: '#25364A',
                }}
              >
                Claim your ₹10,000 off
              </span>

              <span className="w-[18px] h-[18px] flex items-center justify-center flex-none order-1">
                <svg
                  className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9H15M10.5 4.5L15 9L10.5 13.5"
                    stroke="#25364A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 md:left-10 lg:left-12 md:translate-x-0 bottom-6 sm:bottom-8 md:bottom-auto md:top-[773px] z-20 flex flex-row items-center justify-center gap-[12px] w-[148px] h-[12px] select-none pointer-events-none">
          <div className="w-[35px] h-[1px] bg-white flex-none order-0" />

          <span className="w-[101px] h-[12px] font-dmsans font-normal text-[8px] leading-[12px] tracking-[1.44px] uppercase text-white flex-none order-1 whitespace-nowrap">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
