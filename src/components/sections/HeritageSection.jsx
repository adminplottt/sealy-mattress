export default function HeritageSection({ onClaimOffer }) {
  return (
    <section className="relative w-full min-h-[650px] lg:min-h-[720px] bg-[#D7F0FF] overflow-hidden -mt-[1px]">
      <div className="relative w-full max-w-[1440px] min-h-[650px] lg:min-h-[720px] mx-auto py-10 lg:py-0 px-4 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="w-full lg:max-w-[550px] flex flex-col justify-center py-4 lg:py-12">
          <div>
            <p className="font-dmsans font-semibold text-[10px] leading-[15px] tracking-[2.2px] uppercase text-[#25364A] select-none">
              Heritage & innovation
            </p>
          </div>

          <div className="figma-legacy-built-container mt-3 sm:mt-4 w-full lg:w-[316px]">
            <h2 className="figma-legacy-built select-none">
              A legacy built
              <br />
              on better sleep.
            </h2>
          </div>

          <div className="mt-3 sm:mt-4 max-w-[435px]">
            <p className="font-optima font-normal text-[14px] sm:text-[16px] leading-[20px] lg:leading-[18px] text-[#25364A]">
              From Sealy, Texas in 1881 to bedrooms around the world, our purpose has remained the
              same: helping people rest well and wake ready.
            </p>
          </div>

          <div className="mt-5 sm:mt-6 w-full max-w-[473.76px] pt-3 border-t border-white/20">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 relative w-full">
              <div className="flex flex-col items-start">
                <span className="font-optima font-normal text-xl sm:text-[28px] leading-[26px] sm:leading-[31px] text-[#25364A]">
                  1881
                </span>
                <span className="font-dmsans font-normal text-[9px] sm:text-[10px] leading-[13px] sm:leading-[15px] text-[#25364A] sm:whitespace-nowrap mt-1">
                  Sealy’s story begins
                </span>
              </div>

              <div className="flex flex-col items-start">
                <span className="font-optima font-normal text-xl sm:text-[28px] leading-[26px] sm:leading-[31px] text-[#25364A]">
                  1950
                </span>
                <span className="font-dmsans font-normal text-[9px] sm:text-[10px] leading-[13px] sm:leading-[15px] text-[#25364A] sm:whitespace-nowrap mt-1">
                  Posturepedic® introduced
                </span>
              </div>

              <div className="flex flex-col items-start">
                <span className="font-optima font-normal text-xl sm:text-[28px] leading-[26px] sm:leading-[31px] text-[#25364A]">
                  2001
                </span>
                <span className="font-dmsans font-normal text-[9px] sm:text-[10px] leading-[13px] sm:leading-[15px] text-[#25364A] sm:whitespace-nowrap mt-1">
                  Sealy arrives in India
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <button
              type="button"
              onClick={onClaimOffer}
              className="w-[185px] sm:w-[196px] h-[45px] sm:h-[48px] px-5 sm:px-[26px] py-3 sm:py-[20px] bg-[#25364A] hover:bg-[#2d425b] active:bg-[#1c2938] rounded-[4px] flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <span className="font-optima font-[550] text-[13px] sm:text-[14px] leading-[16px] text-center tracking-[1.32px] capitalize text-white select-none whitespace-nowrap">
                Find Your Mattress
              </span>
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[594px] flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[594px] h-[300px] sm:h-[450px] lg:h-[630px] overflow-hidden rounded-none shadow-none">
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
