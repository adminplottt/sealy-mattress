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
    <section className="relative w-full min-h-[437px] bg-[#25364A] overflow-hidden py-12 lg:py-0">
      <div className="relative w-full max-w-[1440px] min-h-[437px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-center">
        <div className="w-full flex justify-center pt-0 lg:pt-[40px]">
          <h2 className="font-gotham font-[325] text-2xl sm:text-3xl lg:text-[34px] leading-tight lg:leading-[68px] text-center text-white select-none">
            Comfort you can count on
          </h2>
        </div>

        <div className="w-full mt-8 lg:mt-[36px] pb-0 lg:pb-[45px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[18px]">
            {STATS_DATA.map((item) => (
              <article
                key={item.id}
                className="w-full h-auto min-h-[220px] lg:min-h-[233.85px] p-[25px_22px] bg-[#D7F0FF] rounded-[4px] flex flex-col justify-center items-start text-left shadow-sm select-none"
              >
                <div className="flex-none order-0 w-[50px] h-[50px] flex items-center justify-start">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[50px] h-[50px] object-contain select-none pointer-events-none"
                    loading="lazy"
                  />
                </div>

                <div className="pt-[13px] flex-none order-1">
                  <span className="font-optima font-normal text-3xl sm:text-[34px] leading-[38px] text-[#25364A]">
                    {item.stat}
                  </span>
                </div>

                <div className="pt-[2px] flex-none order-2">
                  <h3 className="font-optima font-normal text-[17px] sm:text-[18px] leading-[20px] text-[#25364A]">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-[14px] flex-none order-3">
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
