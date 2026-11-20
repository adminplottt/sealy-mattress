const PERKS = [
  'No Cost EMI',
  'Free Delivery',
  'Try Before Buy',
  '10 Years Warrennty',
];

function SparkleIcon() {
  return (
    <img
      src="/images/sparkle.png"
      alt="sparkle"
      className="w-3.5 h-3.5 object-contain flex-none select-none pointer-events-none"
    />
  );
}

export default function TheSealyDifference() {
  const tickerItems = [
    ...PERKS, ...PERKS, ...PERKS, ...PERKS,
    ...PERKS, ...PERKS, ...PERKS, ...PERKS,
  ];

  return (
    <section className="relative w-full bg-[#F4F5F0] text-[#17212C] overflow-hidden">
      <div className="w-full h-[41px] bg-[#25364A] flex items-center overflow-hidden z-20 relative select-none">
        <div className="animate-marquee items-center gap-8 sm:gap-9 whitespace-nowrap pl-4">
          {tickerItems.map((perk, index) => (
            <div key={index} className="inline-flex items-center gap-[10px] flex-none">
              <span className="font-optima text-[13px] sm:text-[14px] font-normal leading-[16px] text-white tracking-[0.03em] whitespace-nowrap">
                {perk}
              </span>
              <SparkleIcon />
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-[1440px] min-h-[260px] lg:min-h-[311px] mx-auto px-4 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-[55px] flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 sm:gap-8 lg:gap-12">
        <div className="w-full lg:w-[543.79px] flex flex-col justify-center items-start flex-none">
          <p className="font-dmsans font-semibold text-[10px] leading-[15px] tracking-[2.2px] uppercase text-[#527C99] flex-none order-0 whitespace-nowrap">
            The Sealy difference
          </p>

          <div className="pt-[14px] lg:pt-[24px] flex-none order-1 w-full">
            <h2
              className="w-full lg:w-[508px] h-auto lg:h-[90px] font-gotham text-2xl sm:text-3xl lg:text-[34px] leading-tight sm:leading-[40px] lg:leading-[45px] text-[#25364A] select-none"
              style={{
                fontFamily: "'Gotham', sans-serif",
                fontStyle: 'normal',
                fontWeight: 325,
                color: '#25364A',
              }}
            >
              Made for deeper rest.
              <br />
              Designed for better mornings.
            </h2>
          </div>
        </div>

        <div className="w-full lg:w-[401.94px] lg:max-w-[500px] flex flex-col justify-start items-start flex-none">
          <p className="w-full lg:w-[401.94px] font-optima font-normal text-[14px] sm:text-[15px] leading-[22px] lg:leading-[23px] text-[#17212C]/90 flex-none order-0">
            For over 140 years, Sealy has refined the science and craft of sleep.
            Every mattress is designed to deliver considered comfort and dependable support,
            night after night.
          </p>

          <div className="mt-5 lg:mt-[36px] flex-none order-1">
            <a
              href="#range"
              className="inline-flex items-center gap-[30px] pb-[7px] border-b-[0.67px] border-[#17212C] text-[#17212C] hover:opacity-80 transition-opacity duration-200 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#17212C] whitespace-nowrap"
            >
              <span className="font-dmsans font-semibold text-[10px] leading-[15px] tracking-[1.3px] uppercase text-[#17212C] select-none whitespace-nowrap">
                Discover our Range
              </span>
              <span className="w-[18px] h-[18px] flex items-center justify-center flex-none">
                <svg
                  className="w-[14px] h-[14px] transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 8H13.5M9.5 4L13.5 8L9.5 12"
                    stroke="#17212C"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
