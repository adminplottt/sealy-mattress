import Navbar from '../layout/Navbar';

export default function HeroSection({ onClaimOffer }) {
  return (
    <section
      className="relative w-full h-[851px] min-h-[851px] overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/images/Hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      <Navbar onClaimOffer={onClaimOffer} />

      <div className="relative w-full max-w-[1440px] h-full mx-auto px-4 sm:px-10 lg:px-12">
        <div className="absolute left-1/2 -translate-x-1/2 top-[215px] sm:top-[169px] w-full max-w-[722px] h-auto sm:h-[325px] px-4 sm:px-0 flex flex-col items-center gap-[6px] z-10">
          <div className="w-full max-w-[722px] flex flex-col items-center pt-2 sm:pt-4 flex-none order-0 self-stretch">
            <h1 className="w-full lg:w-[722px] lg:h-[161px] font-gotham font-medium text-3xl sm:text-6xl lg:text-[74px] leading-tight lg:leading-[80px] text-center tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-4.14072px] text-white select-none flex items-center justify-center">
              It&apos;s Time to Upgrade
              <br />
              Your Sleep.
            </h1>
          </div>

          <div className="w-full max-w-[560px] flex flex-col justify-center items-center py-[14px] sm:py-[16px] flex-none order-1">
            <p className="w-full font-optima font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px] text-center text-[#E7ECED]">
              Exchange your old mattress and enjoy ₹10,000 OFF on your new Sealy mattress.
            </p>
          </div>

          <div className="w-full max-w-[700px] h-[58px] flex justify-center items-center flex-none order-2 self-stretch">
            <button
              type="button"
              onClick={onClaimOffer}
              className="w-full sm:w-[321px] max-w-[321px] h-[58px] py-[18px] sm:py-[20px] px-4 sm:px-[26px] bg-[#25364A] hover:bg-[#2e425a] active:bg-[#1c2938] rounded-[4px] flex flex-row items-center justify-between gap-3 sm:gap-[30px] transition-colors duration-200 cursor-pointer shadow-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <span
                className="w-auto sm:w-[221px] h-[17px] font-optima text-[14px] sm:text-[16px] leading-[16px] text-center uppercase text-white whitespace-nowrap select-none flex items-center justify-center"
                style={{
                  fontFamily: "'Optima', sans-serif",
                  fontWeight: 550,
                  letterSpacing: '1.32px',
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
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
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
