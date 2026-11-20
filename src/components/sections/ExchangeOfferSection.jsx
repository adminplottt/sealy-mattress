export default function ExchangeOfferSection({ onClaimOffer }) {
  return (
    <section
      className="relative w-full min-h-[630px] overflow-hidden py-16 lg:py-0 flex items-center justify-center bg-[#17212C]"
      style={{
        backgroundImage: "url('/images/matress section.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-[795px] flex flex-col items-center">
          <h2
            className="w-full lg:w-[795px] lg:h-[130px] font-gotham font-medium text-3xl sm:text-5xl lg:text-[54px] leading-tight lg:leading-[65px] text-center text-white select-none flex items-center justify-center flex-none"
            style={{
              fontFamily: "'Gotham', 'Gotham Medium', sans-serif",
              fontWeight: 500,
              letterSpacing: '-3.10554px',
            }}
          >
            <span>
              Your old mattress
              <br />
              has had its time.
            </span>
          </h2>
        </div>

        <div className="w-full max-w-[500px] py-[25px] lg:py-[30px]">
          <p className="font-optima font-normal text-[14px] sm:text-[15px] leading-[24px] lg:leading-[26px] text-white text-center">
            Upgrade to Sealy and enjoy an exclusive ₹10,000 exchange benefit on your new mattress.*
          </p>
        </div>

        <div className="w-full max-w-[620px] flex justify-center items-center">
          <button
            type="button"
            onClick={onClaimOffer}
            className="w-[185px] h-[57px] px-[26px] py-[20px] bg-[#25364A] hover:bg-[#2e425a] active:bg-[#1c2938] border border-white/10 rounded-[4px] flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span className="w-[133px] font-optima font-[550] text-[14px] leading-[16px] text-center tracking-[1.32px] uppercase text-white select-none whitespace-nowrap">
              Get your offer
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
