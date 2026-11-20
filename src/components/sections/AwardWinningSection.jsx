const AWARDS = [
  { id: 'award-1', src: '/images/award1.png', alt: 'BrandSpark Most Trusted Newsweek 2021', imgStyle: { width: '135px', height: '178px' } },
  { id: 'award-2', src: '/images/award2.png', alt: 'Big Furniture Group Award Winner 2023', imgStyle: { width: '185px', height: '96px' } },
  { id: 'award-3', src: '/images/award3.png', alt: 'Good Housekeeping Institute Approved 2023', imgStyle: { width: '155px', height: '102px' } },
  { id: 'award-4', src: '/images/award4.png', alt: 'Finder Award Winner', imgStyle: { width: '145px', height: '145px' } },
  { id: 'award-5', src: '/images/award5.png', alt: 'NBF Bed Product of the Year Winner', imgStyle: { width: '155px', height: '155px' } },
];

export default function AwardWinningSection() {
  const loopAwards = [
    ...AWARDS, ...AWARDS,
    ...AWARDS, ...AWARDS,
  ];

  return (
    <section className="relative w-full h-[340px] sm:h-[370px] bg-[#F4F5F0] overflow-hidden select-none flex flex-col justify-between items-center pt-[26px] sm:pt-[34px] pb-[10px] sm:pb-[14px] -mt-[1px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-12 flex justify-center flex-none">
        <h2
          className="font-gotham text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] text-[#25364A] text-center select-none whitespace-nowrap"
          style={{
            width: '285px',
            maxWidth: '100%',
            height: '48px',
            fontFamily: "'Gotham', sans-serif",
            fontStyle: 'normal',
            fontWeight: 350,
            fontSize: '40px',
            lineHeight: '48px',
            color: '#25364A',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          Award Wining
        </h2>
      </div>

      <div className="w-full h-[240px] overflow-hidden relative flex-none p-0 m-0">
        <div className="animate-marquee-awards items-center flex">
          {loopAwards.map((award, index) => (
            <div
              key={`${award.id}-${index}`}
              className="w-[240px] h-[240px] flex-none relative flex items-center justify-center p-0 m-0"
              style={{ width: '240px', height: '240px' }}
            >
              <img
                src={award.src}
                alt={award.alt}
                style={award.imgStyle}
                className="object-contain select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
