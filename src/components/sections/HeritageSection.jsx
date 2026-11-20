export default function HeritageSection({ onClaimOffer }) {
  return (
    <section className="relative w-full min-h-[720px] bg-[#D7F0FF] overflow-hidden">
      <div className="relative w-full max-w-[1278px] min-h-[720px] mx-auto py-12 lg:py-0 px-6 sm:px-10 lg:px-0">
        <div className="w-full lg:w-[639px] lg:h-[720px] lg:absolute lg:left-0 lg:top-0 flex flex-col justify-center">
          <div className="lg:absolute lg:left-[63px] lg:top-[189px]">
            <p className="font-dmsans font-semibold text-[10px] leading-[15px] tracking-[2.2px] uppercase text-[#25364A] select-none">
              Heritage & innovation
            </p>
          </div>

          <div className="mt-4 lg:mt-0 lg:absolute lg:left-[63px] lg:top-[218px] w-full lg:w-[264px] lg:h-[82px] flex-none">
            <h2
              className="w-full lg:w-[264px] lg:h-[82px] font-gotham text-3xl sm:text-4xl lg:text-[34px] leading-tight lg:leading-[41px] text-[#25364A] select-none"
              style={{
                width: '264px',
                maxWidth: '100%',
                height: '82px',
                fontFamily: "'Gotham', sans-serif",
                fontStyle: 'normal',
                fontWeight: 325,
                fontSize: '34px',
                lineHeight: '41px',
                color: '#25364A',
              }}
            >
              A legacy built
              <br />
              <span className="whitespace-nowrap">on better sleep.</span>
            </h2>
          </div>

          <div className="mt-4 lg:mt-0 lg:absolute lg:left-[63px] lg:top-[315px] max-w-[435px]">
            <p className="font-optima font-normal text-[15px] sm:text-[16px] leading-[22px] lg:leading-[18px] text-[#25364A]">
              From Sealy, Texas in 1881 to bedrooms around the world, our purpose has remained the
              same: helping people rest well and wake ready.
            </p>
          </div>

          <div className="mt-6 lg:mt-0 lg:absolute lg:left-[63px] lg:top-[391px] w-full max-w-[473.76px] pt-3 border-t border-white/20">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 relative w-full">
              <div className="flex flex-col items-start">
                <span className="font-optima font-normal text-2xl sm:text-[28px] leading-[31px] text-[#25364A]">
                  1881
                </span>
                <span className="font-dmsans font-normal text-[10px] leading-[15px] text-[#25364A] whitespace-nowrap mt-1">
                  Sealy’s story begins
                </span>
              </div>

              <div className="flex flex-col items-start">
                <span className="font-optima font-normal text-2xl sm:text-[28px] leading-[31px] text-[#25364A]">
                  1950
                </span>
                <span className="font-dmsans font-normal text-[10px] leading-[15px] text-[#25364A] whitespace-nowrap mt-1">
                  Posturepedic® introduced
                </span>
              </div>

              <div className="flex flex-col items-start">
                <span className="font-optima font-normal text-2xl sm:text-[28px] leading-[31px] text-[#25364A]">
                  2001
                </span>
                <span className="font-dmsans font-normal text-[10px] leading-[15px] text-[#25364A] whitespace-nowrap mt-1">
                  Sealy arrives in India
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:absolute lg:left-[63px] lg:top-[483.17px]">
            <button
              type="button"
              onClick={onClaimOffer}
              className="w-[196px] h-[48px] px-[26px] py-[20px] bg-[#25364A] hover:bg-[#2d425b] active:bg-[#1c2938] rounded-[4px] flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <span className="font-optima font-[550] text-[14px] leading-[16px] text-center tracking-[1.32px] capitalize text-white select-none whitespace-nowrap">
                Find Your Mattress
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:absolute lg:left-[619px] lg:top-0 w-full lg:w-[657px] lg:h-[720px] flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-[594px] h-[360px] sm:h-[450px] lg:h-[630px] lg:w-[594px] lg:absolute lg:left-0 lg:top-[45px] overflow-hidden rounded-none shadow-sm">
            <img
              src="/images/Heritage&Innovation.png"
              alt="A legacy built on better sleep"
              className="w-full h-full object-cover select-none rounded-none"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(0deg, rgba(16, 28, 42, 0.533) 0%, rgba(16, 28, 42, 0) 50%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
