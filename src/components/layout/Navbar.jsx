export default function Navbar({ onClaimOffer }) {
  return (
    <header
      className="absolute top-0 left-0 right-0 z-30 w-full h-[101px] flex justify-center items-center"
      style={{
        boxSizing: 'border-box',
        background: 'rgba(255, 255, 255, 0.09)',
        borderBottom: '0.666667px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <div
        className="w-full max-w-[1278px] h-[101px] flex flex-row items-center justify-between px-4 sm:px-8 lg:px-[57.51px]"
        style={{
          boxSizing: 'border-box',
        }}
      >
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
            className="w-[122px] h-[33px] p-[8px] bg-[#FFFFFF] hover:bg-white/90 active:bg-white/80 active:scale-[0.98] rounded-[4px] flex flex-row items-center justify-center gap-[14px] transition-all duration-200 cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 border-0"
            style={{
              boxSizing: 'border-box',
              width: '122px',
              height: '33px',
              background: '#FFFFFF',
              borderRadius: '4px',
              padding: '8px',
              gap: '14px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
              order: 1,
              flexGrow: 0,
            }}
          >
            <span
              className="w-[106px] h-[17px] font-optima text-[14px] leading-[16px] text-center uppercase text-[#25364A] select-none whitespace-nowrap flex items-center justify-center antialiased"
              style={{
                width: '106px',
                height: '17px',
                fontFamily: "'Optima', sans-serif",
                fontStyle: 'normal',
                fontWeight: 550,
                fontSize: '14px',
                lineHeight: '16px',
                textAlign: 'center',
                letterSpacing: '1.54px',
                textTransform: 'uppercase',
                color: '#25364A',
                flex: 'none',
                order: 0,
                flexGrow: 0,
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
