export default function Navbar({ onClaimOffer }) {
  return (
    <header className="absolute top-[2px] left-0 right-0 z-30 w-full border-b border-white/20">
      <div className="w-full max-w-[1440px] mx-auto h-[101px] px-4 sm:px-10 lg:px-12 flex flex-row items-center justify-between">
        <div className="flex-none order-0">
          <a href="/" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded">
            <img
              src="/images/logo.png"
              alt="Sealy Posturepedic"
              className="w-[90px] sm:w-[101px] h-[58px] sm:h-[66px] object-contain select-none"
            />
          </a>
        </div>

        <div className="flex-none order-1">
          <button
            type="button"
            onClick={onClaimOffer}
            className="w-[115px] sm:w-[122px] h-[33px] p-[8px] bg-[#25364A] hover:bg-[#2e425a] active:bg-[#1d2b3b] rounded-[4px] flex flex-row items-center justify-center transition-colors duration-200 cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span
              className="w-auto sm:w-[106px] h-[17px] font-optima text-[13px] sm:text-[14px] leading-[16px] text-center uppercase text-white select-none whitespace-nowrap flex items-center justify-center antialiased"
              style={{
                fontFamily: "'Optima', sans-serif",
                fontWeight: 550,
                letterSpacing: '1.54px',
              }}
            >
              Claim offer
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
