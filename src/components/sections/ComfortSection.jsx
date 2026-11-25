import { useRef, useState, useEffect } from 'react';

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
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollPrev = () => {
    if (!scrollRef.current) return;
    const cardWidth = (scrollRef.current.clientWidth - 12) / 2;
    scrollRef.current.scrollBy({ left: -(cardWidth + 12), behavior: 'smooth' });
  };

  const handleScrollNext = () => {
    if (!scrollRef.current) return;
    const cardWidth = (scrollRef.current.clientWidth - 12) / 2;
    scrollRef.current.scrollBy({ left: cardWidth + 12, behavior: 'smooth' });
  };

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const rangeSection = document.getElementById('range');
    if (rangeSection) {
      rangeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[420px] lg:min-h-[437px] bg-[#25364A] overflow-hidden py-10 lg:py-0">
      <div className="relative w-full max-w-[1440px] min-h-[420px] lg:min-h-[437px] mx-auto px-4 sm:px-10 lg:px-12 flex flex-col justify-center">
        <div className="figma-comfort-container w-full lg:w-[1127px] h-auto lg:h-[68px] mx-auto flex flex-col items-center p-0 flex-none order-0 pt-0 lg:pt-[40px]">
          <h2 className="figma-comfort-heading select-none">
            Comfort you can count on
          </h2>
        </div>

        <div className="w-full mt-6 sm:mt-8 lg:mt-[36px] pb-0 lg:pb-[45px]">
          {/* Mobile View (< sm): Smooth Horizontal Scroll with 2 cards visible & fixed center button */}
          <div className="block sm:hidden">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="flex overflow-x-auto gap-3 no-scrollbar scroll-smooth snap-x snap-mandatory py-1 touch-pan-x select-none"
            >
              {STATS_DATA.map((item) => (
                <article
                  key={item.id}
                  className="shrink-0 w-[calc((100%-12px)/2)] snap-start h-auto min-h-[205px] p-[16px_12px] bg-[#D7F0FF] rounded-none flex flex-col justify-start items-start text-left shadow-none select-none"
                >
                  <div className="flex-none order-0 w-[42px] h-[42px] flex items-center justify-start">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[42px] h-[42px] object-contain select-none pointer-events-none"
                      loading="lazy"
                    />
                  </div>

                  <div className="pt-[10px] flex-none order-1">
                    <span className="font-optima font-normal text-[26px] leading-[30px] text-[#25364A]">
                      {item.stat}
                    </span>
                  </div>

                  <div className="pt-[2px] flex-none order-2">
                    <h3 className="font-optima font-normal text-[14px] leading-[18px] text-[#25364A]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-[8px] flex-none order-3">
                    <p className="font-optima font-normal text-[11px] leading-[15px] text-[#17212C]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Mobile Navigation Arrows (Back & Forth) */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                type="button"
                onClick={handleScrollPrev}
                disabled={!canScrollLeft}
                aria-label="Previous card"
                className={`w-[36px] h-[36px] rounded-full border border-white/40 flex items-center justify-center transition-all duration-200 select-none ${
                  canScrollLeft
                    ? 'bg-white/10 active:bg-white/30 text-white cursor-pointer hover:border-white hover:bg-white/20'
                    : 'opacity-25 text-white/40 cursor-not-allowed'
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleScrollNext}
                disabled={!canScrollRight}
                aria-label="Next card"
                className={`w-[36px] h-[36px] rounded-full border border-white/40 flex items-center justify-center transition-all duration-200 select-none ${
                  canScrollRight
                    ? 'bg-white/10 active:bg-white/30 text-white cursor-pointer hover:border-white hover:bg-white/20'
                    : 'opacity-25 text-white/40 cursor-not-allowed'
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Center "Find your mattress" Button */}
            <div className="flex items-center justify-center mt-5">
              <a
                href="#range"
                onClick={handleButtonClick}
                className="w-[190px] h-[44px] px-6 bg-white hover:bg-[#D7F0FF] active:scale-[0.98] text-[#25364A] rounded-[4px] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span
                  className="font-optima text-[13px] leading-[16px] text-center tracking-[1.32px] capitalize text-[#25364A] select-none whitespace-nowrap"
                  style={{
                    fontFamily: "'Optima', sans-serif",
                    fontWeight: 550,
                    letterSpacing: '1.32px',
                  }}
                >
                  Find your mattress
                </span>
              </a>
            </div>
          </div>

          {/* Desktop / Tablet Grid (sm: and up) */}
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[18px]">
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
