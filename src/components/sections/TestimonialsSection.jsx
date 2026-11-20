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
  return (
    <section className="relative w-full min-h-[459px] bg-[#D7F0FF] overflow-hidden py-12 lg:py-0">
      <div className="relative w-full max-w-[1440px] min-h-[459px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-center">
        <div className="w-full text-center pt-0 lg:pt-[40px] flex flex-col items-center flex-none">
          <h2
            className="w-full lg:w-[1127px] lg:h-[82px] font-gotham text-2xl sm:text-3xl lg:text-[34px] leading-tight lg:leading-[41px] text-[#25364A] text-center select-none"
            style={{
              width: '1127px',
              maxWidth: '100%',
              height: '82px',
              fontFamily: "'Gotham', sans-serif",
              fontStyle: 'normal',
              fontWeight: 325,
              fontSize: '34px',
              lineHeight: '41px',
              textAlign: 'center',
              color: '#25364A',
            }}
          >
            Better sleep.
            <br />
            Happier mornings.
          </h2>
        </div>

        <div className="w-full mt-8 lg:mt-[36px] pb-0 lg:pb-[45px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="relative w-full h-[238px] bg-[#FFFFFF] rounded-[4px] shadow-sm flex flex-col items-center justify-start pt-[43px] px-6 text-center select-none"
              >
                <FiveStars />

                <h3 className="mt-[18px] font-optima font-normal text-[22px] sm:text-[24px] leading-[27px] text-[#000000] whitespace-nowrap">
                  {review.title}
                </h3>

                <p className="mt-[14px] font-optima font-normal text-[12px] leading-[15px] text-[#000000] max-w-[280px]">
                  {review.quote}
                </p>

                <p
                  className="font-optima text-[16px] leading-[15px] text-center text-[#000000] whitespace-nowrap select-none absolute left-0 right-0 bottom-[43px]"
                  style={{
                    fontFamily: "'Optima', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 550,
                    fontSize: '16px',
                    lineHeight: '15px',
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
      </div>
    </section>
  );
}
