const STATS_DATA = [
  {
    id: 'customers',
    stat: '5M+',
    title: 'Happy customers',
    description: 'Trusted by sleepers across the world.',
    image: '/images/ranking.png',
  },
  {
    id: 'innovation',
    stat: '140',
    title: 'Years of innovation',
    description: 'A heritage of advancing better sleep.',
    image: '/images/idea.png',
  },
  {
    id: 'warranty',
    stat: '10 yr',
    title: 'Warranty options',
    description: 'Confidence backed by product coverage.',
    image: '/images/shield.png',
  },
  {
    id: 'delivery',
    stat: 'Free',
    title: 'Delivery',
    description: 'Convenient delivery on eligible orders.',
    image: '/images/fast.png',
  },
  {
    id: 'security',
    stat: '100%',
    title: 'Secure enquiry',
    description: 'Your details are handled with care.',
    image: '/images/padlock.png',
  },
];

export default function ComfortSection() {
  return (
    <section className="relative w-full min-h-[420px] lg:min-h-[437px] bg-[#25364A] overflow-hidden py-10 lg:py-0">
      <div className="relative w-full max-w-[1440px] min-h-[420px] lg:min-h-[437px] mx-auto px-4 sm:px-10 lg:px-12 flex flex-col justify-center">
        <div
          className="w-full lg:w-[1127px] mx-auto flex flex-col items-center p-0 flex-none order-0 pt-0 lg:pt-[40px]"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            width: '1127px',
            maxWidth: '100%',
            height: '68px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          <h2
            className="w-full font-gotham text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[68px] text-center text-white select-none"
            style={{
              fontFamily: "'Gotham', sans-serif",
              fontStyle: 'normal',
              fontWeight: 350,
              fontSize: '40px',
              lineHeight: '68px',
              color: '#FFFFFF',
            }}
          >
            Comfort you can count on
          </h2>
        </div>

        <div className="w-full mt-6 sm:mt-8 lg:mt-[36px] pb-0 lg:pb-[45px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[18px]">
            {STATS_DATA.map((item) => (
              <article
                key={item.id}
                className="w-full h-auto min-h-[200px] lg:min-h-[233.85px] p-[20px_18px] sm:p-[25px_22px] bg-[#D7F0FF] rounded-none flex flex-col justify-center items-start text-left shadow-none select-none"
              >
                <div className="flex-none order-0 w-[50px] h-[50px] flex items-center justify-start">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[50px] h-[50px] object-contain select-none pointer-events-none"
                    loading="lazy"
                  />
                </div>

                <div className="pt-[12px] sm:pt-[13px] flex-none order-1">
                  <span className="font-optima font-normal text-3xl sm:text-[34px] leading-[38px] text-[#25364A]">
                    {item.stat}
                  </span>
                </div>

                <div className="pt-[2px] flex-none order-2">
                  <h3 className="font-optima font-normal text-[16px] sm:text-[18px] leading-[20px] text-[#25364A]">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-[10px] sm:pt-[14px] flex-none order-3">
                  <p className="font-optima font-normal text-[11px] leading-[18px] text-[#17212C]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
