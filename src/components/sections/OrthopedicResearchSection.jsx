function CheckIcon() {
  return (
    <span className="w-[18px] h-[18px] rounded-full bg-[#D7F0FF] flex items-center justify-center flex-none">
      <svg
        className="w-[10px] h-[10px] text-[#25364A]"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2.5 6.2L4.8 8.5L9.5 3.5" />
      </svg>
    </span>
  );
}

const BULLETS = [
  'Built to Orthopaedic Advisory Board criteria',
  'Prototypes measured for correct support and comfort',
  'Covered by a 7–10 year Sealy warranty',
];

export default function OrthopedicResearchSection({ onClaimOffer }) {
  return (
    <section className="relative w-full min-h-[510px] bg-[#F4F5F0] overflow-hidden py-12 lg:py-0">
      <div className="relative w-full max-w-[1440px] min-h-[510px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 py-8 lg:py-[29px]">
        <div className="w-full lg:max-w-[466px] flex flex-col justify-start">
          <h2
            className="w-full lg:w-[419px] lg:h-[82px] font-gotham text-2xl sm:text-3xl lg:text-[34px] leading-tight lg:leading-[41px] text-[#25364A] select-none flex-none"
            style={{
              width: '419px',
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
            Backed by
            <br />
            orthopedic research
          </h2>

          <p className="mt-3 lg:mt-[10px] font-optima font-normal text-[12px] leading-[17px] text-[#000000]">
            Sealy works with orthopedic surgeons and specialists to understand the body&apos;s
            needs at rest. Every component, from foams to fabrics, is tested for long-lasting
            performance.
          </p>

          <ul className="mt-4 lg:mt-[13px] flex flex-col gap-[10px]">
            {BULLETS.map((bullet, idx) => (
              <li key={idx} className="flex items-center gap-[11px]">
                <CheckIcon />
                <span className="font-optima font-normal text-[12px] leading-[15px] text-[#000000]">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 lg:mt-[17px]">
            <button
              type="button"
              onClick={onClaimOffer}
              className="w-[183px] h-[48px] px-[26px] py-[20px] bg-[#25364A] hover:bg-[#2d425b] active:bg-[#1c2938] rounded-[4px] flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <span className="font-optima font-[550] text-[14px] leading-[16px] text-center tracking-[1.32px] capitalize text-white select-none whitespace-nowrap">
                Find My Mattress
              </span>
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[620px] xl:w-[650px] h-[280px] sm:h-[360px] lg:h-[452px] overflow-hidden rounded-none shadow-sm bg-white/40 flex-none">
          <img
            src="/images/Orthopedic research.png"
            alt="Backed by orthopedic research"
            className="w-full h-full object-cover select-none rounded-none"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
