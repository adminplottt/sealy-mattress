function FiveStars() {
  return (
    <div className="flex items-center justify-center gap-[10px]" aria-label="5 stars rating">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src="/images/Star 1.png"
          alt="star"
          className="w-[28px] h-[28px] object-contain select-none pointer-events-none"
        />
      ))}
    </div>
  );
}

const TESTIMONIALS = [
  {
    id: 'frame-8',
    title: '“Sleeping like a baby”',
    quote: 'This bed has been amazing!!! I have been getting the best sleep of my life.',
    author: '- SleepingSam Columbus, OH',
  },
  {
    id: 'frame-9',
    title: '“Absolutely love”',
    quote: 'So comfortable and get such restful sleep. Just thoroughly impressed all around!',
    author: '- Brittany, Missouri',
  },
  {
    id: 'frame-10',
    title: '“Upgrade your sleep!”',
    quote: 'This mattress is an amazing upgrade. It leaves me feeling supported without any pain.',
    author: '- Smint Cleveland, OH',
  },
];

export default function TestimonialsSection() {
  const handleNavigateToRange = (e) => {
    e.preventDefault();
    const rangeSection = document.getElementById('range');
    if (rangeSection) {
      rangeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[440px] lg:min-h-[459px] bg-[#D7F0FF] overflow-hidden py-10 lg:py-0 -mt-[1px] flex flex-col justify-center">
      <div className="relative w-full max-w-[1127px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col items-center justify-center pt-0 lg:pt-[40px] pb-0 lg:pb-[45px]">
        {/* Better sleep Happier mornings Heading */}
        <h2 className="figma-better-sleep select-none">
          Better sleep
          <br />
          Happier mornings
        </h2>

        {/* 3 Review Cards Container - exactly 1127px wide, matching heading */}
        <div className="w-full max-w-[1127px] mt-6 sm:mt-8 lg:mt-[36px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-[23.5px]">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="relative w-full min-h-[238px] h-auto sm:h-[238px] bg-[#FFFFFF] rounded-none shadow-none flex flex-col items-center justify-start pt-[36px] sm:pt-[43px] pb-[60px] sm:pb-0 px-4 sm:px-6 text-center select-none"
              >
                <FiveStars />

                <h3 className="mt-[16px] sm:mt-[18px] font-optima font-normal text-[20px] sm:text-[24px] leading-[25px] sm:leading-[27px] text-[#000000] whitespace-nowrap">
                  {review.title}
                </h3>

                <p className="mt-[12px] sm:mt-[14px] font-optima font-normal text-[12px] leading-[16px] text-[#000000] max-w-[280px]">
                  {review.quote}
                </p>

                <p
                  className="font-optima text-[15px] sm:text-[16px] leading-[15px] text-center text-[#000000] whitespace-nowrap select-none absolute left-0 right-0 bottom-[24px] sm:bottom-[36px]"
                  style={{
                    fontFamily: "'Optima', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 550,
                    textAlign: 'center',
                    color: '#000000',
                  }}
                >
                  {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-only "Find your mattress" Button */}
        <div className="flex sm:hidden items-center justify-center mt-6">
          <a
            href="#range"
            onClick={handleNavigateToRange}
            className="w-[190px] h-[45px] px-6 bg-[#25364A] hover:bg-[#2d425b] active:scale-[0.98] text-white rounded-[4px] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25364A]"
          >
            <span
              className="font-optima text-[13px] leading-[16px] text-center tracking-[1.32px] capitalize text-white select-none whitespace-nowrap"
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
    </section>
  );
}
